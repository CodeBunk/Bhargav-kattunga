import React from "react";
import LOGO from "/Bhargav.svg";
import Icons from "../Icons";
import { useNavigate } from "react-router";

const Navbar = () => {
  const location = useNavigate();
  return (
    <div className="w-screen backdrop-blur-lg bg-black bg-opacity-40 flex justify-between text-white items-center px-20 py-6  fixed top-0 left-0 z-10">
      <img
        src={LOGO}
        alt=""
        className="h-16 hover:scale-105  transition-all duration-300 cursor-pointer "
        onClick={() => location("/")}
      />
      <div className=" gap-10 flex  items-center transition-all duration-500 max-lg:hidden">
        <button className=" clear-start border-2 border-transparent   transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:border-white rounded-full py-2 px-3 ">
          <p className="font-poppins"> Resume </p>
        </button>

        <div className=" flex gap-4 items-center justify-center ">
          <Icons variant="Youtube" Link="https://www.youtube.com" />
          <Icons variant="Twitter" Link="https://www.twitter.com" />
          <Icons variant="LinkedIn" Link="https://www.linkedin.com" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
