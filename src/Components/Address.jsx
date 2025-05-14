import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { citiesData } from "../citiesData";
import { statData } from "../statedata";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";

function Address() {
  const [{}, dispatch] = useStateValue();
  const [fullname, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [flat, setFlat] = useState('');
  const [area, setArea] = useState('');
  const [landmark, setLandMark] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedState, setSelectedState] = useState('');
  
  const navigate = useNavigate();

  const deliver = (e) =>{
    e.preventDefault();

    dispatch({
        type: "SET_ADDRESS",
        item:{
            fullname,
            phone,
            flat,
            area,
            selectedCity,
            selectedState,

        }
    });
    navigate('/payment');
  };

  return (
    <Container>
      <Navbar />
      <Main>
        <FromContainer>
          <InputContainer>
            <p>Full Name</p>
            <input type="text" value={fullname} onChange={(e) => setFullName(e.target.value)} />
          </InputContainer>
          <InputContainer>
            <p>Phone Number</p>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </InputContainer>
          <InputContainer>
            <p>Flat No, House No, Building, Company</p>
            <input type="text" value={flat} onChange={(e) => setFlat(e.target.value)} />
          </InputContainer>
          <InputContainer>
            <p>Area, Colony, Street No, Village</p>
            <input type="text" value={area} onChange={(e) => setArea(e.target.value)} />
          </InputContainer>
          <InputContainer>
            <p>Landmark</p>
            <input type="text" value={landmark} onChange={(e) => setLandMark(e.target.value)} />
          </InputContainer>
          <InputContainer>
            <p>Town, City</p>
            <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
              <option value="" disabled>
                Select a city
              </option>
              {citiesData.map((city, index) => (
                <option key={index} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </InputContainer>
          <InputContainer>
            <p>State/Province</p>
            <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
              <option value="" disabled>
                Select a state
              </option>
              {statData.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </InputContainer>
          <button onClick={deliver}>Deliver to this Address</button>
        </FromContainer>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1600px;
  margin: auto;
  background-color: lightgray;
  position: relative;
`;

const Main = styled.div`
  padding: 15px;
`;

const FromContainer = styled.form`
  border: 1px solid lightgray;
  width: 55%;
  max-width: 800px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: #fff;
  margin: auto;

  button {
    align-self: flex-start;
    height: 33px;
    width: 250px;
    background-color: #ffa32a;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;

  p {
    font-size: 14px;
    font-weight: 600;
  }

  input,
  select {
    width: 100%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    margin-top: 5px;
    border: 1px solid lightgray;

    &:hover {
      border: 3px solid orange;
    }
  }
`;

export default Address;
