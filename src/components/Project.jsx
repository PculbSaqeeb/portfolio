import React, { useContext, useState } from 'react'
import ProjectCarousel from './ProjectCarosule'
import { DataContext } from '../context/dataContext';
import { useFadeInAnimation } from '../hooks/useAnimation';
import { motion } from 'framer-motion';
import Toggle from './Toggle';
import Button from './Button';
import { ArrowRight, Calendar, Play, Star, Users } from 'lucide-react';


const Project = () => {
    const { portfolioData } = useContext(DataContext);
    const { ref, controls } = useFadeInAnimation(!!portfolioData);
    const [showWebOnly, setShowWebOnly] = useState(false);
    const [selectedType, setSelectedType] = useState("mobile");


    return (
        <>
            <section id='projects' className='mx-4 sm:mx-8 md:mx-10 lg:mx-10 xl:mx-18 2xl:mx-52 mt-20 min-h-screen'>
                <div className="text-center mb-6 animate-slide-up">
                    <motion.h2
                        animate={controls}
                        ref={ref}
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2, type: "spring", damping: 10 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                        Turning Ideas into Interfaces
                    </motion.h2>

                    <motion.p
                        animate={controls}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }} className="text-white/80 text-lg max-w-5xl mx-auto">
                        Here’s a glimpse into what I’ve been building. Each project you’ll find below is crafted with attention to detail, thoughtful design, and a strong foundation in functionality. From solving real-world problems to exploring new technologies, these projects showcase my journey as a developer.
                    </motion.p>
                </div>

                {/* <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
                    viewport={{ amount: 0.6, once: true }}
                    className="flex justify-center mt-4"
                >
                    <div className="relative flex rounded-full overflow-hidden border border-gray-900">

                        <span
                            className="absolute top-0 left-0 h-full w-1/2 rounded-full z-0 transition-all duration-300"
                            style={{
                                transform: selectedType === "web" ? "translateX(100%)" : "translateX(0%)",
                                background: "linear-gradient(135deg, #bd50e9, #2851d6)",
                            }}
                        ></span>


                        <input
                            onChange={() => setSelectedType("mobile")}
                            checked={selectedType === "mobile"}
                            type="radio"
                            name="plan"
                            id="mobile"
                            className="hidden peer/mobile"
                        />
                        <label
                            htmlFor="mobile"
                            className="z-10 px-6 py-2 cursor-pointer text-sm md:text-base peer-checked/mobile:text-white dark:text-gray-300 transition-all duration-300"
                        >
                            Mobile Project
                        </label>

                        <input
                            onChange={() => setSelectedType("web")}
                            checked={selectedType === "web"}
                            type="radio"
                            name="plan"
                            id="web"
                            className="hidden peer/web"
                        />
                        <label
                            htmlFor="web"
                            className="z-10 px-6 py-2 cursor-pointer text-sm md:text-base peer-checked/web:text-white dark:text-gray-300 transition-all duration-300"
                        >
                            Web Project
                        </label>
                    </div>
                </motion.div> */}

                {/* <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
                    viewport={{ amount: 0.6, once: true }}
                    className="flex justify-center mt-4">
                    <div className="relative flex rounded-full overflow-hidden border border-gray-900">
                        <span
                            className="absolute top-0 left-0 h-full w-1/3 rounded-full z-0 transition-all duration-300"
                            style={{
                                transform:
                                    selectedType === "all"
                                        ? "translateX(0%)"
                                        : selectedType === "mobile"
                                            ? "translateX(100%)"
                                            : "translateX(200%)",
                                background: "linear-gradient(135deg, #bd50e9, #2851d6)",
                            }}
                        ></span>

                        <input
                            onChange={() => setSelectedType("all")}
                            checked={selectedType === "all"}
                            type="radio"
                            name="plan"
                            id="all"
                            className="hidden peer/all"
                        />
                        <label
                            htmlFor="all"
                            className="z-10 px-6 py-2 cursor-pointer text-sm md:text-base peer-checked/all:text-white text-gray-300 transition-all duration-300"
                        >
                            All Projects
                        </label>

                        <input
                            onChange={() => setSelectedType("mobile")}
                            checked={selectedType === "mobile"}
                            type="radio"
                            name="plan"
                            id="mobile"
                            className="hidden peer/mobile"
                        />
                        <label
                            htmlFor="mobile"
                            className="z-10 px-6 py-2 cursor-pointer text-sm md:text-base peer-checked/mobile:text-white text-gray-300 transition-all duration-300"
                        >
                            Mobile Projects
                        </label>
                        <input
                            onChange={() => setSelectedType("web")}
                            checked={selectedType === "web"}
                            type="radio"
                            name="plan"
                            id="web"
                            className="hidden peer/web"
                        />
                        <label
                            htmlFor="web"
                            className="z-10 px-6 py-2 cursor-pointer text-sm md:text-base peer-checked/web:text-white text-gray-300 transition-all duration-300"
                        >
                            Web Projects
                        </label>
                    </div>
                </motion.div> */}



                <ProjectCarousel showWebOnly={showWebOnly} />




                
            </section>
        </>
    )
}

export default Project
