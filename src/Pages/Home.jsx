import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Container, Box, Button, GridItem, Grid, Image, Text } from "@chakra-ui/react"
import { cartContext } from "../Context/CartContext/CartContextProvider";

// 0. axios should be used for making network requests;

// 1. API request should be made to `https://fakestoreapi.com/products` on mount and get the data and the same data should be displayed in the form of cards ( 3 per row in large screens, 2 per row  in medium screens and 1 per row  in small screen  )

// 2. loading, error and data state should be maintained; show proper loading indicator and error state when required;

// 3. each product card should atleast contain product image, title , price and a add to cart button;

// 4. cart data is maintained in the cart context and based on the cart data if the product is already added to the cart, then the add to cart button should be disabled for that particular product;

// 5. clicking on add to cart button will add the product to the cart; this cart is maintained in the cart context; as useReducer has been used for state management in cart context; you need to dispatch some add_to_cart action to add new product to the cart.

const fetchProducts = async () => {
  const res = await axios.get('https://fakestoreapi.com/products')
  return res;
}

const Home = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  const getProducts = async () => {
    try {
      setLoading(true)
      const res = await fetchProducts()
      console.log(res.data)
      setProducts(res.data)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  const { state, dispatch } = useContext(cartContext)

  const addToCart = async (el) => {
    dispatch({ type: "ADD_CART", payload: el })
  }

  return <Container maxW="container.sm" >

    <h1>Home</h1>

    <Grid templateColumns="repeat(3, 1fr)" gap={6}>

      {
        loading ? <p>loading...</p>
          : error ? <p>{error}</p>
            : products.map((el) => (
              <GridItem>
                <Image boxSize="250px" objectFit="cover" src={el.image} alt="" />
                <Text>{el.title}</Text>
                <Text>{el.price}</Text>

                <Button onClick={() => addToCart(el)} colorScheme="linkedin">add to cart</Button>
              </GridItem>
            ))
      }
    </Grid>

  </Container>;
};

export default Home;
