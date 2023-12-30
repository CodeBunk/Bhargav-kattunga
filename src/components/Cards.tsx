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
      src: "/.png",
      url: "https://www.behance.net/gallery/159697011/TRAVIA-A-Travel-Application-Case-Study",
      title: "Travia",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iusto esse doloremque eius et corporis consequuntur optio, explicabo sapiente, dicta veritatis quibusdam? Expedita tempora, numquam qui quod voluptas maiores a quia laborum commodi necessitatibus blanditiis distinctio assumenda et similique fugit rem veritatis consequatur pariatur cumque. Earum expedita nesciunt obcaecati consectetur!",
    },
  ];
  return (
    <div className=" w-full lg:px-20 px-4 text-white flex flex-col gap-10 ">
      <div className=" text-5xl font-times">Featured Projects</div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 ">
        {Data.map((props: any) => (
          <a
            className="flex flex-col gap-2 hover:scale-[103%] transition-all duration-300 cursor-pointer  "
            target="_blank"
            href="https://www.behance.net/gallery/156976797/KingzQueenZ-Rummy"
          >
            <img
              src={props.src}
              alt=""
              className=" aspect-video rounded-3xl "
            />
            <div className="text-white font-times text-3xl font-normal ">
              {props.title}
            </div>
            <div className="text-white font-poppins">{props.description}</div>
          </a>
        ))}
        <div
          className="flex flex-col gap-2 hover:scale-[103%] transition-all duration-300 cursor-pointer  "
          onClick={() => location("/projects")}
        >
          <img src="/More.png" alt="" className=" aspect-video rounded-3xl " />
        </div>
      </div>
    </div>
  );
};

export default Cards;
