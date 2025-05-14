import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from './Card';
import axios from '../axios';
import AddItems from './AddItems';

function SearchBox() {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [showAddItems, setShowAddItems] = useState(false);

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

const SearchContainer = styled.div`
    width: 100%;
    padding: 20px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const AddIcon = styled.button`
    background-color: #f0c14b;
    border: 1px solid;
    margin-left: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 4px;
`;

const ProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

export default SearchBox;
