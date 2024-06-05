import React from 'react';
import styled from 'styled-components';
import Rating from '@material-ui/lab/Rating';
import { useStateValue } from '../StateProvider';

function Card({ id,img, dic}) {

  const[{basket},dispatch] = useStateValue();

  const addToBasket = (e) => {
    e.preventDefault();
    console.log("Basket >>>>",basket);
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title: dic.title,
        price: dic.price,
        img: img,
        rating: dic.rating,
      },
    });
  };

  return (
    <Container>
      <Images>
        <img src={img} alt="" />
      </Images>
      <Description>
        <h5>{dic.title}</h5>
        <Rating name="half-rating-read" value={dic.rating} precision={0.5} readOnly />
        <p>{dic.price}</p>
        <button onClick={addToBasket}>Add to Cart</button>
      </Description>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  z-index: 10;
  height: 100%;
`;

const Images = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  img {
    width: 180px;
    height: 180px;
    margin-right: 10px;
  }
`;

const Description = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;

  h5 {
    font-size: 16px;
    font-weight: 600;
  }

  p {
    font-weight: 600;
  }

  button {
    width: 100%;
    height: 33px;
    background-color: #fa8900;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }

  @media screen and (max-width: 767px) {
    height: auto;
    padding: 5px;
  }
`;

export default Card;
