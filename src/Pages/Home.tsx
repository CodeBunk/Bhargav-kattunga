import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";



import Home1 from '../components/Homepage/Home1'
const Home = () => {

  const Data = [< Home1 />, < Home1 />, < Home1 />]
  return (
    <div className=' w-full h-full '>

      {Data?.map((data: any, index) => (


        <div key={index} className='    w-screen h-[300vh] bg-white   '>
          <div className='  sticky top-0  w-screen h-screen bg-orange flex items-center justify-center  '>

            {data}
          </div>
        </div>
      ))}
      <div className='    w-screen h-[300vh] bg-white   '>
        <div className=' sticky top-0 w-screen h-screen bg-teal-800  flex items-center justify-center  '>
          Screen 6
        </div>
      </div>
    </div >
  )
}


export default Home;
