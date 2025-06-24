import React, { useState } from "react";
import Button from "../components/Atoms/Button";
import Footer from "../components/Footer";

const Archives = () => {
    // Replace these entries with your actual project data
    const Data = [
        {
            id: 1,
            title: "Travia", subtitle: "AI- powered travel itinerary planner for short trips",
            description:
                "Created an intuitive travel experience with map integrations, social discovery, and AI-powered personalization. Prioritized usability, speed, and a beautiful UI for weekend and short-stay travelers.",
            date: "10/2023 - 04/2024",
            tags: ["travel", "aiplanner", "ux", "ui", "branding", "playbook", "pitchdeck"],
            link: "https://www.behance.net/gallery/159697011/TRAVIA-A-Travel-Application-Case-Study",
        },
        {
            id: 2,
            title: "Travana", subtitle: " Community-first platform for trip planning",
            description:
                "Designed a case study focused on group travel discovery and itinerary planning. Prioritized shared tools and real-time sync to enhance collaborative travel experiences.",
            date: "10/2022 - 12/2022",
            tags: ["travel", "casestudy", "ux", "ui"],
            link: "travana.io",
        },
        {
            id: 3,
            title: "Wishtronics", subtitle: " STEM-based educational strategy for high school students",
            description:
                "Developed a brand identity for a STEM startup, enabling partnerships with 3+ institutions. Focused on visual identity, messaging clarity, and community outreach to develop educational kits.",
            date: "10/2023 - 04/2024",
            tags: ["branding", "strategy"],
            link: "https://www.behance.net/gallery/111908323/Wishtronics-Branding",
        },
        {
            id: 4,
            title: "Umedia", subtitle: " Branding & design support for young entrepreneurs",
            description:
                "Collaborated with early-stage founders to shape brand identity and digital storytelling. Delivered scalable visuals and marketing support for startups.",
            date: "01/2021 - 08/2023",
            tags: ["visualidentity", "marketing", "branding"],
            link: "https://www.behance.net/gallery/166844881/Portfolio-2023",
        },
        {
            id: 5,
            title: "Thindam", subtitle: " Storytelling brand for food-lovers on YouTube",
            description:
                "Brought raw food-tasting moments to life with consistent branding and social templates for a YouTube channel run by friends. This experience made me take the director seat.",
            date: "01/2021 - 08/2022",
            tags: ["brandstory", "youtube", "foodlovers"],
            link: "https://www.behance.net/gallery/200513577/Thindam",
        },
        {
            id: 6,
            title: "UnitsDB", subtitle: " Event-based low-code backend tool",
            description:
                "Designed an intuitive UI for configuring backend logic based on event triggers. Prioritized flexibility and dev experience.",
            date: "07/2022 - 01/2023  |  10/2023 - 01/2024",
            tags: ["lowcode", "ui", "ux"],
            link: "https://unitsdb.com",
        },
        {
            id: 7,
            title: "Praapt", subtitle: " NGO system to serve nutritious meals at scale",
            description:
                "Designed a kiosk system for food distribution to underserved communities. Balanced accessibility, transparency, and scalable impact.",
            date: "01/2023 - 04/2024",
            tags: ["ngo", "foodtech", "socialimpact"],
            // link: "https://example.com/praapt",
        },
        {
            id: 8,
            title: "RCTS Website (IIITH)", subtitle: " Platform for tech-powered social change",
            description:
                "Helped visualize a mission-led research center at IIITH through a clean and informative website showcasing innovation for good.",
            date: "03/2024",
            tags: ["edtech", "websitedesign", "ui"],
            link: "https://rcts.iiit.ac.in/", // No link → icon will be hidden
        },
        {
            id: 9,
            title: "Guardian", subtitle: " Service management for NRI property owners",
            description:
                "Designed a dashboard for absentee landlords to manage property health, on-ground services, and alerts.",
            date: "05/2023 - 01/2024",
            tags: ["propertymanagement", "crm", "service"],
            // link: "https://example.com/guardian",
        },
        {
            id: 10,
            title: "Hooops", subtitle: " Sports analytics platform for players and coaches",
            description:
                "Created a user-friendly performance insights dashboard tailored for athletes and coaches. Emphasized simplicity and clarity.",
            date: "12/2023",
            tags: ["sports", "websitedesign", "sportsanalytics"],
            link: "https://livingproofbasketball.com",
        },
        {
            id: 11,
            title: "MoozUp", subtitle: " All-in-one event organizer platform",
            description:
                "Designed a mobile-first event management app supporting registration, updates, and resource sharing from one dashboard.",
            date: "12/2023",
            tags: ["eventmanagement", "appdesign", "ux", "ui"],
            link: "",
        },
        {
            id: 12,
            title: "Magna Website", subtitle: " Elegant web presence for a construction firm",
            description:
                "Developed a clean and trust-building website for a real estate company, showcasing their portfolio and expertise.",
            date: "04/2023",
            tags: ["realestate", "marketingdesign", "websitedesign"],
            link: "",
        },
        {
            id: 13,
            title: "Evaluate HealthCare", subtitle: " Rapid audit of existing health monitoring app",
            description:
                "Conducted UX review for an existing app, identifying usability gaps and providing actionable redesign insights.",
            date: "05/2023",
            tags: ["healthtech", "uxaudit", "casestudy"],
            link: "",
        },
        {
            id: 14,
            title: "Indukuri Website", subtitle: " Showcase site for premium residential projects",
            description:
                "Created a clean, conversion-focused website for a housing developer to highlight custom builds and service areas.",
            date: "03/2023",
            tags: ["realestate", "marketingdesign", "websitedesign"],
            link: "https://indukurilifespaces.com/project-lakeshore.php",
        },
        {
            id: 15,
            title: "BYOB", subtitle: " Creator-first food discovery app",
            description:
                "Conceptualized a platform that connects food creators and consumers using geo-discovery, reviews, and recommendations.",
            date: "10/2022 - 12/2022",
            tags: ["mobileapp", "foodtech", "creatoreconomy"],
            link: "",
        },
        {
            id: 16,
            title: "Natsukashi", subtitle: " 3D memory sharing platform",
            description:
                "Designed an immersive 3D space to relive and share cherished memories interactively, with focus on emotional connection.",
            date: "08/2023",
            tags: ["saasmodel", "3dweb", "immersivedesign"],
            link: "",
        },
        {
            id: 17,
            title: "My Portfolio 2024 (Website)", subtitle: " Live portfolio showcasing project work",
            description:
                "Developed and hosted a personal website to present work across travel, branding, systems, and design explorations.",
            date: "01/2024",
            tags: ["portfolio", "webdesign", "personalbrand"],
            link: "https://Bhargavkattunga.in/Portfolio2024",
        },
        // {
        //     id: 18,
        //     title: "My Portfolio 2024 (20-pager)", subtitle: " Comprehensive project showcase booklet",
        //     description:
        //         "Designed a well-organized 20-page PDF to summarize processes, visuals, and project thinking for recruiters and mentors.",
        //     date: "01/2024",
        //     tags: ["portfolio", "casestudy", "work"],
        //     link: "https://example.com/my-portfolio-2024-pdf",
        // },
        // {
        //     id: 19,
        //     title: "My Portfolio 2022", subtitle: " Early portfolio for learning and outreach",
        //     description:
        //         "Explored storytelling and structure in this mid-phase portfolio to develop a confident design voice.",
        //     date: "02/2022",
        //     tags: ["portfolio", "casestudy", "ux", "ui"],
        //     link: "https://example.com/my-portfolio-2022",
        // },
        // {
        //     id: 20,
        //     title: "My Portfolio 2021", subtitle: " First portfolio transitioning from engineering",
        //     description:
        //         "Used this early portfolio to explore visual design from an engineering lens while discovering communication tools.",
        //     date: "05/2021",
        //     tags: ["portfolio", "beginner"],
        //     link: "https://example.com/my-portfolio-2021",
        // },
        {
            id: 21,
            title: "Nirvana (College Fest)", subtitle: " Branding and communication for annual fest",
            description:
                "Led end-to-end branding, content, and coordination for the annual cultural fest, making our club the central hub.",
            date: "11/2019 - 02/2020",
            tags: ["branddesign", "visualcommunication"],
            link: "",
        },
        {
            id: 22,
            title: "Technovation (Tech Fest)", subtitle: " Organizing and branding departmental tech fest",
            description:
                "Handled event strategy, design systems, and student communication for the department-wide festival.",
            date: "12/2019 - 02/2020",
            tags: ["fest", "eventdesign", "branding"],
            link: "",
        },
    ];

    const [showAll, setShowAll] = useState(false);
    const VISIBLE_COUNT = 5;
    const itemsToShow = showAll ? Data : Data.slice(0, VISIBLE_COUNT);

    return (
        <>

            <div className="px-8 md:px-16 lg:px-24 xl:px-32 py-10 pt-24 max-w-[1200px] w-full mx-auto">


                <div className="flex flex-col gap-6">
                    {itemsToShow.map((item) => (
                        <div
                            key={item.id}
                            className="bg-bgmuted rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className=" flex items-center justify-between">

                                <div className="flex flex-col sm:flex-row  gap-2  items-start sm:items-center">
                                    <h3 className="text-lg font-Manrope font-semibold ">
                                        <span className=" font-bold"> {item.title}:</span>  <span className=" font-medium text-sub ">  {item.subtitle}</span>
                                    </h3>

                                    {item.link && (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-2 sm:mt-0 text-primary hover:text-primary/80"
                                        >
                                            {/* External Link Icon */}
                                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.408 8.39979C7.26729 8.15491 7.19391 7.87714 7.19532 7.59471C7.19673 7.31229 7.27286 7.03526 7.416 6.79179C8.03546 6.74139 8.61121 6.45265 9.02209 5.98634C9.43296 5.52002 9.64692 4.9125 9.61894 4.29163C9.59095 3.67075 9.3232 3.08494 8.87204 2.65749C8.42087 2.23003 7.82148 1.99426 7.2 1.99979H4C3.36348 1.99979 2.75303 2.25265 2.30294 2.70273C1.85286 3.15282 1.6 3.76327 1.6 4.39979C1.6 5.03631 1.85286 5.64676 2.30294 6.09685C2.75303 6.54694 3.36348 6.79979 4 6.79979H4.064C3.97449 7.32937 3.97449 7.87021 4.064 8.39979H4C2.93913 8.39979 1.92172 7.97836 1.17157 7.22822C0.421427 6.47807 0 5.46066 0 4.39979C0 3.33893 0.421427 2.32151 1.17157 1.57136C1.92172 0.821218 2.93913 0.399791 4 0.399791H7.2C8.26087 0.372208 9.28924 0.767183 10.0589 1.49782C10.8285 2.22847 11.2764 3.23493 11.304 4.29579C11.3316 5.35666 10.9366 6.38503 10.206 7.15468C9.47532 7.92433 8.46887 8.37221 7.408 8.39979ZM8.592 3.59979C8.73271 3.84468 8.80609 4.12244 8.80468 4.40487C8.80328 4.6873 8.72714 4.96432 8.584 5.20779C7.96454 5.25819 7.38879 5.54693 6.97791 6.01325C6.56704 6.47956 6.35308 7.08708 6.38106 7.70796C6.40905 8.32883 6.6768 8.91464 7.12796 9.3421C7.57913 9.76955 8.17852 10.0053 8.8 9.99979H12C12.6365 9.99979 13.247 9.74693 13.6971 9.29685C14.1471 8.84676 14.4 8.23631 14.4 7.59979C14.4 6.96327 14.1471 6.35282 13.6971 5.90273C13.247 5.45265 12.6365 5.19979 12 5.19979H11.936C12.0255 4.67021 12.0255 4.12937 11.936 3.59979H12C13.0609 3.59979 14.0783 4.02122 14.8284 4.77136C15.5786 5.52151 16 6.53893 16 7.59979C16 8.66066 15.5786 9.67807 14.8284 10.4282C14.0783 11.1784 13.0609 11.5998 12 11.5998H8.8C8.27471 11.6134 7.75188 11.5235 7.26135 11.3351C6.77082 11.1467 6.3222 10.8635 5.94111 10.5018C5.17146 9.77112 4.72358 8.76466 4.696 7.70379C4.66842 6.64293 5.06339 5.61455 5.79403 4.8449C6.52468 4.07525 7.53113 3.62737 8.592 3.59979Z" fill="#278EFF" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                                <div className=" flex items-center text-sm text-subtitle">
                                    {/* Calendar Icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-subtitle"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span className="ml-2">{item.date}</span>
                                </div>
                            </div>


                            <p className="mt-2 text-[#767676] font-Manrope leading-relaxed">
                                {item.description}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {item.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-Manrope text-primary bg-primary/10 px-2 py-1 rounded-full "
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>


                        </div>
                    ))}
                </div>

                {Data.length > VISIBLE_COUNT && (
                    <div className="mt-6 flex justify-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="text-primary font-Manrope font-medium hover:underline"
                        >

                        </button>
                        <Button
                            variant="text"

                            onClick={() => setShowAll(!showAll)}
                            className={`" -h !w-auto  border-gray  p-5 flex-nowrap flex items-center gap-1 ${true ? " !bg-white  !text-black  " : " "}`}
                        // className=" clear-start border-2 border-transparent transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:border-white rounded-full py-2 px-3 "
                        >
                            <p className="font-poppins"> {showAll ? "Show Less" : "Show More"}
                            </p>
                            <span className={`${showAll ? "rotate-180 " : ""} `}>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                </svg>
                            </span>
                        </Button>
                    </div>
                )}


            </div>
            <Footer />
        </>
    );
};

export default Archives;
