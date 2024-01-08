import React, { useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Projects = () => {
  const [show, setShow] = useState(false);
  const [limit, setlimit] = useState(3);
  const List = [
    {
      Title: "Leafcraft",
    },
    {
      Title: "Wishtronics",
    },
    {
      Title: "Digital Marketing Collabs",
    },
    {
      Title: "Travana",
    },
    {
      Title: "Technovation",
    },
  ];
  return (
    <div className="min-h-screen h-full flex flex-col gap-10">
      <Navbar />
      <div
        id="blog"
        className="flex-grow h-full flex flex-col items-center gap-10 w-full max-w-full  bg-black text-white px-5 lg:px-20 pb-10  pt-32"
      >
        {/* <div className="text-navblue w-full text-left font-PromovaRegular lg:text-5xl  ml-0.5 mt-8 max-md:text-3xl text-2xl ">
          Projects
        </div> */}
        <div className=" text-5xl font-times"> Projects</div>
        <div className="flex flex-col items-center mb-10 transition  ">
          <div className="grid grid-cols-3 md:gap-5 gap-10 max-md:grid-cols-1 max-md:items-stretch">
            {List.map((article, index) => (
              <a
                key={index}
                className="flex h-56 justify-center cursor-pointer flex-col w-full max-md:w-full align-center  border p-2 px-4 rounded-3xl border-white hover:shadow-xl border-opacity-60 hover:border-opacity-100 transition-all duration-300 hover:scale-[102%]"
              >
                <div className="text-white tracking-wide text-center text-3xl font-poppins  ">
                  {article.Title}
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className=" opacity-80 animate-pulse duration-100">
          Many more Coming soon
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
