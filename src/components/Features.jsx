import React, { useContext, useState } from 'react'
import ProjectCard from '../components/ProjectCard';
import { useNavigate, useParams } from 'react-router';
import { DataContext } from '../context/dataContext';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';
import '../App.css'

const Features = () => {
    const { employeeName } = useParams();
    const navigate = useNavigate();
    const { portfolioData } = useContext(DataContext);
    const [selectedType, setSelectedType] = useState("mobile");

    return (
        <div id="">
            <div className='dark:bg-gray-900/10 dark:backdrop-blur-xs bg-slate-50 px-6 md:px-[30px] lg:px-[50px] xl:px-[100px] 2xl:px-[200px] min-h-screen flex flex-col justify-center'>
                <motion.div
                // whileInView={{ opacity: 1, y: -40 }}
                //     initial={{ opacity: 0, y: 50 }}
                //     animate={{ opacity: 1, y: 0 }}
                //     transition={{ duration: 0.9 }}
                //     viewport={{ amount: 0.2 }}
                >
                    <motion.p
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
                        viewport={{ amount: 0.9, once: true }}
                        className='text-5xl font-bold text-center'>Featured Projects</motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
                        viewport={{ amount: 0.6, once: true }}
                        className='text-lg dark:text-gray-300 text-center mt-2'>Check out some of my recent work</motion.p>

                    {/* <motion.div initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
                        viewport={{ amount: 0.6, once: false }} className='flex justify-center mt-4'>
                        <div className="glass-radio-group flex">
                            <input onChange={() => { setSelectedType("mobile"); console.log(selectedType) }} checked={selectedType === "mobile"} type="radio" name="plan" id="glass-gold" />
                            <label htmlFor="glass-gold">Mobile Project</label>

                            <input onChange={() => { setSelectedType("web"); console.log(selectedType) }} checked={selectedType === "web"} type="radio" name="plan" id="glass-platinum" />
                            <label htmlFor="glass-platinum">Web Project</label>

                            <div className="glass-glider"></div>
                        </div>
                    </motion.div> */}

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
                        viewport={{ amount: 0.6, once: true }}
                        className="flex justify-center mt-4"
                    >
                        <div className="relative flex rounded-full overflow-hidden border border-gray-900">

                            {/* Glider */}
                            <span
                                className="absolute top-0 left-0 h-full w-1/2 rounded-full z-0 transition-all duration-300"
                                style={{
                                    transform: selectedType === "web" ? "translateX(100%)" : "translateX(0%)",
                                    background: "linear-gradient(135deg, #bd50e9, #2851d6)",
                                }}
                            ></span>

                            {/* Inputs */}
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
                    </motion.div>




                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 mt-10 sm:mt-14 mb-16 sm:mb-6'>
                        {portfolioData?.projects?.filter((project) => project.slug === selectedType)?.map((project, index) => {
                            // let animationType = "center";

                            // if ((index % 3) === 0) animationType = "left";
                            // else if ((index % 3) === 2) animationType = "right";
                            return (
                                <ProjectCard
                                    key={index}
                                    project={project}
                                    // animationType={animationType}
                                    index={index}
                                />
                            );
                        })}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeIn" }}
                        viewport={{ once: true, amount: 0.3, delay: 0.5 }}
                        className='flex items-center justify-center'>
                        <AnimatedButton  variant='primary'  to={`/${employeeName || "manjinder"}/projects`}>
                            View My Projects
                        </AnimatedButton>
                    </motion.div>

                </motion.div>
            </div>

            {/* <Card/> */}
        </div>
    )
}

export default Features