import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate, useOutlet } from "react-router-dom";
import Button from "../Atoms/Button";

const CuratedLayout = () => {
  const outlet = useOutlet();

  console.log(window?.location, "ASdasd")

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [outlet])


  const Location = useNavigate()

  return (

    <div className=" relative h-full w-full  pt-6  ">

      {outlet}

      <Button type="button" onClick={() => Location("/curated")} children={<svg width="100%" height="100%" className=" w-full h-full " viewBox="0 0 15 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>} className=" fixed z-100 flex items-center justify-center cursor-pointer top-24 left-8 !px-0 h-10 w-12 !rounded-full text-black  bg-white border-black border " />
    </div>
  );
};

export default CuratedLayout;
