import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React, { useContext, useReducer } from "react";
import { cartContext } from "../Context/CartContext/CartContextProvider";

// 1. cart page should contain all the cart items that are saved in cart context in the form of a table; ( you can display atleast product name and product price in first two cells of any row). the third cell contains remove from cart button clicking on which shall remove the item from the cart ( hint:  you need to dispatch remove from cart action and update your cart )

// 2. Below all the cart items list on table foot; there should be a Total in first cell of row and Total (Total price of all items in cart ) in second cell;

// 3. below the table; there should be a button called `Place Order` clicking on which will open an alert dialog box which asks `Are you sure you want to place this order ?` and two buttons Cancel and Yes; clicking on cancel will close the alert dialog; click on yes will dispatch checkout action which will empty all the cart items in cart context;

const Cart = () => {

  const { state } = useContext(cartContext)


  return <Grid templateColumns="repeat(3, 1fr)" gap={4}>

    {
      state.data.map((el) => (<GridItem>
        <Image boxSize="250px" src={el.image} />
        <Text>{el.title}</Text>
        <Text>{el.price}</Text>
        <Button>remove</Button>
      </GridItem>))
    }


  </Grid>;
};

export default Cart;
