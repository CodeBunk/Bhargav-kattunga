import React, { useRef } from 'react'
import podcast from "../../../public/About/hobbies/podcast.png"
import Hiking from "../../../public/About/hobbies/hiking.png"
import Chemistry from "../../../public/About/hobbies/chemistry.png"
import japan from "../../../public/About/hobbies/japan.png"

const Bucketlist = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const Data = [
        {
            id: 1,
            title: "Podcast",
            status: "pending",
            image: podcast,
            subtitle: "Talks about life, thoughts, and everything in between. A chill space to share stories or just blabber with meaning.",
        },
        {
            id: 2,
            title: "Hiking",
            status: "pending",
            image: Hiking,
            subtitle: "Trekking with Ambi Man—maybe KGL soon? Long walks, deep chats, and mountain views. We'll get there."
        },
        {
            id: 3,
            title: "The Chemistry",
            status: "pending",
            image: Chemistry,
            subtitle: "One video that captures our vibe. From random shoots to edits with the gang—ticked it off!"
        },
        {
            id: 4,
            title: "Japan",
            status: "pending",
            image: japan,
            subtitle: "A dream I lived with my best buddy. Still can't believe we did it. Can't wait to go back."
        },
    ];

    // const handlescroll = (direction: string) => {
    //     if (!scrollRef.current) return;
    //     const scrollAmount = 360;
    //     if (direction === "next") {
    //         scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    //     } else {
    //         scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    //     }
    // };
    const handlescroll = (direction: string) => {
        if (!scrollRef.current) return;

        let scrollAmount = 360; // default scroll amount
        // Make scroll amount responsive
        const width = window.innerWidth;
        if (width < 640) {
            scrollAmount = 260; // for small screens (mobile)
        } else if (width < 1024) {
            scrollAmount = 300; // for medium screens (tablet)
        } else {
            scrollAmount = 360; // for large screens (desktop)
        }

        scrollRef.current.scrollBy({
            left: direction === "next" ? scrollAmount : -scrollAmount,
            behavior: "smooth",
        });
    };


    return (
        <div className='md:px-10 px-6  max-w-7xl w-full mx-auto pb-10 border-b border-gray'>
            <div className='text-center py-10 space-y-1'>
                <div className='text-2xl'>My Bucketlist</div>
                <div className='text-sm leading-normal pb-10'>Things I want to start... someday soon</div>

                {/* Arrows aligned to left */}


                {/* Scrollable container with hidden scrollbar */}
                <div
                    ref={scrollRef}
                    className='scroll-smooth flex flex-row overflow-x-auto gap-5 scrollbar-hide '
                >
                    {Data.map((data) => (
                        <div key={data.id} className='flex-none text-center lg:w-[30%] sm:w-[50%] w-[80%] select-none gap-3 py-4 px-3 rounded cursor-pointer transition-all duration-300 hover:shadow-md'>
                            <img src={data.image} alt={data.title} />
                            <div className='flex font-Manrope text-sub pt-4 flex-col gap-2 text-center'>
                                <div className='text-2xl font-semibold'>{data.title}</div>
                                <div className='text-sm leading-tight font-medium'>{data.subtitle}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex gap-3 pb-5'>
                    <div onClick={() => handlescroll("prev")} className="p-2 flex items-center justify-center cursor-pointer h-8 w-8 bg-bgmuted rounded-full text-black border border-gray">
                        <svg width="100%" height="100%" className="w-full h-full" viewBox="0 0 15 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" />
                        </svg>
                    </div>
                    <div onClick={() => handlescroll("next")} className="p-2 flex items-center justify-center cursor-pointer h-8 w-8 bg-bgmuted rounded-full text-black border border-gray">
                        <svg width="100%" height="100%" className="w-full h-full rotate-180" viewBox="0 0 15 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bucketlist;
