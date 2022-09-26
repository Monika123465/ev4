import React from "react";
import {Container,Text} from "@chakra-ui/react"
import {Link} from "react-router-dom"

// 1. Navbar should be responsive
// 2. On the left hand side; If the user has logged in; Token should be displated; else Token shouldn't be shown.
// 3. on the right hand side; There will be there different links. `HOME` `LOGIN` `CART`

const Navbar = () => {
  return <>
  <Container  
  maxWidth="100%"
 display={"flex"}
 justifyContent={"space-around"}
 alignItems={"center"}
 bg="#FFF5F5"
  >
    <Link to="/"><Text>Home</Text></Link>
    <Link to="/login"><Text>Login</Text></Link>
    <Link to="/cart"><Text>Cart</Text></Link>
  </Container>
  </>;
};

export default Navbar;
