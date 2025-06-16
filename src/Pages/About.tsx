import React from 'react'
import Aboutsection from '../components/About/Aboutsection'
import AboutCompany from '../components/About/AboutCompany'
import AboutThings from '../components/About/AboutThings'
import AboutHobbies from '../components/About/AboutHobbies'
import DesignSection from '../components/About/AboutDesign'
import Bucketlist from '../components/About/Bucketlist'

const About = () => {
    return (
        <div className=' pt-28 space-y-10  '>


            <Aboutsection />
            <AboutCompany />
            <AboutThings />
            <DesignSection />
            <AboutHobbies />
            <Bucketlist />

            <div className=' bg-dark py-3 text-center text-sm flex items-center gap-2 justify-center '>
                <span>🤫 </span>  Since you came a long way let me share my source where I find inspiration <span onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")} className='  font-light text-subtitle cursor-pointer hover:underline'>
                    Click Here
                </span>
            </div>

        </div >
    )
}

export default About