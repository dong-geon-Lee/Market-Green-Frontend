import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Information from "../components/Information";
import Introduce from "../components/Introduce";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <Introduce></Introduce>
      <About></About>
      <Products></Products>
      <Information></Information>
    </>
  );
};

export default Home;
