import React, { useEffect, useRef, useState } from "react";
import LOGO from "/BhargavLogo.jpg";
import Icons from "../Icons";
import { useLocation, useNavigate } from "react-router";
import Button from "../Atoms/Button";
import { Menu, X } from "lucide-react";

import Curated from "../../../public/navbar/curated.gif"
import archives from "../../../public/navbar/archives.gif"
import defaultGIF from "../../../public/navbar/default.gif"
import useClickSound from "../../Pages/sound";
import sound from "../../../public/Hero/Sound.mp3"
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

const Navbar = ({ muted }) => {
  const location = useNavigate();

  const playClickSound = useClickSound(sound, muted);
  const [projects, setprojects] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  const [gif, setGif] = useState(defaultGIF)
  const currentLocation = useLocation()


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
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(percent);
    };
    +
      // (you already had an empty useEffect here)
      window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="w-screen backdrop-blur-lg border-b border-gray bg-white flex justify-between text-black items-center md:px-10 px-4 py-4 fixed top-0 left-0 z-10">
      <img
        src={LOGO}
        alt=""
        className="md:h-16 h-10 hover:scale-105  rounded-xl  md:hidden transition-all duration-300 cursor-pointer "
        onClick={() => (
          // playClickSound(),
          location("/"),
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        )}
      />
      <div onClick={() => (
        // playClickSound(),
        location("/"),
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      )} className=" md:block hidden cursor-pointer">
        Bhargav Sai Ram Kattunga
      </div>
      {/* Mobile Hamburger */}
      <div className=" md:hidden transition-all duration-300 flex items-center ml-auto text-black" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {/* <svg width="24" height="24" fill="#000000" viewBox="0 0 24 24"> */}
        {isMobileMenuOpen ? (
          <X className="h-10 w-10 text-black" />
        ) : (
          <Menu className="h-10 w-10 text-black" />
        )}
        {/* </svg> */}
      </div>
      <div className="  md:flex hidden items-center transition-all duration-500 ">
        {NavbarData.map((props: any) => (
          <div className=" flex pr-1 gap-1 items-center">


            {props.subcat ? (
              <div className=" flex flex-col gap-1  " ref={projectsRef} >
                <div >
                  <Button
                    variant="text"
                    onClick={() =>
                      // (playClickSound(),
                      setprojects(!projects)}
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
                      // playClickSound(),
                      <div className=" flex flex-col gap-1 items- hover:bg-bgmuted p-2   rounded-md font-manrope cursor-pointer" onMouseEnter={() => setGif(subcat.gif)} onMouseLeave={() => setGif(props.gif)} onClick={() => (playClickSound(),
                        location(subcat.URL))}>
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
                onClick={() => (location(props.URL))}
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

      {/* Mobile Nav Drawer */}
      {/* <div
        className={`md:hidden fixed top-16 left-0 w-full h-screen bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex flex-col p-6 gap-6 pt-10">
          {NavbarData.map((item: any, index) => (
            <div key={index}>
              {item.name === "Projects" ? (
                <>
                  <div
                    onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                    className="flex justify-between transition-all duration-300 items-center cursor-pointer"
                  >
                    <p className="font-bold text-lg">{item.name}</p>

                    <span className={` transition-transform ${mobileProjectsOpen ? "rotate-180 " : ""} `}>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </div>
                  {mobileProjectsOpen && (
                    <div className="pl-4 mt-2 flex flex-col gap-2">
                      {item.subcat?.map((sub: any, subIdx: number) => (
                        <p
                          key={subIdx}
                          className="cursor-pointer"
                          onClick={() => {
                            location(sub.URL);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          {sub.name}
                        </p>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <p
                  className="cursor-pointer font-bold text-lg"
                  onClick={() => {
                    location(item?.URL);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.name}
                </p>
              )}
            </div>
          ))}
        </div>
      </div> */}
      {/* Mobile Nav Drawer */}
      <div
        className={`
    md:hidden fixed top-16 left-0
    w-full h-[calc(100vh-64px)]
    backdrop-blur-lg bg-white z-40
    transform transition-transform duration-300 ease-in-out 
    ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
  `}
      >
        <div className="px-4 md:px-10 py-4 flex flex-col pt-10  gap-4">
          {NavbarData.map((item, idx) =>
            item.subcat ? (
              <div key={idx}>
                <Button
                  variant="text"
                  className="!w-full flex  gap-2  items-center !py-2 !px-0"
                  onClick={() => (setMobileProjectsOpen(old => !old))}
                >
                  <span className=" text-center">{item.name}</span>
                  <span
                    className={`transition-transform duration-300 ${mobileProjectsOpen ? "rotate-180" : ""
                      }`}
                  >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                    </svg>
                  </span>
                </Button>

                {/* Projects submenu with fade/slide */}
                <div
                  className={`
              overflow-hidden
              transition-[max-height,opacity,transform]
              duration-300 ease-in-out
              ${mobileProjectsOpen
                      ? "max-h-60 opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 -translate-y-2"
                    }
            `}
                >
                  <div className="px-4 pt-4  flex flex-col gap-2">
                    {item.subcat.map((sub, i2) => (
                      <Button
                        key={i2}
                        variant="secondary"
                        className="!w-full text-left !py-2 !px-0"
                        onClick={() => {
                          location(sub.URL);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {sub.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Button
                key={idx}
                variant="text"
                className="!w-full text-left !py-2 !px-0"
                onClick={() => {
                  // playClickSound(),
                  location(item.URL);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.name}
              </Button>
            )
          )}

          {/* Social icons */}
          <div className="pt-4 flex gap-4  justify-center">
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


      <div className=" z-[100] fixed w-screen h-1 md:top-16 top-[73px] left-0 ">
        {/* <div className={`bg-black h-full  w-[50%] rounded`}></div> */}
        <div
          className="bg-black/50 h-full rounded"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
};

export default Navbar;
