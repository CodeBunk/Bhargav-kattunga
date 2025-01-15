import React from "react";
import image1 from "../../public/Wishtronics/image1.png";
import image2 from "../../public/Wishtronics/image2.png";
import image3 from "../../public/Wishtronics/image3.png";
import image4 from "../../public/Wishtronics/image4.png";
import image5 from "../../public/Wishtronics/image5.png";
import image6 from "../../public/Wishtronics/image6.png";
import image7 from "../../public/Wishtronics/image7.png";
import image8 from "../../public/Wishtronics/image8.png";
import image9 from "../../public/Wishtronics/image9.png";
import image10 from "../../public/Wishtronics/image13.png";
import image11 from "../../public/Wishtronics/image11.png";
import image13 from "../../public/Wishtronics/tshirt1.jpg";
import image14 from "../../public/Wishtronics/tshirt2.jpg";
import image15 from "../../public/Wishtronics/tshirt3.jpg";
import IMage from "../../public/Wishtronics/image10.jpg";
import Edu1 from "../../public/Wishtronics/edu1.jpg";
import Edu2 from "../../public/Wishtronics/edu2.jpg";

import cap1 from "../../public/Wishtronics/cap1.jpg";
import cap2 from "../../public/Wishtronics/cap2.jpg";

const Wishtronics = () => {
  return (
    <div className=" text-white bg-black min-h-screen mt-10  ">
      <img src={image1} className=" w-full " alt="" />
      <img src={image2} className=" w-full " alt="" />
      <img src={image3} className=" w-full " alt="" />
      <img src={image4} className=" w-full " alt="" />
      <img src={image5} className=" w-full " alt="" />
      <img src={image6} className=" w-full " alt="" />
      <img src={image7} className=" w-full " alt="" />
      <img src={IMage} className=" w-full " alt="" />
      <div className=" grid grid-cols-2 gap-1 bg-white">
        <img src={cap1} className=" w-full " alt="" />
        <img src={cap2} className=" w-full " alt="" />
      </div>

      <img src={image8} className=" w-full " alt="" />
      <img src={image9} className=" w-full " alt="" />
      <div className=" grid grid-cols-2 gap-1 bg-white">
        <img src={Edu1} className=" w-full " alt="" />
        <img src={Edu2} className=" w-full " alt="" />
      </div>

      <img src={image11} className=" w-full " alt="" />
      <div className=" grid grid-cols-3 gap-1 bg-white">
        <img src={image15} className=" w-full " alt="" />
        <img src={image13} className=" w-full " alt="" />
        <img src={image14} className=" w-full " alt="" />
      </div>
      <img src={image10} className=" w-full " alt="" />
    </div>
  );
};

export default Wishtronics;
