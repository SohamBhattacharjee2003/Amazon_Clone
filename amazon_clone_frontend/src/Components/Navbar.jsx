import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../StateProvider';
import { useNavigate } from 'react-router-dom';

function Navbar({ onSearch }) {

  const handleSearch = (query) => {
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleSearchClick = () => {
    const searchInput = document.querySelector('input[type="text"]');
    if (searchInput && onSearch) {
      onSearch(searchInput.value);
    }
  };

  const [{basket}] = useStateValue();
  const navigate = useNavigate();

  return (
    <Container>
      <Inner>
        <Logo>
          <img onClick={() => navigate("/")} src="./amazon_logo1.png" alt="" />
        </Logo>
        <Searchbar>
          <input type='text' placeholder='Search...' onChange={(e) => handleSearch(e.target.value)} />
          <Searchicon onClick={() => handleSearchClick()}>
            <img src="./searchIcon.png" alt="" />
          </Searchicon>
          <AddIcon onClick={() => navigate('/additems')}>+</AddIcon>
        </Searchbar>
        <RightContainer>
          <Navbutton>
            <p>Hello,</p>
            <p>Guest</p>
          </Navbutton>
          <Navbutton>
            <p>Return</p>
            <p>& Orders</p>
          </Navbutton>
          <Basketbutton onClick={() => navigate("/checkout")}>
            <img src="./basket-icon.png" alt="" />
            <p>{basket?.length}</p>
          </Basketbutton>
        </RightContainer>
      </Inner>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #131921;
  display: flex;
  align-items: center;
  position: relative;
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Add spacing between elements */
  
  @media (max-width: 768px) {
    padding: 0 15px; /* Add padding to Inner for small screens */
  }
`;

const Logo = styled.div`
  cursor: pointer;
  img {
    width: 100px;
    margin-top: 10px;
  }
`;

const Searchbar = styled.div`
  height: 35px;
  flex: 1;
  margin: 0px 15px;
  display: flex;
  align-items: center;
  input {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;
  }
  input::placeholder {
    padding-left: 5px;
  }
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

const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Searchicon = styled.div`
  background-color: #febd69;
  height: 37px; /* Match height with input */
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 5px 5px 0px;
  img {
    width: 22px;
  }
`;

const Navbutton = styled.div`
  color: #fff;
  padding: 5px 10px; /* Adjusted padding */
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin-right: 15px;
  p {
    margin: 0; /* Reset margin */
    font-size: 12px; /* Adjusted font size */
    font-weight: 600;
  }

  @media (max-width: 768px) {
    display: none; /* Hide Navbutton on small screens */
  }
`;

const Basketbutton = styled.div`
  img {
    width: 30px; /* Adjust as per your image size */
  }
  margin-right: 20px; /* Adjusted margin */
  display: flex;
  align-items: center;
  cursor: pointer;
  p {
    margin: 0;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    margin-left: 5px; /* Add some space between the icon and the text */
  }
`;

export default Navbar;
