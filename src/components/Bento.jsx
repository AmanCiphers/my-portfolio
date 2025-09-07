"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


const logo = "/assets/logo.svg";
const insta = "/assets/insta.svg";
const github = "/assets/github.svg";
const linkedin = "/assets/linkedin.svg";
const mail = "/assets/mail.svg";
const pfp = "/assets/pfp.jpg";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, 
            delayChildren: 0.15,
        },
    },
};

const item = {
    hidden: {
        opacity: 0,
        y: 40,          
        scale: 0.95,    
        filter: "blur(4px)", 
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            type: "spring",
            stiffness: 60, 
            damping: 12,   
            mass: 1,
        },
    },
};



const Bento = () => {
    const [dateTime, setDateTime] = useState(new Date());
    useEffect(() => { const timer = setInterval(() => setDateTime(new Date()), 1000); return () => clearInterval(timer); }, []);
    const day = dateTime.toLocaleDateString("en-IN", { weekday: "long" });
    const date = dateTime.toLocaleDateString("en-IN", { day: "numeric" });
    const monthYear = dateTime.toLocaleDateString("en-IN", { month: "long", year: "numeric" });
    const formattedDate = `${day},   ${date}  ${monthYear}`;

    const formattedTime = dateTime.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    const effect = "group-hover: hover:-translate-x-y-2 hover:scale-[1.04] hover:shadow-2xl transition-transform transition-opacity duration-300 ease-out";
    const smallHoverEffect = "group-hover: hover:-translate-x-y-2 hover:scale-[1.3] transition-transform transition-opacity duration-300 ease-out";

    return (
        <section className="min-h-screen w-full flex items-center justify-center p-4 md:p-8" style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}>
            <motion.div className="grid w-full max-w-[1400px] h-full grid-rows-[auto_1fr_1fr] gap-4 md:gap-6" variants={container} initial="hidden" animate="show">
                <motion.div className="bento flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 p-2 md:p-4" style={{ backgroundColor: "var(--bento-bg)" }} variants={item}>
                    <h2 className="font-semibold text-lg md:text-xl" style={{ color: "var(--accent-color)" }}>Amandeep Singh</h2>
                    <p className="opacity-40 text-sm">⚠️ Warning: Currently under development phase, dummy text has been used everywhere</p>

                    <div className="flex gap-2 md:gap-4 items-center text-sm md:text-base flex-wrap" style={{ color: "var(--muted-text)" }}>
                        <span>{formattedDate}</span>
                        <span className="font-mono" style={{ color: "var(--highlight-color)" }}>{formattedTime}</span>
                        <img src={logo} alt="vth Petal productions" className="h-6 md:h-8 opacity-100" />
                    </div>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-6 h-full">

                    {/* First Bento */}

                    <motion.div className={`bento flex-[1.1] ${effect} flex flex-col justify-between`} style={{ backgroundColor: "var(--bento-bg)" }} variants={item}>
                        <div className="relative flex w-full h-12 rounded-t-2xl justify-between px-4 items-center" style={{ backgroundColor: "var(--accent-color)" }}><h1 className="text-base text-black md:text-lg">Projects</h1>

                            <Link href='/projects'><FontAwesomeIcon icon={faAnglesRight} style={{ color: "black" }} /></Link>
                        </div>
                        <div className="p-4 flex flex-col gap-2 text-sm">
                            <p><span className="font-semibold">🌱 EcoTrack</span> – A web app to track personal carbon footprint.</p>
                            <p><span className="font-semibold">📚 StudySphere</span> – Platform for sharing and accessing study resources.</p>
                            <p><span className="font-semibold">🎮 JS Game Engine</span> – Lightweight engine built with vanilla JS + Canvas.</p>
                        </div>
                    </motion.div>

                    {/* second bento */}

                    <motion.div className={`bento flex-[1.3] ${effect} justify-between flex flex-col`} style={{ backgroundColor: "var(--bento-bg)" }} variants={item}>
                        <div className="relative flex w-full h-12 bg-gray-100 rounded-t-2xl justify-between px-4 items-center" style={{ backgroundColor: "var(--accent-color)" }}><h1 className="text-base text-black md:text-lg">Experience</h1>
                            <Link href='/experience'><FontAwesomeIcon icon={faAnglesRight} style={{ color: "black" }} /></Link>
                        </div>
                        <div className="p-4 flex flex-col gap-2 text-sm">
                            <p><span className="font-semibold">💻 Web Developer Intern</span> – Built responsive landing pages and dashboards.</p>
                            <p><span className="font-semibold">👨‍💻 Freelancer</span> – Delivered 3+ full-stack apps for clients.</p>
                            <p><span className="font-semibold">🤝 Open Source Contributor</span> – Contributed bug fixes and docs to GitHub repos.</p>
                        </div>
                    </motion.div>

                    {/* third bento */}

                    <motion.div className={`bento flex-[1.8] ${effect} flex flex-col`} style={{ backgroundColor: "var(--bento-bg)" }} variants={item}>
                        <div className="relative flex w-full h-12 bg-gray-100 rounded-t-2xl justify-between px-4 items-center" style={{ backgroundColor: "var(--accent-color)" }}><h1 className="text-base text-black md:text-lg">About Me</h1>
                            <Link href='about'><FontAwesomeIcon icon={faAnglesRight} style={{ color: "black" }} /></Link>
                        </div>
                        <div className="p-4 flex flex-col gap-4 text-sm justify-between">
                            <div><p>Hey there 👋 I’m <span className="font-semibold">Amandeep Singh</span>, a Computer Science student passionate about building modern web apps, automation tools, and exploring AI.</p></div>
                            <div><h2 className="font-semibold mb-2">⚡ Skills</h2><ul className="grid grid-cols-2 gap-1 list-disc pl-4"><li>React.js / Next.js</li><li>Node.js / Express</li><li>MongoDB / SQL</li><li>TailwindCSS</li><li>Git & GitHub</li><li>Python (Basics)</li></ul></div>
                        </div>
                    </motion.div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-6 h-full">
                    <div className="flex-[1] grid grid-cols-2 gap-2 md:gap-4">

                        {/* socials bento small */}
                        <motion.div className="bento aspect-square flex items-center justify-center" style={{ backgroundColor: "var(--bento-bg)" }} variants={item}>
                            <div className="grid grid-cols-2 gap-2 md:gap-3">
                                <a className={`${smallHoverEffect}`} target="_blank" href="https://github.com/AmanCiphers"><img src={github} alt="github" className="h-6 md:h-12 cursor-pointer" /></a>
                                <a className={`${smallHoverEffect}`} target="_blank" href="https://instagram.com/Aman.Ciphers"><img src={insta} alt="insta" className="h-6 md:h-12 cursor-pointer" /></a>
                                <a className={`${smallHoverEffect}`} target="_blank" href="https://www.linkedin.com/in/amanciphers/"><img src={linkedin} alt="linkedin" className="h-6 md:h-12 cursor-pointer" /></a>
                                <a className={`${smallHoverEffect}`} target="_blank" href="mailto:fullstackdev.aman@gmail.com"><img src={mail} alt="mail" className="h-6 md:h-12 cursor-pointer" /></a>
                            </div>
                        </motion.div>

                        {/* pfp bento small */}

                        <motion.div className={`bento aspect-square ${effect} flex items-center justify-center`} style={{ backgroundColor: "var(--bento-bg)" }} variants={item}>
                            <img src={pfp} className="rounded-xl aspect-square h-30" alt="profile" />
                        </motion.div>

                        {/* contact me bento small */}

                        <motion.div className={`bento aspect-square ${effect} flex flex-col items-center justify-center text-center p-4 rounded-2xl`} style={{ backgroundColor: "var(--bento-bg)" }} variants={item}>
                            <h1 className="font-semibold text-lg">Contact Me</h1><p className="opacity-70 text-sm">Always open to work & collab</p>
                            <a href="mailto:fullstackdev.aman@gmail.com" className="mt-2 px-5 py-2.5 rounded-xl bg-[var(--accent-color)] text-[var(--bg-color)] font-medium text-sm shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-200 flex items-center gap-2">Say Hello</a>
                        </motion.div>

                        {/* download resume bento small */}

                        <motion.div className={`bento aspect-square ${effect} flex flex-col items-center justify-center p-4 rounded-2xl`} style={{ backgroundColor: "var(--bento-bg)" }} variants={item}>
                            <h1 className="font-semibold text-lg mt-2">Resume</h1><p className="opacity-70 text-sm">Download PDF</p>
                            <a href="/resume.pdf" download className="mt-5 px-5 py-2.5 rounded-xl bg-[var(--accent-color)] text-[var(--bg-color)] font-medium text-sm shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-200 flex items-center gap-2"><FontAwesomeIcon icon={faDownload} /> Download</a>
                        </motion.div>
                    </div>



                    <div className="flex-[1.4] flex flex-col gap-2 md:gap-4">
                        <motion.div className={`bento flex-1 flex items-center justify-center text-center p-4 ${effect}`} style={{ backgroundColor: "var(--bento-bg)" }} variants={item}>
                            <h1 className="text-base md:text-lg">🚀 Working on: Personal Portfolio + Event Management System</h1>
                        </motion.div>
                        <motion.div className={`bento flex-3 flex items-center justify-center p-4 text-sm text-center ${effect}`} style={{ backgroundColor: "var(--bento-bg)" }} variants={item}><div>
                            <h2 className="font-semibold mb-2">📚 Currently Learning</h2><p>Exploring Data Structures & Algorithms (DSA) + Cloud Computing (AWS & GCP).</p></div>
                        </motion.div>
                    </div>

                    <motion.div className={`flex-[1.4] rounded-2xl ${effect}`} style={{ backgroundColor: "var(--bento-bg)" }} variants={item}>
                        <div className={`bento relative h-full flex flex-col justify-between p-2`} style={{ backgroundColor: "var(--bento-bg)" }}>
                            <div className="absolute flex top-0 left-0 w-full h-12 bg-gray-100 rounded-t-2xl justify-between px-4 items-center" style={{ backgroundColor: "var(--accent-color)" }}><h1 className="text-base text-black md:text-lg">Achievements | Hobbies</h1>
                                <Link href='achievements'><FontAwesomeIcon icon={faAnglesRight} style={{ color: "black" }} /></Link>
                            </div>
                            <div className="p-4 flex flex-col gap-2 text-sm mt-10">
                                <h2 className="font-semibold">🏆 Achievements</h2>
                                <p>🥇 Hackathon Finalist – Built AI-powered app for sustainability</p>
                                <p>🏆 Google Cloud Skill Boost Prize Winner</p>
                                <p>🎓 JLPT N5 Japanese Certification in Progress</p>
                                <hr className="my-3 border-gray-300" />
                                <h2 className="font-semibold">🎨 Hobbies</h2>
                                <p>🎶 Playing Guitar & Listening to Lo-fi</p>
                                <p>📷 Photography & Editing</p>
                                <p>♟️ Chess & Problem Solving Games</p>
                                <p>🌍 Exploring Japanese Culture & Anime</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Bento;

