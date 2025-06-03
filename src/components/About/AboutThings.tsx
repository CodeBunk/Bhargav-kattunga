import React, { useState } from 'react'
import Community from "../../../public/About/Things/connection.gif"
import Work from "../../../public/About/Things/work.gif"
import Explore from "../../../public/About/Things/explore.gif"

const AboutThings = () => {

    const Data = [{
        id: 1,
        title: "Community is key",
        image: Community,
        subtitle: "I actively support and uplift budding designers, believing that design knowledge grows when it's shared. From mentoring on ADPList to volunteering for events, I stay involved to learn, share, and give back to the creative ecosystem.",
        namaste: true
    },
    {
        id: 2,
        title: "Explore & Be inspired",
        image: Explore,
        subtitle: "Creativity doesn't happen in a vacuum. I thrive on diverse perspectives—whether through travel, books, or casual conversations. Every experience helps shape how I approach design, storytelling, and life itself.",

    },
    {
        id: 3,
        title: "Show your work",
        image: Work,
        subtitle: "Like musicians, actors, and athletes, designers thrive by observing, iterating, and showcasing their craft. Watching others shine fuels our drive to improve. In the end, we all seek appreciation for the work we put into the world.",
    },
    ]
    return (
        <div className=' px-10 max-w-7xl w-full mx-auto pb-10 border-t  border-b  border-gray '>
            <div className=' text-center py-10 space-y-1  '>
                <div className=' text-2xl '>
                    Things that shaped me
                </div>

                <div className=' text-sm text-center  mx-auto  md:w-3/4 pb-20  '>
                    I'm a mosaic of everything that inspires me—from people and places to <br /> passions and purpose.
                </div>

                <div className=' grid md:grid-cols-3 grid-cols-1 gap-5 '>
                    {Data?.map((data: any) =>
                        <div className=' flex flex-col select-none   items-center w-full '>
                            <img src={data?.image} alt="" className=' mb-5 w-full  select-none   rounded-lg   aspect-square object-cover' />
                            <div className=' text-2xl pb-2'>
                                {data?.title}
                            </div>
                            <div className=' text-sm leading-tight text-[#3F3D56] opacity-70'>
                                {data?.subtitle}
                            </div>
                            {data?.namaste && <div onClick={() => window.open(data?.link, "_blank")} className=' flex cursor-pointer items-center gap-2 text-sm mt-1 leading-tight text-white bg-primary px-2 py-1 rounded-full'>
                                <span>Say “Namaste”   </span>
                                <span className=' '>
                                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.408 8.39979C7.26729 8.15491 7.19391 7.87714 7.19532 7.59471C7.19673 7.31229 7.27286 7.03526 7.416 6.79179C8.03546 6.74139 8.61121 6.45265 9.02209 5.98634C9.43296 5.52002 9.64692 4.9125 9.61894 4.29163C9.59095 3.67075 9.3232 3.08494 8.87204 2.65749C8.42087 2.23003 7.82148 1.99426 7.2 1.99979H4C3.36348 1.99979 2.75303 2.25265 2.30294 2.70273C1.85286 3.15282 1.6 3.76327 1.6 4.39979C1.6 5.03631 1.85286 5.64676 2.30294 6.09685C2.75303 6.54694 3.36348 6.79979 4 6.79979H4.064C3.97449 7.32937 3.97449 7.87021 4.064 8.39979H4C2.93913 8.39979 1.92172 7.97836 1.17157 7.22822C0.421427 6.47807 0 5.46066 0 4.39979C0 3.33893 0.421427 2.32151 1.17157 1.57136C1.92172 0.821218 2.93913 0.399791 4 0.399791H7.2C8.26087 0.372208 9.28924 0.767183 10.0589 1.49782C10.8285 2.22847 11.2764 3.23493 11.304 4.29579C11.3316 5.35666 10.9366 6.38503 10.206 7.15468C9.47532 7.92433 8.46887 8.37221 7.408 8.39979ZM8.592 3.59979C8.73271 3.84468 8.80609 4.12244 8.80468 4.40487C8.80328 4.6873 8.72714 4.96432 8.584 5.20779C7.96454 5.25819 7.38879 5.54693 6.97791 6.01325C6.56704 6.47956 6.35308 7.08708 6.38106 7.70796C6.40905 8.32883 6.6768 8.91464 7.12796 9.3421C7.57913 9.76955 8.17852 10.0053 8.8 9.99979H12C12.6365 9.99979 13.247 9.74693 13.6971 9.29685C14.1471 8.84676 14.4 8.23631 14.4 7.59979C14.4 6.96327 14.1471 6.35282 13.6971 5.90273C13.247 5.45265 12.6365 5.19979 12 5.19979H11.936C12.0255 4.67021 12.0255 4.12937 11.936 3.59979H12C13.0609 3.59979 14.0783 4.02122 14.8284 4.77136C15.5786 5.52151 16 6.53893 16 7.59979C16 8.66066 15.5786 9.67807 14.8284 10.4282C14.0783 11.1784 13.0609 11.5998 12 11.5998H8.8C8.27471 11.6134 7.75188 11.5235 7.26135 11.3351C6.77082 11.1467 6.3222 10.8635 5.94111 10.5018C5.17146 9.77112 4.72358 8.76466 4.696 7.70379C4.66842 6.64293 5.06339 5.61455 5.79403 4.8449C6.52468 4.07525 7.53113 3.62737 8.592 3.59979Z" fill="white" />
                                    </svg>
                                </span>
                            </div>}

                        </div>
                    )}
                </div>
            </div >
        </div>

    )
}
export default AboutThings