import React from "react";
import LOGO from "/Bhargav.svg";
import Icons from "../Icons";
import { useNavigate } from "react-router";

const Navbar = () => {
  const location = useNavigate();

  const NavbarData = [
    { name: "Resume", URL: "/resume" },
    {
      name: "Projects",
      URL: "/projects",
    },
  ];
  return (
    <div className="w-screen backdrop-blur-lg bg-black bg-opacity-40 flex justify-between text-white items-center md:px-20 px-4 py-5 fixed top-0 left-0 z-10">
      <img
        src={LOGO}
        alt=""
        className="md:h-16 h-10 hover:scale-105  transition-all duration-300 cursor-pointer "
        onClick={() => location("/")}
      />
      <div className=" md:gap-10 gap-2 flex  items-center transition-all duration-500 ">
        {NavbarData.map((props: any) => (
          <button
            onClick={() => location(props.URL)}
            className=" clear-start border-2 border-transparent transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:border-white rounded-full py-2 px-3 "
          >
            <p className="font-poppins"> {props.name} </p>
          </button>
        ))}
        <div className=" flex md:gap-4 gap-2 items-center justify-center  ">
          <Icons
            variant="Dribble"
            Link="https://dribbble.com/KattungaBhargav"
          />
          <Icons
            variant="LinkedIn"
            Link="https://linkedin.com/in/bhargav-sai-ram-kattunga-047365236"
          />
          <Icons variant="Email" Link="mailto:bhargav.kattunga@gmail.com" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
