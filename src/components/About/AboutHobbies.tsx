import React, { useState } from 'react'
import Community from "../../public/About/Things/connection.gif"
import Work from "../../public/About/Things/work.gif"
import Explore from "../../public/About/Things/explore.gif"

import anyone4 from "../../public/Leafcraft.jpg"
const AboutHobbies = () => {

    const Data = [{
        id: 1,
        title: "Anime",
        icon: "📺",
        link: "https://www.imdb.com/list/ls596551981/",
        subtitle: "From classics to new-gen, always up for a debate!",

    },
    {
        id: 2,
        title: "Photography",
        icon: "📸",
        link: "https://www.instagram.com/bixeels",
        subtitle: "Sneak peak into my gallery."
    },
    {
        id: 3,
        title: "Competitive Gaming",
        icon: "🎮",
        subtitle: "I steam off with strategy, skill, and a little bit of rage."
    },
    {
        id: 4,
        title: "Music & Podcast",
        icon: "🎵 ",
        link: "https://open.spotify.com/user/31hjngnp7dtku4bewbhfdsocmexu",
        subtitle: "Always in search of the next favourite thing"
    },
    ]


    return (
        <div className=' px-10 max-w-7xl w-full mx-auto pb-10  border-b  border-gray '>
            <div className=' text-center py-10 space-y-1  '>
                <div className=' text-2xl '>
                    Hobbies
                </div>

                <div className=' text-sm text-justify leading-normal  mx-auto  md:w-1/3  pb-20  '>
                    Beyond design, I geek out over PC builds, anime, and tiny homes—there's something magical about optimizing space and performance. I'm all in when it comes to crafting the perfect battlestation, chasing competitive gaming highs, curating cozy setups, or diving deep into photography, music, books, and podcasts. It's the little obsessions that spark big ideas.
                </div>

                <div className=' flex flex-col w-1/2 mx-auto gap-5 '>
                    {Data?.map((data: any) =>
                        <div className=' flex  items-center select-none  gap-3 bg-dark py-4 px-3 rounded cursor-pointer hover:shadow  w-full ' onClick={() => data?.link ? window.open(data?.link, "_blank") : null}>
                            <div >
                                {data?.icon}
                            </div>
                            <div className='  flex font-Manrope flex-col gap- text-left '>

                                <div className=' text-sm font-medium     '>
                                    {data?.title}
                                </div>
                                <div className='  text-sm leading-tight text-subtitle'>
                                    {data?.subtitle}
                                </div>

                            </div>

                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}
export default AboutHobbies