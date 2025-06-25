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
  console.log(window.scrollY, "screen")

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
    <div id="home" className=' w-full h-full overflow-x-clip '>
      <div className=" z-[100] fixed w-screen h-1 md:top-16 top-[73px] left-0 ">
        {/* <div className={`bg-black h-full  w-[50%] rounded`}></div> */}
        <div
          className="bg-black/50 h-full rounded"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

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
