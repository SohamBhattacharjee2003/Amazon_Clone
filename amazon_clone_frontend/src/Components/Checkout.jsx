import React from 'react';

import { useStateValue } from '../StateProvider';
import styled from 'styled-components';
import Navbar from './Navbar';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';
import { useNavigate } from 'react-router-dom';

function Checkout() {
    const navigate = useNavigate();
    const [{ basket }, dispatch] = useStateValue(); // Destructure dispatch from useStateValue()

    const removeFromBasket = (id) => { // Correct the argument to just id
        dispatch({
            type: "REMOVE_FROM_BASKET", // Correct the action type to match the reducer
            id: id, // Pass id directly
        });
    };

    return (
        <Container>
            <Navbar />
            <Main>
                <ShoppingCart>
                    <h2>Shopping Cart</h2>
                    {basket.map((product, index) => (
                        <Product key={index}>
                            <Image>
                                <img src={product.img} alt={product.title} />
                            </Image>
                            <Description>
                                <h4>{product.title}</h4>
                                <p>₹ {product.price}</p>
                                <button onClick={() => removeFromBasket(product.id)}>Remove</button> {/* Call removeFromBasket with product id */}
                            </Description>
                        </Product>
                    ))}
                </ShoppingCart>
                <Subtotal>
                    <CurrencyFormat
                        renderText={(value) => (
                            <>
                                <p>Subtotal ({basket.length} items): <strong>{value}</strong></p>
                                <small>
                                    <input type="checkbox" />
                                    <span>This order contains a Gift</span>
                                    <button onClick={() => navigate("/address")}>Proceed to Checkout</button>
                                </small>
                            </>
                        )}
                        decimalScale={2}
                        value={getBasketTotal(basket)}
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
    max-width: 1600px;
    height: fit-content;
    margin: auto;
    background-color: rgb(234,237,237);
    position: relative;
`;

const Main = styled.div`
    display: flex;
    padding: 15px;
    @media only screen and (max-width: 1200px){
        flex-direction: column;
    }
`;

const ShoppingCart = styled.div`
    padding: 15px;
    background-color: #fff;
    flex: 0.7;
    h2 {
        font-weight: 500;
        border-bottom: 1px solid lightgray;
        padding-bottom: 15px;
        font-size: 24px; /* Adjusted font size */
    }
    @media only screen and (max-width: 1200px){
        flex: none;
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

export default Checkout;
