import React from "react";
import { useNavigate } from "react-router";

const CTA = () => {
  const location = useNavigate();

  return (
    <div className=" w-full lg:px-20 px-4 text-white md:pt-20 pt-10 ">
      <div className="grid  gap-10 ">
        {/* {Data.map((props: any) => ( */}
        <a
          className={`flex flex-col gap-2 hover:scale-[103%] transition-all duration-300 cursor-pointer  `}
          target="_blank"
          href="https://medium.com/@bhargav.kattunga"
        >
          <div
            className={`max-h-40 py-10 aspect-video hover:rounded-2xl transition-all duration-200  flex flex-col justify-center px-6  bg-[#00F135]  `}
          >
            <div className="text-black font-times text-3xl font-normal ">
              Join me on my design thoughts here
            </div>
            <div className="text-black font-poppins text-sm">
              I share my insights, personal adventures, and lessons learned from
              various projects here."
            </div>
          </div>
        </a>
        <a
          className={`flex flex-col gap-2 hover:scale-[103%] transition-all duration-300 cursor-pointer  `}
          target="_blank"
          href="https://www.figma.com/@bhargavram"
        >
          <div
            className={`max-h-40 py-10 aspect-video hover:rounded-2xl transition-all duration-200  flex flex-col justify-center px-6  bg-[#DE00F1]  `}
          >
            <div className="text-black font-times text-3xl font-normal ">
              Solving Small problems here
            </div>
            <div className="text-black font-poppins text-sm">
              As an designer and entrupreniual enthuiast, here is my small
              contribution to community.
            </div>
          </div>
        </a>
        <a
          className={`flex flex-col gap-2 md:col-span-2  row-span-1 col-span-1 hover:scale-[103%] transition-all duration-300 cursor-pointer  `}
          target="_blank"
          href="https://adplist.org/mentors/bhargav-sai-ram-kattunga"
        >
          <div
            className={` max-h-40 py-10 aspect-video hover:rounded-2xl transition-all duration-200  flex flex-col justify-center px-6  bg-[#FFE500]  `}
          >
            <div className="text-black font-times text-3xl font-normal ">
              Spark a chat, ignite a project!
            </div>
            <div className="text-black font-poppins text-sm">
              Drop a 'Hello' and let's create something amazing together.
            </div>
          </div>
        </a>
        {/* ))} */}
      </div>
    </div>
  );
};

export default CTA;
