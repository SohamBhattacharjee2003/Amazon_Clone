import React from "react";
import { Button } from '@mui/material';
import styled from "styled-components";
import Navbar from "./Navbar";
import { useStateValue } from "../StateProvider";
import CurrencyFormat from "react-currency-format"; // Assuming you're using this library
import { getBasketTotal } from "../reducer"; // Import getBasketTotal function
import { CardElement,useElements,useStripe } from "@stripe/react-stripe-js";

function Payment() {
  const [{ basket, address }] = useStateValue();
  const element = useElements();
  const stripe = useStripe();

  return (
    <Container>
      <Navbar />
      <Main>
        <Review>
          <h2>Review Your Product</h2>
          <AddressContainer>
            <h5>Shipping Address</h5>
            <div>
              <p>Full Name: {address.fullname}</p>
              <p>Phone Number: {address.phone}</p>
              <p>Flat/Building: {address.flat}</p>
              <p>Area/Village: {address.area}</p>
              <p>Landmark: {address.landmark}</p>
              <p>City: {address.selectedCity}</p>
              <p>State: {address.selectedState}</p>
            </div>
          </AddressContainer>
          <PaymentContainer>
            <h5>Payment Method</h5>
            <div>
              <p>Card Details</p>

              <CardElement />
            </div>
          </PaymentContainer>
          <OrderContainer>
            <h5>Your Order</h5>
            <div>
              {basket.map((product, index) => (
                <Product key={index}>
                  <Image>
                    <img src={product.img} alt={product.title} />
                  </Image>
                  <Description>
                    <h4>{product.title}</h4>
                    <p>₹ {product.price}</p>
                    {/* Add button here if needed */}
                  </Description>
                </Product>
              ))}
            </div>
          </OrderContainer>
        </Review>
        <Subtotal>
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>Subtotal ({basket.length} items): <strong>{value}</strong></p>
                <small>
                  <input type="checkbox" />
                  <span>This order contains a Gift</span>
                  <button>Place Order</button>
                </small>
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)} // Pass basket to getBasketTotal function
            displayType="text"
            thousandSeparator={true}
            prefix={"₹ "}
          />
        </Subtotal>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1600px;
  background-color: rgb(234, 237, 237);
`;
const Main = styled.div`
  padding: 15px;
  display: flex;

  @media only screen and (max-width: 1200px)
  {
    flex-direction: column;

  }
`;
const Review = styled.div`
  background-color: #fff;
  flex: 0.7;
  h2 {
    font-weight: 500;
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;
  }
`;
const Subtotal = styled.div`
    flex: 0.3;
    background-color: #fff;
    margin-left: 15px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        font-size: 20px;
        margin-bottom: 10px;
    }
    small {
        display: flex;
        align-items: center;
        flex-direction: column;
        span {
            margin-top: 10px;
        }
        button {
            width: 100%;
            height: 33px;
            margin-top: 20px;
            background-color: #ffd814;
            border: none;
            outline: none;
            border-radius: 8px;
            cursor: pointer;
        }
    }

    @media only screen and (max-width: 1200px){
        flex: none;
        margin-top: 20px;
    }
`;

const AddressContainer = styled.div`
  margin-top: 20px;
  div {
    margin-top: 10px;

    p {
      font-size: 14px;
      margin-top: 4px;
    }
  }
`;
const PaymentContainer = styled.div`
  margin-top: 15px;
  div {
    margin-top: 15px;
    margin-left: 15px;

    p {
      font-size: 14px;
    }
  }
`;
const OrderContainer = styled.div``;
const Product = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Image = styled.div`
  flex: 0.3;
  img {
    width: 100%;
  }
  margin-right: 30px; /* Add margin to the right */
`;

const Description = styled.div`
  flex: 0.7;
  h4 {
    font-weight: 600;
    font-size: 18px;
  }
  p {
    margin-top: 5px;
  }
  button {
    background-color: transparent;
    color: #1384b4;
    border: none;
    outline: none;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Payment;
