import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <div className=" mx-auto">
      <Navbar />
      <Hero />
      <Cards />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
