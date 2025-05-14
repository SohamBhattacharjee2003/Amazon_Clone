import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Card from "./Card";
import axios from '../axios';
import { useEffect, useState } from 'react';
import SearchBox from "./SearchBox";
import AddItems from "./AddItems";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products');
        console.log('Fetched products:', response.data); // Log the fetched products
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error.message, error.response ? error.response.data : 'No response from server');
      }
    };

    fetchProducts();
  }, []);

  const addItem = async (newProduct) => {
    try {
      console.log('Adding product:', newProduct); // Log the product being added
      await axios.post('/add-product', newProduct); // Endpoint to add a product
      // Refetch products after adding a new one
      const response = await axios.get('/products');
      console.log('Fetched products after adding:', response.data); // Log the fetched products
      setProducts(response.data);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <Container>
      <Navbar />
      <Banner>
        <img src="./banner.jpg" alt="Desktop Banner" />
        <img src="./mobile_banner.jpg" alt="Mobile Banner" />
      </Banner>
      <Main>
        {products.map(product => (
          <Card
            key={product._id}
            id={product._id}
            img={product.image}
            dic={{
              title: product.title,
              rating: product.rating,
              price: product.price,
            }}
          />
))}

      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background-color: rgb(234, 237, 237);
  max-width: 1600px;
  height: fit-content;
  margin: auto;
`;

const Banner = styled.div`
  width: 100%;
  position: relative;

  img {
    width: 100%;
    height: 450px; /* Adjusted height for the banner */
    -webkit-mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 2),
      rgba(0, 0, 0, 0.95),
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0)
    );
  }

  img:nth-child(2) {
    display: none;
  }

  @media only screen and (max-width: 767px) {
    img:nth-child(1) {
      display: none;
    }
    img:nth-child(2) {
      top: 0;
      left: 0;
      width: 100%;
      height: 450px; /* Adjust height for the mobile banner */
      display: block;
      -webkit-mask-image: none;
    }
  }
`;

const Main = styled.div`
  display: grid;
  grid-gap: 20px;
  justify-items: center;
  padding: 20px;
  margin-top: -20px;

  /* Responsive grid */
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0;
  }

  @media screen and (min-width: 1201px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default Home;
