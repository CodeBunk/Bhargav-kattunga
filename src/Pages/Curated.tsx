import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

import Doha from "../../public/Doha.jpg"
import kingsQueen from "../../public/KingsQueeen.jpg"
import lCS from "../../public/LCS.jpg"
import Oneimersive from "../../public/oneImmmersie.jpg"
import { useNavigate } from "react-router";
const Curated = () => {

  const Data = [
    {
      image: Doha,
      title: "Doha Bank",
      timeline: "06/2024-12/2024",
      subtitle: "Leading Doha Bank's corporate app design, while focusing on user engagement and enhancing retail banking system efficiency.",
      link: "/curated/Dohabank"
    },
    {
      image: lCS,
      title: "Leafcraft",
      link: "/curated/Leafcraft",
      timeline: "06/2024-12/2024",
      subtitle: "A low code no code application equipped with E-commerce approach to deliver software applications with personalisation and scalability.",
    },
    {
      image: Oneimersive,
      title: "One Immersive",
      link: "/curated/oneImmersive",
      timeline: "07/2022-10/2022 ",
      subtitle: "Assisted in articulating their vision and goals more effectively by crafting comprehensive branding and guidelines."
    },
    {
      image: kingsQueen,
      title: "KingzQueenz",
      link: "/curated/kingzqueenz",
      timeline: "03/2021-09/2021 ",
      subtitle: "Designed an MVP for an interactive gaming platform, achieving an increase in user retention during beta testing by voice channels."
    }]

  const location = useNavigate();
  return (
    <div className=' w-full h-full '>
      {Data?.map((data: any, index) => (
        <div key={index} className=' sticky top-0    w-screen h-[300vh] bg-white   '>
          <div className='  sticky top-0  w-screen h-screen  flex items-center justify-center  '>
            <div className='w-3/4 mx-auto flex flex-col pt-20 cursor-pointer  ' onClick={() => location(data?.link)}>
              <div>
                <img src={data?.image} alt="" className=' pb-4 ' />
              </div>
              <div className=" w-full flex items-center justify-between font-Manrope pb-2">
                <div className='  leading-none text-2xl font-semibold font-[#020617]'>
                  {data?.title}
                </div>
                <div className=' leading-none text-sub text-xl'>
                  {data?.timeline}
                </div>
              </div>
              <div className='  leading-none font-medium  text-left w-1/2  text-sub text-sm'>
                {data?.subtitle}
              </div>

            </div>
          </div>

        </div>
      ))}
    </div >
  )
}


export default Curated;
