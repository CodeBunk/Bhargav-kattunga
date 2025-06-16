import React, { useState } from 'react'

//professional
import cloudResourcesLogo from "../../../public/About/Company/Professional/cloudsource.png"
import leafcraftLogo from "../../../public/About/Company/Internships/lcs.png";
import capgeminiLogo from "../../../public/About/Company/Professional/capegemini.png"
//internships
import acceltronLogo from "../../../public/About/Company/Internships/acceletron.png"
import wishtronicsLogo from "../../../public/About/Company/Internships/wishtronics.png"
//school
import trafficControlLogo from "../../../public/About/Company/School/noimage.png"
import hydratorLogo from "../../../public/About/Company/School/smart.png"
import uavLogo from "../../../public/About/Company/School/soil.png"
import chiroLogo from "../../../public/About/Company/School/chiropractor.png"
//other
import intrepidLogo from "../../../public/About/Company/Other/intripid.png"
import qatarJournalLogo from "../../../public/About/Company/Other/qatar.png"
import oneImmersiveLogo from "../../../public/About/Company/Other/oneimmersive.png"
import japanJournalLogo from "../../../public/About/Company/Other/japan.png"
import traviaLogo from "../../../public/About/Company/Other/travia.png"
import pitchDeckLogo from "../../../public/About/Company/Other/pitchdeck.png"
import uMediaLogo from "../../../public/About/Company/Other/Umedia.png"
import resumeTemplateLogo from "../../../public/About/Company/Other/resume.png"
//leadership
import adpluriLogo from "../../../public/About/Company/Leadership/adplist.png"
import nssLogo from "../../../public/About/Company/Leadership/Nss.png"
import tinkeringLabsLogo from "../../../public/About/Company/Leadership/atal.png"
import streetCauseLogo from "../../../public/About/Company/Leadership/steetcause.png"
import technovationLogo from "../../../public/About/Company/Leadership/technovation.png"
import adopeLogo from "../../../public/About/Company/Leadership/adope.png"


