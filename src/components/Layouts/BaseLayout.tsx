import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useOutlet } from "react-router-dom";

const BaseLayout = () => {
  const outlet = useOutlet();
  return (
    <div className="flex flex-col h-screen justify-between overflow-scroll">
      <Navbar />
      <div className="flex-grow  flex-col flex max-w-screenm overflow-scroll">
        <div className="flex-grow ">{outlet}</div>
        <Footer />
      </div>
    </div>
  );
};

export default BaseLayout;
