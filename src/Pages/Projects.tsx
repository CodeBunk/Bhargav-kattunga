import React, { useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";

const Projects = ({ muted }) => {
  const [show, setShow] = useState(false);
  const [limit, setlimit] = useState(3);
  const location = useNavigate();
  const List = [
    {
      Title: "Leafcraft",
      // URI: "leafcraft",
    },
    {
      Title: "Wishtronics",
      // URI: "wishtronics",
    },
    {
      Title: "Digital Marketing Collabs",
      // URI: "collabs",
    },
    {
      Title: "Travana",
      // URI: "travana",
    },
    {
      Title: "Technovation",
      // URI: "technovation",
    },
  ];
  return (
    <div className="min-h-screen h-full flex flex-col gap-10">
      <Navbar muted={muted} />
      <div
        id="blog"
        className="flex-grow h-full flex flex-col items-center gap-10 w-full max-w-full  bg-black text-white px-5 lg:px-20 pb-10  pt-32"
      >
        {/* <div className="text-navblue w-full text-left font-PromovaRegular lg:text-5xl  ml-0.5 mt-8 max-md:text-3xl text-2xl ">
          Projects
        </div> */}
        <div className="flex flex-col gap-6 items-center ">
          <div className=" text-5xl font-times leading-5"> Archives</div>
          <div className=" opacity-80 animate-pulse duration-100">
            Releasing the Archive list and projects very soon
          </div>
        </div>

        <div className="flex flex-col items-center mb-10 transition  ">
          <div className="grid grid-cols-3 md:gap-5 gap-10 max-md:grid-cols-1 max-md:items-stretch">
            {List.map((article, index) => (
              <div
                key={index}
                // onClick={() => location(`/${article?.URI}`)}
                className="flex h-56 justify-center cursor-pointer flex-col w-full max-md:w-full align-center  border p-2 px-4 rounded-3xl border-white hover:shadow-xl border-opacity-60 hover:border-opacity-100 transition-all duration-300 hover:scale-[102%]"
              >
                <div className="text-white tracking-wide text-center text-xl font-poppins  ">
                  {article.Title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