const AboutCompany = () => {

    const [Selected, setSelected] = useState(0)
    const Data = [
        {
            id: 1,
            name: "Professional Track",
            Background:
                "A strategic design career spanning 3+ years, focused on transforming complex enterprise and consumer experiences through user-centered design. Proven impact across SaaS, fintech, and enterprise—balancing depth, speed, and scale.",
            works: [
                {
                    image: cloudResourcesLogo,
                    title: "Cloud Resources / 06/2024-Present / Doha, Qatar",
                    subtitle:
                        "Designed the corporate banking app and enhanced the retail banking experience by introducing a unified risk framework, collaborating with stakeholders to align on SME-focused product strategy, and conducting cross-functional workshops.",
                    link: "https://www.cloudresources.com/"
                },
                {
                    image: leafcraftLogo,
                    link: "https://leafcraft.co/",
                    title: "LeafCraft / 06/2022-06/2024 / Hyderabad, India",
                    subtitle:
                        "Led end-to-end product & experience design for multiple SaaS tools—including a Static Website Builder, Application Builder, and Visual Engagement tool; ran user research, prototyping, and usability testing.",
                },
                {
                    image: capgeminiLogo,
                    title: "Capgemini / 09/2021-03/2022 / Hyderabad, India",
                    subtitle:
                        "Performed in-depth usability audits for internal enterprise tools, proposed interface updates and design enhancements that improved productivity and reduced user onboarding time by 25%.",
                },
            ],
        },
        {
            id: 2,
            name: "Internships",
            Background:
                "These early internships gave me exposure across product, education, and gaming sectors—helping me understand product lifecycle deeply, and paving my transition from Mechatronics to UX and product design.",
            works: [
                {
                    image: leafcraftLogo,
                    link: "",
                    title: "LeafCraft / 06/2022-06/2022 / Hyderabad, India",
                    subtitle:
                        "Conducted UX research and usability audits for in-progress design tools; synthesized insights into UX prototypes and recommended design changes.",
                },
                {
                    image: acceltronLogo,
                    title: "Acceltron Technologies / 05/2021-09/2021 / Hyderabad, India",
                    subtitle:
                        "Built an interactive, voice-led conversational MVP that improved onboarding and increased user retention by 38%; ran workshops on micro-interactions to boost accessibility and engagement.",
                },
                {
                    image: wishtronicsLogo,
                    title: "Wishtronics Technologies / 07/2019-09/2019 / Karimnagar, India",
                    subtitle:
                        "Developed a comprehensive branding strategy for a STEAM-focused ed-tech product; crafted product visuals, print materials, and outreach content that resulted in 3 institutional partnerships.",
                },
            ],
        },
        {
            id: 3,
            name: "School",
            link: "https://www.behance.net/gallery/133631287/Portfolio",
            Background:
                "I've always been obsessed with how things work—from cars to Legos. Studying Mechatronics gave me a hands-on path to build, explore, and eventually discover how design could merge systems thinking with storytelling.",
            works: [
                {
                    image: trafficControlLogo,
                    title:
                        "Density-Based Traffic Control System / 05/2021-07/2021",
                    subtitle:
                        "Built a smart traffic signal prototype using piezo sensors to dynamically adjust signal timings based on vehicle density.",
                },
                {
                    image: hydratorLogo,
                    title: "Smart Hydrator Device / 12/2020-02/2021",
                    subtitle:
                        "Designed an IoT device to track hydration and alert users when they needed a refill; optimized for desk-use with low power draw.",
                },
                {
                    image: uavLogo,
                    title: "Soil-Parameter Analysis via UAV / 12/2020-02/2021",
                    subtitle:
                        "Engineered a UAV-based tool for in-field soil testing using tele-scopic arms and sensors; presented solution at 'Bihar Agriculture 2019'.",
                },
                {
                    image: chiroLogo,
                    title: "Chiropractic Alignment Device / 09/2019-03/2021",
                    subtitle:
                        "Designed an affordable device to aid bone realignment in collaboration with IIT-Madras; selected for the SAE-India Congress 2020.",
                },
            ],

        },
        {
            id: 4,
            name: "Exploration & Other",
            Background:
                "With all the excitement and creative energy that design brings, I just can't sit still—especially when I see potential waiting to be shaped into something meaningful. So, I jumped into a bunch of projects—some self-initiated, some collaborative—with one goal in mind: to learn, build, and give back.",
            works: [
                {
                    image: intrepidLogo,
                    title: "Intrepid (formerly Travana) / 10/2023-04/2024 / Online",
                    subtitle:
                        "Led UX and product design for a travel-focused platform; ran user interviews, wireframing, and end-to-end prototyping to refine the booking flow.",
                },

                {
                    image: oneImmersiveLogo,
                    title: "One Immersive / 07/2022-10/2022 / Hyderabad, India",
                    subtitle:
                        "Helped teams articulate AR/VR concepts by designing clear brand systems and visual guidelines across a modular 3D configurator.",
                },
                {
                    image: traviaLogo,
                    title: "Travia / 10/2022-12/2022 / Online",
                    subtitle:
                        "Co-designed a peer-to-peer travel-planning exchange at a high school senior hackathon; focused on rapid prototyping through conversation.",
                },
                {
                    image: uMediaLogo,
                    title: "U Media / 01/2021-08/2023 / Hyderabad, India",
                    subtitle:
                        "Developed brand identities by distilling core essence into visual systems; delivered complete style guides under tight deadlines.",
                },
                {
                    image: qatarJournalLogo,
                    freebie: "https://www.figma.com/community/file/1446915084910719497/travel-itinerary-journal-qatar-edition-free",
                    title: "Travel Itinerary Journal (Qatar) ",
                    subtitle:
                        "Created a printable & digital itinerary template tailored for Qatar; combined mapping, notes, and journaling for immersive travel logging.",
                },
                {
                    image: japanJournalLogo,
                    freebie: "https://www.figma.com/community/file/1366745035744888597/travel-itinerary-journal-japan-edition-free",
                    title: "Travel Itinerary Journal (Japan) ",
                    subtitle:
                        "Designed a printable Japan itinerary template with pre-filled layouts, maps, and memory capture prompts for easy trip planning.",
                },
                {
                    image: pitchDeckLogo,
                    freebie: "https://www.figma.com/community/file/1185157230496352905/pitch-deck-template-free",
                    title: "Pitch Deck Template ",
                    subtitle:
                        "Crafted modular pitch deck layouts optimized for investors; included guidance notes and templated slides to streamline storytelling.",
                },
                {
                    image: resumeTemplateLogo,
                    freebie: "https://www.figma.com/community/file/1209067465107109282/resume-cv-template-free",
                    title: "Resume / CV Template ",
                    subtitle:
                        "Designed modern resume templates with clear hierarchy and a customizable color system to help candidates present confidently.",
                },
            ],
        },
        {
            id: 5,
            name: "Leadership",
            Background:
                "And through all of this, I've learned one thing: I simply can't stay still when I see untapped potential. Leadership, to me, isn't about gatekeeping—it's about sharing, enabling, and pushing people forward. I may not have led teams of hundreds, but I've made an impact by offering the right tools, guidance, and space for others to lead themselves.",
            works: [
                {
                    image: adpluriLogo,
                    title: "ADPLURI / 01/2023-Present / Online",
                    subtitle:
                        "Mentored 12+ designers globally—focusing on portfolios, career shifts, and soft skills. Curated peer reviews and design conversations across 30+ sessions.",
                },

                {
                    image: tinkeringLabsLogo,
                    title: "ATDC Tinkering Labs / 01/2023-Present / Online",
                    subtitle:
                        "Co-designed hands-on STEM workshops for school students. Guided prototyping sessions and student pitches to foster creative problem-solving.",
                },

                {
                    image: technovationLogo,
                    title: "Head of Design - Technovation 2020 / 12/2019-03/2020",
                    subtitle:
                        "Led UI/UX for a college-tech fest attended by 1,500+ students. Delivered on-brand digital experiences across web and on-site kiosks.",
                },
                {
                    image: adopeLogo,
                    title: "Co-founder - ADOPE / 02/2020-07/2021",
                    subtitle:
                        "Co-launched an annual college fest that scaled to 4,000+ attendees. Managed branding, event collateral, and end-to-end execution.",
                },
                {
                    image: nssLogo,
                    title: "National Service Scheme / 07/2019-07/2021",
                    subtitle:
                        "Contributed to rural outreach and awareness initiatives. Led branding for sustainability & hygiene programs supported by UNESCO and State Education Dept.",
                },
                {
                    image: streetCauseLogo,
                    title: "StreetCause / 07/2019-07/2020",
                    subtitle:
                        "Organized social drives and fundraising campaigns for 'Cause 4.0.' Managed design and messaging for awareness programs.",
                },
            ],
        },
    ];

    return (
        <div className=' px-10 max-w-7xl w-full mx-auto ' >
            <div className=' flex gap-5 items-center  pb-5 '>
                {Data?.map((data: any, index) =>
                    <div onClick={() => setSelected(index)} className={` ${Selected == index ? " text-black " : "opacity-50 "}  cursor-pointer `}>
                        {data?.name}
                    </div>)}
            </div>
            <div >
                <div className=' text-2xl  '>
                    Background
                </div>
                <div className=' text-sm  md:w-1/2 '>
                    {Data[Selected]?.Background}
                    {Data[Selected]?.link &&
                        <span className=' cursor-pointer' onClick={() => window.open(Data[Selected]?.link, "_blank")}>
                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.408 8.39979C7.26729 8.15491 7.19391 7.87714 7.19532 7.59471C7.19673 7.31229 7.27286 7.03526 7.416 6.79179C8.03546 6.74139 8.61121 6.45265 9.02209 5.98634C9.43296 5.52002 9.64692 4.9125 9.61894 4.29163C9.59095 3.67075 9.3232 3.08494 8.87204 2.65749C8.42087 2.23003 7.82148 1.99426 7.2 1.99979H4C3.36348 1.99979 2.75303 2.25265 2.30294 2.70273C1.85286 3.15282 1.6 3.76327 1.6 4.39979C1.6 5.03631 1.85286 5.64676 2.30294 6.09685C2.75303 6.54694 3.36348 6.79979 4 6.79979H4.064C3.97449 7.32937 3.97449 7.87021 4.064 8.39979H4C2.93913 8.39979 1.92172 7.97836 1.17157 7.22822C0.421427 6.47807 0 5.46066 0 4.39979C0 3.33893 0.421427 2.32151 1.17157 1.57136C1.92172 0.821218 2.93913 0.399791 4 0.399791H7.2C8.26087 0.372208 9.28924 0.767183 10.0589 1.49782C10.8285 2.22847 11.2764 3.23493 11.304 4.29579C11.3316 5.35666 10.9366 6.38503 10.206 7.15468C9.47532 7.92433 8.46887 8.37221 7.408 8.39979ZM8.592 3.59979C8.73271 3.84468 8.80609 4.12244 8.80468 4.40487C8.80328 4.6873 8.72714 4.96432 8.584 5.20779C7.96454 5.25819 7.38879 5.54693 6.97791 6.01325C6.56704 6.47956 6.35308 7.08708 6.38106 7.70796C6.40905 8.32883 6.6768 8.91464 7.12796 9.3421C7.57913 9.76955 8.17852 10.0053 8.8 9.99979H12C12.6365 9.99979 13.247 9.74693 13.6971 9.29685C14.1471 8.84676 14.4 8.23631 14.4 7.59979C14.4 6.96327 14.1471 6.35282 13.6971 5.90273C13.247 5.45265 12.6365 5.19979 12 5.19979H11.936C12.0255 4.67021 12.0255 4.12937 11.936 3.59979H12C13.0609 3.59979 14.0783 4.02122 14.8284 4.77136C15.5786 5.52151 16 6.53893 16 7.59979C16 8.66066 15.5786 9.67807 14.8284 10.4282C14.0783 11.1784 13.0609 11.5998 12 11.5998H8.8C8.27471 11.6134 7.75188 11.5235 7.26135 11.3351C6.77082 11.1467 6.3222 10.8635 5.94111 10.5018C5.17146 9.77112 4.72358 8.76466 4.696 7.70379C4.66842 6.64293 5.06339 5.61455 5.79403 4.8449C6.52468 4.07525 7.53113 3.62737 8.592 3.59979Z" fill="#278EFF" />
                            </svg>
                        </span>}
                </div>
            </div>
            <div className=' pt-10 w-full grid grid-cols-2 grid-rows-4 grid-flow-col gap-10 ' >
                {Data[Selected]?.works.map((data: any) =>
                    <div className='space-y-1  gap-5 flex items-center  justify-center w-full   '>
                        <img src={data?.image} alt="" className=' w-24 my-auto    aspect-square object-cover' />
                        <div className='  '>
                            <div className=' text-sm  flex items-center gap-2  '>

                                {data?.title}

                                {data?.link &&
                                    <span className=' cursor-pointer' onClick={() => window.open(data?.link, "_blank")}>
                                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.408 8.39979C7.26729 8.15491 7.19391 7.87714 7.19532 7.59471C7.19673 7.31229 7.27286 7.03526 7.416 6.79179C8.03546 6.74139 8.61121 6.45265 9.02209 5.98634C9.43296 5.52002 9.64692 4.9125 9.61894 4.29163C9.59095 3.67075 9.3232 3.08494 8.87204 2.65749C8.42087 2.23003 7.82148 1.99426 7.2 1.99979H4C3.36348 1.99979 2.75303 2.25265 2.30294 2.70273C1.85286 3.15282 1.6 3.76327 1.6 4.39979C1.6 5.03631 1.85286 5.64676 2.30294 6.09685C2.75303 6.54694 3.36348 6.79979 4 6.79979H4.064C3.97449 7.32937 3.97449 7.87021 4.064 8.39979H4C2.93913 8.39979 1.92172 7.97836 1.17157 7.22822C0.421427 6.47807 0 5.46066 0 4.39979C0 3.33893 0.421427 2.32151 1.17157 1.57136C1.92172 0.821218 2.93913 0.399791 4 0.399791H7.2C8.26087 0.372208 9.28924 0.767183 10.0589 1.49782C10.8285 2.22847 11.2764 3.23493 11.304 4.29579C11.3316 5.35666 10.9366 6.38503 10.206 7.15468C9.47532 7.92433 8.46887 8.37221 7.408 8.39979ZM8.592 3.59979C8.73271 3.84468 8.80609 4.12244 8.80468 4.40487C8.80328 4.6873 8.72714 4.96432 8.584 5.20779C7.96454 5.25819 7.38879 5.54693 6.97791 6.01325C6.56704 6.47956 6.35308 7.08708 6.38106 7.70796C6.40905 8.32883 6.6768 8.91464 7.12796 9.3421C7.57913 9.76955 8.17852 10.0053 8.8 9.99979H12C12.6365 9.99979 13.247 9.74693 13.6971 9.29685C14.1471 8.84676 14.4 8.23631 14.4 7.59979C14.4 6.96327 14.1471 6.35282 13.6971 5.90273C13.247 5.45265 12.6365 5.19979 12 5.19979H11.936C12.0255 4.67021 12.0255 4.12937 11.936 3.59979H12C13.0609 3.59979 14.0783 4.02122 14.8284 4.77136C15.5786 5.52151 16 6.53893 16 7.59979C16 8.66066 15.5786 9.67807 14.8284 10.4282C14.0783 11.1784 13.0609 11.5998 12 11.5998H8.8C8.27471 11.6134 7.75188 11.5235 7.26135 11.3351C6.77082 11.1467 6.3222 10.8635 5.94111 10.5018C5.17146 9.77112 4.72358 8.76466 4.696 7.70379C4.66842 6.64293 5.06339 5.61455 5.79403 4.8449C6.52468 4.07525 7.53113 3.62737 8.592 3.59979Z" fill="#278EFF" />
                                        </svg>
                                    </span>}
                                {data?.freebie &&
                                    <span className=' cursor-pointer flex font-Manrope font-medium rounded-full px-2  items-center gap-1 bg-green-1 text-white ' onClick={() => window.open(data?.freebie, "_blank")}>
                                        Freebie
                                        <svg width="16" height="12" className=' text-inherit' viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.408 8.39979C7.26729 8.15491 7.19391 7.87714 7.19532 7.59471C7.19673 7.31229 7.27286 7.03526 7.416 6.79179C8.03546 6.74139 8.61121 6.45265 9.02209 5.98634C9.43296 5.52002 9.64692 4.9125 9.61894 4.29163C9.59095 3.67075 9.3232 3.08494 8.87204 2.65749C8.42087 2.23003 7.82148 1.99426 7.2 1.99979H4C3.36348 1.99979 2.75303 2.25265 2.30294 2.70273C1.85286 3.15282 1.6 3.76327 1.6 4.39979C1.6 5.03631 1.85286 5.64676 2.30294 6.09685C2.75303 6.54694 3.36348 6.79979 4 6.79979H4.064C3.97449 7.32937 3.97449 7.87021 4.064 8.39979H4C2.93913 8.39979 1.92172 7.97836 1.17157 7.22822C0.421427 6.47807 0 5.46066 0 4.39979C0 3.33893 0.421427 2.32151 1.17157 1.57136C1.92172 0.821218 2.93913 0.399791 4 0.399791H7.2C8.26087 0.372208 9.28924 0.767183 10.0589 1.49782C10.8285 2.22847 11.2764 3.23493 11.304 4.29579C11.3316 5.35666 10.9366 6.38503 10.206 7.15468C9.47532 7.92433 8.46887 8.37221 7.408 8.39979ZM8.592 3.59979C8.73271 3.84468 8.80609 4.12244 8.80468 4.40487C8.80328 4.6873 8.72714 4.96432 8.584 5.20779C7.96454 5.25819 7.38879 5.54693 6.97791 6.01325C6.56704 6.47956 6.35308 7.08708 6.38106 7.70796C6.40905 8.32883 6.6768 8.91464 7.12796 9.3421C7.57913 9.76955 8.17852 10.0053 8.8 9.99979H12C12.6365 9.99979 13.247 9.74693 13.6971 9.29685C14.1471 8.84676 14.4 8.23631 14.4 7.59979C14.4 6.96327 14.1471 6.35282 13.6971 5.90273C13.247 5.45265 12.6365 5.19979 12 5.19979H11.936C12.0255 4.67021 12.0255 4.12937 11.936 3.59979H12C13.0609 3.59979 14.0783 4.02122 14.8284 4.77136C15.5786 5.52151 16 6.53893 16 7.59979C16 8.66066 15.5786 9.67807 14.8284 10.4282C14.0783 11.1784 13.0609 11.5998 12 11.5998H8.8C8.27471 11.6134 7.75188 11.5235 7.26135 11.3351C6.77082 11.1467 6.3222 10.8635 5.94111 10.5018C5.17146 9.77112 4.72358 8.76466 4.696 7.70379C4.66842 6.64293 5.06339 5.61455 5.79403 4.8449C6.52468 4.07525 7.53113 3.62737 8.592 3.59979Z"
                                                fill="currentColor" />
                                        </svg>
                                    </span>}
                            </div>
                            <div className=' pb-3 text-sm w-full leading-tight text-subtitle mdaa:w-3/4 '>
                                {data?.subtitle}
                            </div>
                        </div>
                    </div>
                )}

            </div >
        </div >

    )
}

export default AboutCompany