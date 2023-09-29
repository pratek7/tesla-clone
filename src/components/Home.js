import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundimg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Exisiting inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundimg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Exisiting inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundimg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Exisiting inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundimg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Exisiting inventory"
      />
      <Section
        title="Lowest cost solar panel in America"
        description="Money-Back-Grauntee"
        backgroundimg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roofs costs less than new roofs"
        backgroundimg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundimg="accessories.jpg"
        leftBtnText="Shop Now"
      />
    </Container>
  );
};

export default Home;
const Container = styled.div`
  z-index: 10;
  height: 100vh;
`;
