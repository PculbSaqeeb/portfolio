import React, { useContext, useEffect, useState } from 'react'
import { useFadeInAnimation } from '../hooks/useAnimation';
import { DataContext } from '../context/dataContext';
import { motion } from 'framer-motion';
import Stats from './Stats';
import Features from './Features';
import TechnicalSkill from './TechnicalSkill';
import Recommendation from './Recommendation';
import Project from './Project';


const About = () => {

    const { portfolioData } = useContext(DataContext);
    const [animate, setAnimate] = useState(false);
    const { ref, controls } = useFadeInAnimation(!!portfolioData);
    const [copied, setCopied] = useState(false);


    const email = portfolioData?.contactEmail;

    const handleCopy = async () => {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                // Secure way
                await navigator.clipboard.writeText(email);
            } else {
                // Fallback for insecure origins (http)
                const textArea = document.createElement("textarea");
                textArea.value = email;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
            }

            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
        } catch (err) {
            console.error("Copy failed", err);
        }
    };

    const positions = [
        {
            top: { base: "-19%", sm: "-13%" },
            left: { base: "50%", sm: "50%" },
        },
        {
            top: { base: "92%", sm: "89%" },
            left: { base: "-5%", sm: "1%" },
        },
        {
            top: { base: "92%", sm: "89%" },
            left: { base: "105%", sm: "100%" },
        },
    ];

    const getResponsiveValue = (value) => {
        if (window.innerWidth >= 640) return value?.sm || value?.base;
        return value?.base;
    };

    useEffect(() => {
        setAnimate(true);
    }, []);
    return (
        <>
            <section id='about' className='min-h-screen overflow-x-hidden pt-6'>
                <div className='flex flex-col-reverse lg:flex-row-reverse gap-[100px] justify-center mx-4 lg:mx-[70px] mt-20 mb-20'>
                    <div className='w-full lg:w-1/2 min-h-[75vh]'>
                        <motion.h2 animate={controls}
                            ref={ref}
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3, type: "spring", damping: 10 }} className='text-2xl sm:text-4xl font-bold'>More About Me</motion.h2>

                        <motion.div
                            animate={controls}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
                            className="space-y-2 mt-7">
                            {portfolioData?.longBio?.map((block, index) => {
                                const isBold = block?.children?.some(child => child?.bold);

                                if (isBold) {
                                    return (
                                        <div key={index}>
                                            <div className="flex items-start gap-2 text-[#A750E6] text-lg font-semibold mt-4">
                                                <span className="text-xl">➤</span>
                                                <span>
                                                    {block?.children?.map((child, i) => (
                                                        <span key={i}>{child?.text}</span>
                                                    ))}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <p
                                            key={index}
                                            className="dark:text-white mt-1 text-lg leading-relaxed"
                                        >
                                            {block?.children?.map((child, i) => (
                                                <span key={i}>{child?.text}</span>
                                            ))}
                                        </p>
                                    );
                                }
                            })}
                        </motion.div>




                        <hr className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full border-none mt-10 mb-6" />

                        <motion.blockquote
                            animate={controls}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
                            viewport={{ amount: 0.2, once: true }}
                            className="relative mt-8 text-center px-6 py-6 text-xl sm:text-2xl font-semibold italic text-white/90 rounded-xl bg-gradient-to-r from-purple-900/30 via-slate-900/30 to-indigo-900/30 backdrop-blur-md shadow-lg ring-1 ring-violet-600/40 hover:shadow-violet-500/20 transition-all">
                            <span className="block text-sm uppercase tracking-wider text-violet-400 mb-2">Quote</span>
                            <em className="font-serif">"Code is the language I use to bring ideas to life."</em>

                            <span className="absolute -top-3 left-6 text-5xl text-violet-500 opacity-30">“</span>
                            <span className="absolute -bottom-9 right-6 text-5xl text-violet-500 opacity-30">”</span>
                        </motion.blockquote>
                    </div>


                    {/* <div className='relative w-96 h-96 rounded-full mt-[140px] flex items-center justify-center bg-white/7 backdrop-blur-2xl'>
                        <div className='w-80 h-80 rounded-full flex items-center justify-center bg-white/1 backdrop-blur-2xl ring-2 ring-violet-600/40 shadow-xl
'>
                            <img loading='lazy' className='w-full h-full rounded-full object-cover object-center' src="https://imgs.search.brave.com/G4ap423FAiNCDzGKbUf1Tv2wdgN4arNbUIbDHSACfRg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzEzLzM1Lzgy/LzM2MF9GXzcxMzM1/ODI1NF9wTTEyaGF5/RnZHa01iWHdVMXdF/UmF3d0MyVHUzTWZw/eS5qcGc" alt="" />
                            <div className="absolute inset-0 spin-slow">
                                <div className="absolute left-1/2 -top-[13%] transform -translate-x-1/2 -translate-y-1/2">
                                    <motion.div
                                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="w-20 h-20 bg-[#5d1491] shadow-[0_0_10px_#60A5FA] rounded-full flex items-center justify-center">
                                        <span className="text-white font-extrabold text-sm ">UI / UX</span>
                                    </motion.div>
                                </div>

                                <div className="absolute -left-[1%] top-[89%] transform -translate-x-1/2 -translate-y-1/2">
                                    <motion.div
                                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="w-20 h-20 bg-[#5d1491] shadow-[0_0_10px_#60A5FA] rounded-full flex items-center justify-center">
                                        <span className="text-white font-extrabold text-sm ">WEB</span>
                                    </motion.div>
                                </div>

                                <div className="absolute left-[100.6%] top-[89%] transform -translate-x-1/2 -translate-y-1/2">
                                    <motion.div
                                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="w-20 h-20 bg-[#5d1491] shadow-[0_0_10px_#60A5FA] rounded-full flex items-center justify-center">
                                        <span className="text-white font-extrabold text-sm">MOBILE</span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className='relative w-56 h-56 sm:w-96 sm:h-96 md:w-96 md:h-96 mt-10 lg:mt-[140px] mx-auto lg:mx-0 flex items-center justify-center bg-white/10 backdrop-blur-2xl rounded-full'>
                        <div className='w-[80%] h-[80%] rounded-full flex items-center justify-center bg-white/5 backdrop-blur-2xl ring-2 ring-violet-600/40 shadow-xl'>
                            <img
                                loading='lazy'
                                className='w-full h-full rounded-full object-cover object-center'
                                src={portfolioData?.avatar?.url}
                                alt="profile"
                            />
                            <div className="absolute inset-0 spin-slow">
                                {portfolioData?.categories?.map((profile, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            top: getResponsiveValue(positions[index]?.top),
                                            left: getResponsiveValue(positions[index]?.left),
                                        }} className="absolute transform -translate-x-1/2 -translate-y-1/2">
                                        <motion.div
                                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                            className="w-16 h-16 sm:w-20 sm:h-20 bg-[#5d1491] shadow-[0_0_10px_#60A5FA] rounded-full flex items-center justify-center"
                                        >
                                            <span className="text-white font-extrabold text-[10px] sm:text-[14px]">{profile?.tag}</span>
                                        </motion.div>
                                    </div>
                                ))}

                                {/* <div className="absolute left-1/2 -top-[19%] sm:left-1/2 sm:-top-[13%] transform -translate-x-1/2 -translate-y-1/2">
                                    <motion.div
                                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                        className="w-16 h-16 sm:w-20 sm:h-20 bg-[#5d1491] shadow-[0_0_10px_#60A5FA] rounded-full flex items-center justify-center"
                                    >
                                        <span className="text-white font-extrabold text-xs sm:text-sm">UI / UX</span>
                                    </motion.div>
                                </div>

                                <div className="absolute -left-[5%] top-[92%] sm:-left-[1%] sm:top-[89%] transform -translate-x-1/2 -translate-y-1/2">
                                    <motion.div
                                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                        className="w-16 h-16 sm:w-20 sm:h-20 bg-[#5d1491] shadow-[0_0_10px_#60A5FA] rounded-full flex items-center justify-center"
                                    >
                                        <span className="text-white font-extrabold text-xs sm:text-sm">WEB</span>
                                    </motion.div>
                                </div>

                                <div className="absolute left-[105%] top-[92%] sm:left-[100.6%] sm:top-[89%] transform -translate-x-1/2 -translate-y-1/2">
                                    <motion.div
                                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                        className="w-16 h-16 sm:w-20 sm:h-20 bg-[#5d1491] shadow-[0_0_10px_#60A5FA] rounded-full flex items-center justify-center"
                                    >
                                        <span className="text-white font-extrabold text-xs sm:text-sm">MOBILE</span>
                                    </motion.div>
                                </div> */}
                            </div>
                        </div>  
                    </div>


                </div>

                {/* <div className='flex flex-col-reverse lg:flex-row-reverse justify-center gap-10 md:gap-[100px] mx-4 sm:mx-8 md:mx-[70px] mt-16 mb-20'>

                    <div className='w-[500px] min-h-[75vh]'>
                        <motion.h2
                            animate={controls}
                            ref={ref}
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3, type: "spring", damping: 10 }}
                            className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'
                        >
                            More About Me
                        </motion.h2>

                        <motion.div
                            animate={controls}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
                            className="space-y-4 mt-6"
                        >
                            {portfolioData?.longBio?.map((block, index) => {
                                const isBold = block.children?.some(child => child.bold);

                                if (isBold) {
                                    return (
                                        <div key={index}>
                                            <div className="flex items-start gap-2 text-[#A750E6] text-base sm:text-lg md:text-xl font-semibold mt-1 sm:mt-4">
                                                <span className="text-lg sm:text-xl">➤</span>
                                                <span>
                                                    {block.children.map((child, i) => (
                                                        <span key={i}>{child.text}</span>
                                                    ))}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <p
                                            key={index}
                                            className="dark:text-white mt-1 text-sm sm:text-base md:text-lg leading-relaxed"
                                        >
                                            {block.children.map((child, i) => (
                                                <span key={i}>{child.text}</span>
                                            ))}
                                        </p>
                                    );
                                }
                            })}
                        </motion.div>

                        <hr className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full border-none mt-10 mb-6" />

                        <motion.blockquote
                            animate={controls}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
                            viewport={{ amount: 0.2, once: true }}
                            className="relative mt-8 text-center px-6 py-6 text-base sm:text-xl lg:text-2xl font-semibold italic text-white/90 rounded-xl bg-gradient-to-r from-purple-900/30 via-slate-900/30 to-indigo-900/30 backdrop-blur-md shadow-lg ring-1 ring-violet-600/40 hover:shadow-violet-500/20 transition-all"
                        >
                            <span className="block text-sm uppercase tracking-wider text-violet-400 mb-2">Quote</span>
                            <em className="font-serif">"Code is the language I use to bring ideas to life."</em>
                            <span className="absolute -top-3 left-6 text-4xl sm:text-5xl text-violet-500 opacity-30">“</span>
                            <span className="absolute -bottom-9 right-6 text-4xl sm:text-5xl text-violet-500 opacity-30">”</span>
                        </motion.blockquote>
                    </div>

                    <div className='relative w-56 h-56 sm:w-96 sm:h-96 md:w-96 md:h-96 mx-auto mt-10 lg:mt-[140px] flex items-center justify-center bg-white/10 backdrop-blur-2xl rounded-full'>
                        <div className='w-[85%] h-[85%] rounded-full flex items-center justify-center bg-white/5 backdrop-blur-2xl ring-2 ring-violet-600/40 shadow-xl'>
                            <img
                                loading='lazy'
                                className='w-full h-full rounded-full object-cover object-center'
                                src="https://imgs.search.brave.com/G4ap423FAiNCDzGKbUf1Tv2wdgN4arNbUIbDHSACfRg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzEzLzM1Lzgy/LzM2MF9GXzcxMzM1/ODI1NF9wTTEyaGF5/RnZHa01iWHdVMXdF/UmF3d0MyVHUzTWZw/eS5qcGc"
                                alt="profile"
                            />
                            <div className="absolute inset-0 spin-slow">

                                <div className="absolute left-1/2 -top-[13%] transform -translate-x-1/2 -translate-y-1/2">
                                    <motion.div
                                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                        className="w-16 h-16 sm:w-20 sm:h-20 bg-[#5d1491] shadow-[0_0_10px_#60A5FA] rounded-full flex items-center justify-center"
                                    >
                                        <span className="text-white font-extrabold text-xs sm:text-sm">UI / UX</span>
                                    </motion.div>
                                </div>

                                <div className="absolute -left-[1%] top-[89%] transform -translate-x-1/2 -translate-y-1/2">
                                    <motion.div
                                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                        className="w-16 h-16 sm:w-20 sm:h-20 bg-[#5d1491] shadow-[0_0_10px_#60A5FA] rounded-full flex items-center justify-center"
                                    >
                                        <span className="text-white font-extrabold text-xs sm:text-sm">WEB</span>
                                    </motion.div>
                                </div>

                                <div className="absolute left-[100.6%] top-[89%] transform -translate-x-1/2 -translate-y-1/2">
                                    <motion.div
                                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                        className="w-16 h-16 sm:w-20 sm:h-20 bg-[#5d1491] shadow-[0_0_10px_#60A5FA] rounded-full flex items-center justify-center"
                                    >
                                        <span className="text-white font-extrabold text-xs sm:text-sm">MOBILE</span>
                                    </motion.div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div> */}


                <Stats />
                <Project />
                <TechnicalSkill />
                <Recommendation />
            </section>

        </>
    )
}

export default About
