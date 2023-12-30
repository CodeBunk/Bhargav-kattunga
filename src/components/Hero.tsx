import React from "react";
import macbook from "../assets/Macbook.png";
import Typography from "./Atoms/Typography";

const Hero = () => {
  return (
    <div className=" md:h-[calc(100vh-112px)] w-full flex flex-col md:flex-row items-center justify-between md:pl-20 px-10 max-md:pt-10 align-center  ">
      <div className=" h-full md:w-2/5 w-full object-contain flex items-center relative">
        <img
          src="/BhargavHero.png"
          alt=""
          className="hover:scale-[102%] cursor-pointer  rounded-3xl transition-all ease-out-in duration-300"
        />
      </div>

      <div className=" max-md:text-center md:w-3/5 w-full text-left md:px-10 max-md:pt-10 h-full text-white flex flex-col md:gap-7 gap-2 font-sherif justify-center cursor-wand ">
        <Typography variant="regular">
          I love crafting products and building stories.
        </Typography>
        <Typography variant="Heading">
          I am always dreaming and envisaging new things, are you too?😶‍🌫️
        </Typography>
      </div>
    </div>
  );
};

export default Hero;
