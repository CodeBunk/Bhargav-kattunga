import { title } from "process";
import React from "react";
import { useNavigate } from "react-router";

const Cards = () => {
  const location = useNavigate();
  const Data = [
    {
      src: "/KingQueen.png",
      url: "https://www.behance.net/gallery/156976797/KingzQueenZ-Rummy",
      title: "Kingz Queenz",
      description:
        "An online rummy game designed to increase the interaction and engagment with the players or friends group",
    },
    {
      src: "/OneImmersive.png",
      url: "https://www.behance.net/gallery/154949507/OI-Branding-Guidelines",
      title: "One Immersive",
      description:
        "building a brand narrative that resonates with its audience while maintaining aesthetic consistency and brand integrity.",
    },
    {
      src: "/travia.png",
      url: "https://www.behance.net/gallery/159697011/TRAVIA-A-Travel-Application-Case-Study",
      title: "Travia",
      description:
        "A travel community application made to plan all the travel activities at a place.",
    },
  ];
  return (
    <div className=" w-full lg:px-20 px-4 text-white flex flex-col gap-10 max-md:pt-10 ">
      <div className=" lg:text-5xl text-3xl font-times max-md:text-center">
        Featured Projects
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 ">
        {Data.map((props: any) => (
          <a
            className="flex flex-col gap-4 hover:scale-[103%] transition-all duration-300 cursor-pointer  "
            target="_blank"
            href={props.url}
          >
            <img
              src={props.src}
              alt=""
              className=" w-full object-cover aspect-video rounded-3xl "
            />
            <div className="text-white font-times text-3xl font-normal ">
              {props.title}
            </div>
            <div className="text-white font-poppins">{props.description}</div>
          </a>
        ))}
        <div
          className="flex flex-col gap-4  text-black hover:text-white transition-all duration-300 cursor-pointer   "
          onClick={() => location("/projects")}
        >
          <div className=" aspect-video hover:scale-[103%] transition-all duration-300 rounded-3xl bg-[#0027F1] flex text-center items-center">
            <p className="w-full font-times text-3xl text-white">
              {" "}
              Don’t we designer want to show more?
            </p>
          </div>
          <div className="text-inherit font-times text-3xl font-normal ">
            click to go to projects page
          </div>
          <div className="text-inherit font-poppins">
            find the list of all the notable projects{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
