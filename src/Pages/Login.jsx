import React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react"
import axios from "axios"
import { useState, useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import AuthContextProvider, { authContext } from "../Context/AuthContext/AuthContextProvider"
// 0. axios should be used for making network requests;

// 1. input boxes which takes email and password from the user

// 2. in this page you should get the auth state from auth context and based on auth state;if user is already logged in then user should be redirected to home page

// 3. network request (POST) should be made to api endpoint `https://reqres.in/api/login` with email and password details;

// 4. button should not allow additional click till API call is complete; user should see loading indicator till API call is complete;

// 5. upon successful login, login success action is dispatched with token we get back as response and the authentication status and token is updated in the context API. user then gets redirected to home page;

// 6. Proper Alert should be displayed to user upon unsuccessful API call. the message can be `Something went wrong. please refresh.`


const userLogin = ({ email, password }) => {
  return axios({
    url: "https://reqres.in/api/login",
    method: "POST",
    data: {
      email, password
    }
  })
}

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { state, dispatch } = useContext(authContext)
  const navigate = useNavigate()

  if (state.isAuth) {
    return <Navigate to='/' />
  }


  const handleuserform = (e) => {
    e.preventDefault()
    userLogin({ email, password }).then((res) => {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          token: res.data.token
        }
      })
    }).catch((err) =>
      dispatch({
        type: "LOGIN_FAILURE",
        payload: {
          token: null
        }
      })
    )
  }
  return (
    <Container>
      <Box>
        <Box><Heading>Log In</Heading></Box>
        <Stack direction="column" gap="0.6rem">
          <Box><Input type="email" placeholder="enter email" onChange={(e) => setEmail(e.target.value)} /></Box>
          <Box><Input type="password" placeholder="enter password" onChange={(e) => setPassword(e.target.value)} /></Box>
          <Box><Button colorScheme="teal" onClick={handleuserform}>Login</Button></Box>

        </Stack>
      </Box>
    </Container>
  )
};

export default Login;
