import React, { useState } from 'react'
import anyone1 from "../../../public/About/section/Anyone.png"
import anyone2 from "../../../public/About/section/entreprenuers.png"
import anyone3 from "../../../public/About/section/recruiters.png"
import anyone4 from "../../../public/About/section/designers.png"
import anyone5 from "../../../public/About/section/engineers.png"
import anyone6 from "../../../public/About/section/managers.png"

const Aboutsection = () => {

    const [Selected, setSelected] = useState(0)
    const Data = [{
        id: 1,
        name: "For Anyone",
        image: anyone1,
        title: "Hello there! I love crafting products and building stories",
        subtitle: (
            <>
                I am always dreaming and envisaging new things, <br />
                are you too? 😶‍🌫️
            </>
        )
    },
    {
        id: 2,
        name: "Entreprenurs",
        image: anyone2,
        title: "I turn business goals into experiences people love",
        subtitle: "From ideation to execution, I've helped teams ship features that cut down user friction, drive engagement, and align deeply with business value. Let's create something that lasts."
    },
    {
        id: 3,
        name: "Recruiters",
        image: anyone3,
        title: "I design for clarity and impact",
        subtitle: "With experience across fintech and enterprise UX, I’ve helped reduce onboarding time by 66% and led design strategies that boosted satisfaction scores by 20%. I'm currently exploring roles where human-centered thinking meets real-world results."
    },
    {
        id: 4,
        name: "Product Designers",
        image: anyone4,
        title: "Let's geek out on systems and craft",
        subtitle: "Whether it's shaping flows, refining patterns, or translating research into real impact, I care about both the why and the wow. I’m all in on design that solves and surprises."
    },
    {
        id: 4,
        name: "Product Engineers",
        image: anyone5,
        title: "Let's build magic, not mayhem",
        subtitle: "I get the constraints, the dependencies, the edge cases—and I design with them in mind. Clean handoffs, collaborative flows, and intuitive UI that works as well as it looks."

    },
    {
        id: 4,
        name: "Product Managers",
        image: anyone6,
        title: "I speak fluent product",
        subtitle: "I thrive in ambiguity, love aligning on goals early, and get joy out of shipping with purpose. Let's team up to co-own outcomes—strategy to storyboards to shipped."
    }
    ]
    return (
        <div className=' px-10 max-w-7xl w-full mx-auto pb-10 border-b border-gray '>
            <div className=' flex gap-5 items-center '>
                {Data?.map((data: any, index) =>
                    <div onClick={() => setSelected(index)} className={` ${Selected == index ? " text-black " : "opacity-50 "} cursor - pointer`}>
                        {data?.name}
                    </div>
                )}
            </div>
            <div className=' pt-5 space-y-1 '>
                <div className=' text-2xl '>
                    {Data[Selected]?.title}
                </div>
                <div className=' pb-3 text-sm md:w-3/4 '>
                    {Data[Selected]?.subtitle}
                </div>
                <img src={Data[Selected]?.image} alt="" className=' w-full  rounded-xl h-full  aspect-video object-cover' />
            </div >
        </div>

    )
}

export default Aboutsection