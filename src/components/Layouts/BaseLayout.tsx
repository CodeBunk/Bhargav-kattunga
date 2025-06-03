import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useOutlet } from "react-router-dom";

const BaseLayout = () => {
  const outlet = useOutlet();

  console.log(window?.location, "ASdasd")

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [outlet])



  return (
    <div className="flex flex-col h-screen  items-start justify-between overflow-scroll">
      {/* <Navbar /> */}
      <div className="flex-grow flex-col flex max-w-screen overflow-scroll">
        <div className="flex-grow ">{outlet}</div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default BaseLayout;
