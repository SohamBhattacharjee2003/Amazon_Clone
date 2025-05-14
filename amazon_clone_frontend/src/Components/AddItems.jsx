import React, { useState } from "react";
import { Button } from '@mui/material';
import { Alert } from '@mui/lab';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import axios from "../axios"; // Import axios instance

function AddItems() {
    const navigate = useNavigate();
    const addProduct = (e) => {
        e.preventDefault();
        axios.post('/products/add', { title, image, price: parseFloat(price), rating: parseFloat(rating) })
            .then(() => {
                setTitle("");
                setImage("");
                setPrice(0);
                setRating(0);
                navigate('/'); // Redirect to home page after adding a product
            })
            .catch((error) => alert(error.message));
    }

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0);

    return (
        <Container>
            <Logo>
                <img src="./amazon_logo.png" alt="Amazon Logo" />
            </Logo>
            <FormContainer onSubmit={addProduct}>
                <h3>Add Product</h3>
                <InputContainer>
                    <InputLabel>Title</InputLabel>
                    <Input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                </InputContainer>
                <InputContainer>
                    <InputLabel>Image_URL</InputLabel>
                    <Input
                        type="text"
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                        required
                    />
                </InputContainer>
                <InputContainer>
                    <InputLabel>Price</InputLabel>
                    <Input
                        type="number"
                        step="0.01"
                        onChange={(e) => setPrice(parseFloat(e.target.value))}
                        value={price}
                        required
                    />
                </InputContainer>
                <InputContainer>
                    <InputLabel>Rating</InputLabel>
                    <Input
                        type="number"
                        step="0.1"
                        onChange={(e) => setRating(parseFloat(e.target.value))}
                        value={rating}
                        required
                    />
                </InputContainer>
                <Button type="submit">ADD PRODUCT</Button>
            </FormContainer>
        </Container>
    );
}

const Container = styled.div`
    width: 50%;
    min-width: 450px;
    height: fit-content;
    padding: 15px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Logo = styled.div`
    width: 120px;
    margin-bottom: 20px;
    img {
        width: 100%;
    }
`;

const FormContainer = styled.form`
    border: 1px solid lightgray;
    width: 55%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    h3 {
        font-size: 28px;
        font-weight: 400;
        line-height: 33px;
        align-self: flex-start;
        margin-bottom: 10px;
    }
`;

const InputContainer = styled.div`
    width: 100%;
    padding: 10px;
`;

const InputLabel = styled.p`
    font-size: 14px;
    font-weight: 600;
`;

const Input = styled.input`
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 3px solid lightgray;
    margin-top: 5px;
    &:hover {
        border: 3px solid orange;
    }
`;

const Button = styled.button`
    width: 70%;
    height: 40px;
    background-color: #f3b414;
    border: none;
    outline: none;
    border-radius: 10px;
    margin-top: 30px;
    padding: 10px;
    font-size: 18px;
`;

export default AddItems;
