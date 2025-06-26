import React, { useState, FormEvent } from 'react'
import { Navigate } from 'react-router-dom'
import image1 from "../../public/Dohabank/1.png";
import image2 from "../../public/Dohabank/2.png";
import image3 from "../../public/Dohabank/3.png";
import image4 from "../../public/Dohabank/4.png";
import image5 from "../../public/Dohabank/5.png";
import image6 from "../../public/Dohabank/6.png";
import image7 from "../../public/Dohabank/7.png";
import image8 from "../../public/Dohabank/8.png";
import image9 from "../../public/Dohabank/9.png";
import image10 from "../../public/Dohabank/10.png";
import image11 from "../../public/Dohabank/11.png";
import image12 from "../../public/Dohabank/12.png";
import image13 from "../../public/Dohabank/13.png";
import image14 from "../../public/Dohabank/14.png";
import image15 from "../../public/Dohabank/15.png";
import image16 from "../../public/Dohabank/16.png";
import image17 from "../../public/Dohabank/17.png";
import Button from '../components/Atoms/Button';


const CORRECT_PASSWORD = 'skyisBlue'  // ← change this

const DohaBank: React.FC = () => {
    const [input, setInput] = useState('')
    const [authorized, setAuthorized] = useState<boolean | null>(null)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (input === CORRECT_PASSWORD) {
            setAuthorized(true)
        } else {
            setAuthorized(false)
        }
    }

    // wrong password → redirect
    if (authorized === false) {
        return (
            <div className="min-h-[80vh] h-full flex flex-col items-center justify-center  from-[#0f172a] to-[#1e293b]">
                <div className="bg-white/10 border border-white/20 rounded-xl px-8 py-10 shadow-lg flex flex-col items-center max-w-md">
                    <svg width="48" height="48" fill="none" className="mb-4 text-red" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="red" opacity="50%" strokeWidth="2" fill="white" />
                        <path d="M12 8v4" stroke="red" strokeWidth="2" opacity="50%" strokeLinecap="round" />
                        <circle cx="12" cy="16" r="1" fill="red" opacity="50%" />
                    </svg>
                    <h2 className="text-2xl font-semibold text-black mb-2">Access Restricted</h2>
                    <p className="text-base text-blue-100 mb-4">
                        This page is password protected.<br />
                        Please <span className="font-medium text-sky-300">contact me</span> to request access.
                    </p>
                    <a
                        href="mailto:bhargav.kattunga@gmail.com?subject=Request%20for%20Doha%20Bank%20Password"
                        className="inline-block bg-sky-500 hover:bg-sky-600 text-black font-semibold px-5 py-2 rounded transition"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        );
    }

    // not yet submitted → show password form
    if (authorized === null) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 100 }} className=' min-h-[80vh] h-full'>
                <form onSubmit={handleSubmit} className=' flex flex-col gap-4  text-center'>
                    <label>
                        Enter password

                    </label>
                    <input
                        type="password"
                        value={input}
                        className=' border-primary border rounded  outline-none '
                        onChange={e => setInput(e.target.value)}
                        autoFocus
                    />
                    <Button type="submit" >Go</Button>
                </form>
            </div>
        )
    }

    // authorized → show protected content
    return (
        <div className=" text-white bg-black min-h-screen mt-10  ">
            <img src={image1} className=" w-full " alt="" />
            <img src={image2} className=" w-full " alt="" />
            <img src={image3} className=" w-full " alt="" />
            <img src={image4} className=" w-full " alt="" />
            <img src={image5} className=" w-full " alt="" />
            <img src={image6} className=" w-full " alt="" />
            <img src={image7} className=" w-full " alt="" />
            <img src={image8} className=" w-full " alt="" />
            <img src={image9} className=" w-full " alt="" />
            <img src={image10} className=" w-full " alt="" />
            <img src={image11} className=" w-full " alt="" />
            <img src={image12} className=" w-full " alt="" />
            <img src={image13} className=" w-full " alt="" />
            <img src={image14} className=" w-full " alt="" />
            <img src={image15} className=" w-full " alt="" />
            <img src={image16} className=" w-full " alt="" />
            <img src={image17} className=" w-full " alt="" />
        </div>
    )
}

export default DohaBank
