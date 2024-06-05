import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Card from "./Card";

function Home() {
  return (
    <Container>
      <Navbar />
      <Banner>
        <img src="./banner.jpg" alt="Desktop Banner" />
        <img src="./mobile_banner.jpg" alt="Mobile Banner" />
      </Banner>
      <Main>
        <Card
          id={1}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmsB9kP5RH3GUAY2i1gkEAroc7yNafO3BeABybJ6h9ag&s"
          dic={{
            title: "Echo dot (4th Gen, 2020 release)Smart Speaker",
            rating: 4.5,
            price: "₹ 3500",
          }}
        />
        <Card
          id={2}
          img="https://resho.in/wp-content/uploads/2022/12/Boat-Rockerz-510-1.webp"
          dic={{
            title: "boAt Rockerz 510 | Bluetooth Ear Headphone",
            rating: 4.5,
            price: "₹ 1500",
          }}
        />
        <Card
          id={3}
          img="https://i.pinimg.com/564x/88/aa/c7/88aac75323eefdadf3e5b4413557406c.jpg"
          dic={{
            title: "Apple IPhone 15 Pro Max Blue Titanium",
            rating: 4.5,
            price: "₹ 160000",
          }}
        />
        <Card
          id={4}
          img="https://m.media-amazon.com/images/I/71evs2WKJjS.jpg"
          dic={{ title: "Acer Nitro 5  ", rating: 4.5, price: "₹ 78,046" }}
        />
        <Card
          id={5}
          img="https://media.croma.com/image/upload/v1655370905/Croma%20Assets/Large%20Appliances/Washers%20and%20Dryers/Images/253429_jx9ma4.png"
          dic={{
            title:
              "LG 11 kg 5 Star Inverter Fully Automatic Front Load Washing Machine ",
            rating: 4.5,
            price: "₹ 54,990",
          }}
        />
        <Card
          id={6}
          img="https://m.media-amazon.com/images/I/41RZi2HP6wL._SR290,290_.jpg"
          dic={{
            title: "VIZIO 40-inch D-Series Full HD 1080p Smart TV",
            rating: 4.5,
            price: "₹ 78,046",
          }}
        />
        <Card
          id={7}
          img="https://m.media-amazon.com/images/I/41RZi2HP6wL._SR290,290_.jpg"
          dic={{ title: "Acer Nitro 5  ", rating: 4.5, price: "₹ 12000" }}
        />
        <Card
          id={8}
          img="https://m.media-amazon.com/images/I/71evs2WKJjS.jpg"
          dic={{ title: "Acer Nitro 5  ", rating: 4.5, price: "₹ 78,046" }}
        />
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
