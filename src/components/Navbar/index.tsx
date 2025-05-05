import React from "react";
import LOGO from "/Bhargav.svg";
import Icons from "../Icons";
import { useLocation, useNavigate } from "react-router";
import Button from "../Atoms/Button";
import { list } from "postcss";

const Navbar = () => {
  const location = useNavigate();
  const currentLocation = useLocation()
  const NavbarData = [
    { name: "Home", URL: "/" },
    { name: "About", URL: "/about" },
    { name: "Projects", URL: "/project" },
    { name: "Archives", URL: "/archives", },
    { name: "Resume", URL: "/resume" },

  ];

  console.log(currentLocation?.pathname, "location")
  return (
    <div className="w-screen backdrop-blur-lg bg-white flex justify-between text-black items-center md:px-10 px-4 py-4 fixed top-0 left-0 z-10">
      {/* <img
        src={LOGO}
        alt=""
        className="md:h-16 h-10 hover:scale-105  transition-all duration-300 cursor-pointer "
        onClick={() => (
          location("/"),
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        )}
      /> */}
      <div onClick={() => (
        location("/"),
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      )} >
        Bhargav Sai Ram Kattunga
      </div>
      <div className="  flex items-center transition-all duration-500 ">
        {NavbarData.map((props: any) => (
          <div className=" flex pr-1 gap-1 items-center">
            <Button
              variant="text"
              onClick={() => location(props.URL)}
              className={`" !w-auto !py-1 !px-2.5 border-none  ${currentLocation?.pathname == props.URL ? " !bg-gray  !text-black  " : " "}`}
            // className=" clear-start border-2 border-transparent transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:border-white rounded-full py-2 px-3 "
            >
              <p className="font-poppins"> {props.name} </p>
            </Button>
            <svg width="6" height="6" viewBox="0 0 6 6" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.46669 2.99989C5.46669 4.39901 4.33248 5.53322 2.93336 5.53322C1.53423 5.53322 0.400024 4.39901 0.400024 2.99989C0.400024 1.60076 1.53423 0.466553 2.93336 0.466553C4.33248 0.466553 5.46669 1.60076 5.46669 2.99989Z" fill="#9E9FA7" />
            </svg>
          </div>



        ))}
        <div className=" flex gap-1 items-center justify-center  ">
          <Icons
            variant="LinkedIn"
            Link="https://linkedin.com/in/bhargav-sai-ram-kattunga-047365236"
          />
          <Icons
            variant="Behance"
            Link="https://linkedin.com/in/bhargav-sai-ram-kattunga-047365236"
          />
          <Icons variant="Medium" Link="mailto:bhargav.kattunga@gmail.com" />
          <Icons variant="Email" Link="mailto:bhargav.kattunga@gmail.com" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
