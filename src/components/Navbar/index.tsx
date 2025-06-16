import React, { useEffect, useRef, useState } from "react";
import LOGO from "/Bhargav.svg";
import Icons from "../Icons";
import { useLocation, useNavigate } from "react-router";
import Button from "../Atoms/Button";
import { list } from "postcss";
import Curated from "../../../public/navbar/curated.gif"
import archives from "../../../public/navbar/archives.gif"
import defaultGIF from "../../../public/navbar/default.gif"


const Navbar = () => {
  const location = useNavigate();


  const [projects, setprojects] = useState(false)
  const [gif, setGif] = useState(defaultGIF)
  const currentLocation = useLocation()
  const NavbarData = [
    { name: "Home", URL: "/" },
    { name: "About", URL: "/about" },
    {
      name: "Projects",
      subcat: [
        {
          name: "Curated",
          subtitle: "Man! It's really hard to show only a couple things as a designer",
          URL: "/curated",
          gif: Curated

        }, {
          name: "Archives",
          subtitle: "All the things that I was forced to aside with time",
          URL: "/archives",
          gif: archives

        }],
      subtitle: "My curated projects",
      gif: defaultGIF
    },
    // { name: "Archives", URL: "/archives", },
    { name: "Resume", URL: "/resume" },

  ];
  // ref that wraps the Projects button + dropdown
  const projectsRef = useRef<HTMLDivElement>(null);

  // Close the dropdown if click happens outside this ref
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        projects &&
        projectsRef.current &&
        !projectsRef.current.contains(e.target as Node)
      ) {
        setprojects(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [projects]);

  return (
    <div
      className="w-screen backdrop-blur-lg border-b border-gray bg-white flex justify-between text-black items-center md:px-10 px-4 py-4 fixed top-0 left-0 z-10">
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


            {props.subcat ? (
              <div className=" flex flex-col gap-1  " ref={projectsRef} >
                <div >
                  <Button
                    variant="text"

                    onClick={() => setprojects(!projects)}
                    className={`" -h !w-auto !py-1 !px-2.5 border-none  flex-nowrap flex items-center gap-1 ${currentLocation?.pathname == props.URL || currentLocation?.pathname == "/curated" || currentLocation?.pathname == "/archives" ? " !bg-gray  !text-black  " : " "}`}
                  // className=" clear-start border-2 border-transparent transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:border-white rounded-full py-2 px-3 "
                  >
                    <p className="font-poppins"> {props.name}
                    </p>
                    <span className={`${projects ? "rotate-180 " : ""} `}>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </Button>
                </div>

                <div className={`  ${projects ? "grid grid-cols-5 gap-4 " : "hidden"}  gap-1 p-4 absolute right-20 top-20 w-96 bg-white border border-[#E2E8F0] rounded-lg shadow-lg"`} >
                  <img src={gif} alt="" className=" col-span-2 aspect-square h-full object-cover rounded-lg" />
                  <div className=" col-span-3 flex flex-col gap-1">
                    {props.subcat.map((subcat: any) => (
                      <div className=" flex flex-col gap-1 items- hover:bg-bgmuted p-2   rounded-md font-manrope cursor-pointer" onMouseEnter={() => setGif(subcat.gif)} onMouseLeave={() => setGif(props.gif)} onClick={() => location(subcat.URL)}>
                        <p className="font-poppin text-left font-medium  text-sm select-none"> {subcat.name} </p>
                        <p className="font-poppin text-left text-sm text-subtitle  select-none"> {subcat.subtitle} </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) :
              <Button
                variant="text"
                onClick={() => location(props.URL)}
                className={`" !w-auto !py-1 !px-2.5 border-none  ${currentLocation?.pathname == props.URL ? " !bg-gray  !text-black  " : " "}`}
              // className=" clear-start border-2 border-transparent transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:border-white rounded-full py-2 px-3 "
              >
                <p className="font-poppins"> {props.name}

                </p>
              </Button>}
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
            Link="https://www.behance.net/bhargavkattung"
          />
          <Icons variant="Medium" Link="https://medium.com/@bhargav.kattunga" />
          <Icons variant="Email" Link="mailto:bhargav.kattunga@gmail.com" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
