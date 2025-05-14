import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Address from "./Components/Address";
import Payment from "./Components/Payment";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import AddItems from "./Components/AddItems";
import { Button } from '@mui/material';

const promise = loadStripe(
  'pk_test_51PBetmSBJzDFJR2FjPL350NEFyuV0JctHb2Ojl0pekbiDBXGBoco7lMwvLBxRVOavlj4FTJBQhdRWm1UGG8DUOtq00bZ5j86pb'
);

function App() {
  return (
    <Router>
      <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/address' element={<Address />} />
            <Route path='/payment' element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>}/>
            <Route path='/additems' element={<AddItems />} />
          </Routes>
      </Container>
    </Router>
  );
}
const Container = styled.div`
  width: 100vw; 
`;
export default App;
