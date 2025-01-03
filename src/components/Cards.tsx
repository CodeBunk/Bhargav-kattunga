import { title } from "process";
import React from "react";
import { useNavigate } from "react-router";

const Cards = () => {
  const location = useNavigate();
  const Data = [
    {
      src: "/KingQueen.png",
      url: "/kingzqueenz",
      title: "Kingz Queenz",
      description:
        "An online rummy game designed to increase the interaction and engagment with the players or friends group",
    },
    {
      src: "/KingQueen.png",
      url: "/leafcraft",
      title: "Leafcraft",
      description:
        "An online rummy game designed to increase the interaction and engagment with the players or friends group",
    },
    {
      src: "/KingQueen.png",
      url: "/wishtronics",
      title: "wishtronics",
      description:
        "An online rummy game designed to increase the interaction and engagment with the players or friends group",
    },
    // {
    //   src: "/KingQueen.png",
    //   url: "https://www.behance.net/gallery/156976797/KingzQueenZ-Rummy",
    //   title: "Leafcraft",
    //   description:
    //     "An online rummy game designed to increase the interaction and engagment with the players or friends group",
    // },

    {
      src: "/OneImmersive.png",
      url: "/one-immersive",
      title: "One Immersive",
      description:
        "building a brand narrative that resonates with its audience while maintaining aesthetic consistency and brand integrity.",
    },
    // {
    //   src: "/OneImmersive.png",
    //   url: "/one-immersive",
    //   title: "One Immersive",
    //   description:
    //     "building a brand narrative that resonates with its audience while maintaining aesthetic consistency and brand integrity.",
    // },
    {
      src: "/KingQueen.png",
      url: "https://www.behance.net/gallery/156976797/KingzQueenZ-Rummy",
      title: "Travana",
      description:
        "An online rummy game designed to increase the interaction and engagment with the players or friends group",
    },
    {
      src: "/travia.png",
      url: "https://www.behance.net/gallery/159697011/TRAVIA-A-Travel-Application-Case-Study",
      title: "Travia",
      description:
        "A travel community application made to plan all the travel activities at a place.",
    },
  ];

  // const List = [
  //   {
  //     Title: "Wishtronics",
  //     URI: "wishtronics",
  //   },
  //   {
  //     Title: "Digital Marketing Collabs",
  //     URI: "collabs",
  //   },
  //   {
  //     Title: "Travana",
  //     URI: "travana",
  //   },
  //   {
  //     Title: "Technovation",
  //     URI: "technovation",
  //   },
  // ];
  return (
    <div className=" w-full lg:px-20 px-4 text-white flex flex-col gap-10 max-md:pt-20 ">
      <div className=" lg:text-5xl text-3xl font-times max-md:text-center">
        Featured Projects
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-12 ">
        {Data.map((props: any) => (
          <div
            className="flex flex-col gap-4 hover:scale-[103%] transition-all duration-300 cursor-pointer  "
            // target="_blank"
            onClick={() => location(props.url)}
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
          </div>
        ))}
        {/* <div
          className="flex flex-col gap-4 hidden  text-black hover:text-white transition-all duration-300 cursor-pointer   "
          onClick={() => location("/projects")}
        >
          <div className=" aspect-video hover:scale-[103%] transition-all duration-300 rounded-3xl bg-[#0027F1] flex text-center items-center">
            <p className="w-full font-times text-3xl text-white px-4">
              {" "}
              Don’t we designer want to show more?
            </p>
          </div>
          <div className=" md:text-inherit text-white font-times text-3xl font-normal ">
            click to go to Behance page
          </div>
          <div className=" md:text-inherit text-white font-poppins">
            find the list of all the notable projects{" "}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Cards;
