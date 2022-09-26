import React from "react";
import {Container} from "@chakra-ui/react"
import {Route,Routes} from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import Navbar from "./Navbar"
import Cart from "../Pages/Cart"
import Home from "../Pages/Home"
import Login from "../Pages/Login"

// all the routing using the routing library should be done from here; 

const AllRoutes = () => {
  return <>
  <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
  </>

  </>;
};

export default AllRoutes;
