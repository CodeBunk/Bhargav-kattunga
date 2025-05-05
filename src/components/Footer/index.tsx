import React from "react";
import LOGO from "../../assets/.png";
import Icons from "../Icons";

const Footer = () => {
  return (
    <>
      {/* <div className="bg-black grid gap-5 cursor-all-scroll  ">
        <div className="text-white flex md:flex-row flex-col max-md:gap-4 justify-between w-full items-center p-5 px-10">
          <div className=" flex md:gap-10 gap-2 md:flex-row flex-col max-md:text-center ">
            <div className="font-serif">© 2023 All right reserved.</div>
          </div>
          <div className=" font-normal font-poppins opacity-70 leading-loose text-xl hover:opacity-100 hover:cursor-pointer hover:scale-105 transition-all duration-400 ease-in ">
            Bhargav Ram Kattunga
          </div>
          <div className=" flex md:gap-4 gap-2 items-center justify-center  ">
            <Icons
              variant="Dribble"
              Link="https://dribbble.com/KattungaBhargav"
            />
            <Icons
              variant="Behance"
              Link="https://www.behance.net/bhargavkattung"
            />
          </div>
        </div>
      </div> */}

      <div className=" text-center py-4 border-t border-gray text-gray1  w-full  ">
        Created with mix of passion & compulsion ❤️‍🔥🤕  |  © 2025 Bhargav Sai Ram Kattunga. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
