import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter } from "react-router-dom"
import AuthContextProvider from "./Context/AuthContext/AuthContextProvider";
import CartContextProvider from "./Context/CartContext/CartContextProvider";

// import all context providers

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <CartContextProvider>
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </CartContextProvider>
  </AuthContextProvider>


);



