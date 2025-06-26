import React, { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";



import Home1 from '../components/Homepage/Home1'
import Home2 from "../components/Homepage/Home2";
import Home3 from "../components/Homepage/Home3";
import Home4 from "../components/Homepage/Home4";
import Home5 from "../components/Homepage/Home5";
import Button from "../components/Atoms/Button";
const Home = ({ muted }) => {

  const Data = [< Home1 value={muted} />, < Home2 />, < Home3 />, < Home4 />, <Home5 />]

  return (
    <div id="home" className=' w-full h-full overflow-x-clip '>


      {Data?.map((data: any, index) => (
        <div key={index} className='  sticky top-0    w-screen h-[150vh] bg-white   '>
          <div className='  sticky top-0  w-screen h-screen  flex items-center justify-center  '>
            {data}
          </div>

        </div>
      ))}
    </div >
  )
}


export default Home;
