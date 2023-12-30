import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="p mx-auto">
      <Navbar />
      <Hero />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
