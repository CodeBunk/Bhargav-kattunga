import React from "react";
import image1 from "../../public/leafctaft/img1.jpg";
import image2 from "../../public/leafctaft/img2.jpg";
import image3 from "../../public/leafctaft/img3.jpg";
import image4 from "../../public/leafctaft/img4.jpg";
import image5 from "../../public/leafctaft/Image5.png";
import Webp from "../../public/leafctaft/Image.webp";
const Leafcraft = () => {
  return (
    <div className=" text-white bg-black  min-h-screen  ">
      {/* <div>Leafcraft </div>
      <div>a low code no code application platform</div> */}
      <img src={image1} className=" w-full " alt="" />
      <img src={image2} className=" w-full " alt="" />
      <img src={image3} className=" w-full " alt="" />
      <img src={image4} className=" w-full " alt="" />
      <img src={image5} className=" w-full " alt="" />
      <img src={Webp} className=" w-full " alt="" />
    </div>
  );
};

export default Leafcraft;
