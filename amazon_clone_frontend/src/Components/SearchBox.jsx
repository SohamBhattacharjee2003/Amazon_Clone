import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from './Card';
import axios from '../axios';


function SearchBox() {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        axios.get('/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <SearchContainer>
            <Input
                type="text"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ProductList>
                {filteredProducts.map(product => (
                    <Card key={product.id} id={product.id} img={product.image} dic={product} />
                ))}
            </ProductList>
        </SearchContainer>
    );
}

const SearchContainer = styled('div')({
    width: '100%',
    padding: '20px',
});

const Input = styled('input')({
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
});

const ProductList = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
});

export default SearchBox;
