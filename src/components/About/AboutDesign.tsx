import React, { useEffect, useState } from 'react'
import sara from "../../../public/About/Design/first.png"
import prashanth from "../../../public/About/Design/prashanth.png"
import samarth from "../../../public/About/Design/smarth.png"
import mohith from "../../../public/About/Design/mohith.png"


const DesignSection = () => {

    const [Selected, setSelected] = useState(0)
    const Data = [
        {
            id: 1,
            image: sara,
        },
        {
            id: 2,
            image: prashanth,
        },
        {
            id: 3,
            image: samarth,
        },
        {
            id: 4,
            image: mohith,
        },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setSelected((prev) => (prev + 1) % Data.length);
        }, 3000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);
    return (
        <div className=' px-10 max-w-7xl w-full mx-auto pb-10 border-b border-gray '>

            <div className=' text-2xl text-center '>
                Design Talks Around
            </div>
            <div className=' pb-3 text-sm md:w-3/4  text-center mx-auto '>
                These are the kinda conversations I have ...
            </div>
            <div className=' grid grid-cols-4 gap-2 items-center '>

                {Data?.map((data: any) =>
                    <div onClick={() => (setSelected(data?.id - 1))} className={` ${Selected == data?.id - 1 ? " bg-black  " : " bg-[#D9D9D9] "}    w-full h-2 rounded-full cursor-pointer `}>
                    </div>
                )}
            </div>
            <div className=' pt-5 space-y-1 relative ' >
                <img src={Data[Selected]?.image} alt="" className='relative w-full  rounded-xl h-full   object-contain' />
                <div className='absolute bottom-4 left-7 flex gap-2 '>

                    <div className='  cursor-pointer w-10 h-10  rounded-full ' onClick={() => Selected > 0 ? setSelected(Selected - 1) : setSelected(Data.length - 1)}>
                    </div>
                    <div className='  cursor-pointer  w-10 h-10  rounded-full  ' onClick={() => Selected < Data.length - 1 ? setSelected(Selected + 1) : setSelected(0)}>
                    </div>
                </div>

            </div >
        </div >

    )
}

export default DesignSection
