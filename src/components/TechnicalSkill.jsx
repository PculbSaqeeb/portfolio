// import React, { useContext, useEffect, useState } from 'react'
// import { DataContext } from '../context/dataContext';
// import { motion } from 'framer-motion';

// const BASE_URL = import.meta.env.VITE_BASE_URL;

// const TechnicalSkill = () => {
//     const { portfolioData } = useContext(DataContext);
//     const [selectedSkill, setSelectedSkill] = useState(null);

//     useEffect(() => {
//         if (portfolioData?.skills?.length > 0) {
//             setSelectedSkill(portfolioData.skills[0].slug);
//         }
//     }, [portfolioData]);

//     return (
//         <motion.div 
//         whileInView={{ opacity: 1, y: -40 }}    
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.9 }}
//                 viewport={{  amount: 0.2 }}
//                  className='py-[100px] mx-[60px]'>
//             <p className='font-bold text-5xl text-center'>Technical Skills</p>
//             <p className='text-lg text-gray-500 mt-[10px] text-center'>My expertise across various technologies and tools</p>

//             <motion.div whileInView={{ opacity: 1, y: -40 }}    
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.9 }}
//                 viewport={{  amount: 0.2 }} className='flex flex-wrap justify-center gap-4 bg-slate-200 dark:bg-gray-600 py-1 px-1 rounded-md mt-[50px] cursor-pointer w-fit mx-auto'>
//                 {portfolioData?.skills?.map((skill, index) => (
//                     <p
//                         key={index}
//                         onClick={() => setSelectedSkill(skill?.slug)}
//                         className={`px-3 py-1 rounded-md
//         ${selectedSkill === skill?.slug
//                                 ? 'bg-black text-white font-semibold dark:bg-gray-800'
//                                 : 'text-gray-800 hover:bg-gray-500 dark:border-white dark:text-white'}`}
//                     >
//                         {skill?.title}
//                     </p>
//                 ))}
//             </motion.div>

//             <motion.div whileInView={{ opacity: 1, y: -40 }}    
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.9 }}
//                 viewport={{  amount: 0.2 }} className='bg-slate-200 dark:bg-gray-700 px-4 md:px-6 py-6 mt-[40px] flex gap-3 flex-wrap justify-center rounded-lg cursor-pointer w-fit mx-auto'>
//                 {
//                     portfolioData?.skillBreakdown?.find(skill => skill.category === selectedSkill)?.tech?.map((item, index) => (
//                         <div key={index} className='flex items-center gap-2 bg-white dark:bg-black dark:border-0 border border-gray-300 px-3 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900'>
//                             {item?.logo && <img className='w-[20px] object-cover' src={`${BASE_URL}${item?.logo?.url}`} alt="" />}
//                             <p key={index}>{item?.title}</p>
//                         </div>
//                     ))
//                 }
//             </motion.div>

//         </motion.div>
//     )
// }

// export default TechnicalSkill



import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/Button"
import Card from '../components/Card'
import Badge from '../components/Badge'
import CardContent from '../components/CardContent'
import { DataContext } from "../context/dataContext";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const TechnicalSkill = () => {
  const { portfolioData } = useContext(DataContext);
  const [activeCategory, setActiveCategory] = useState(portfolioData?.skills[0].slug?.toLowerCase());
  const selectedSkills = portfolioData?.skillBreakdown?.find(item => item.slug.toLowerCase() === activeCategory)?.tech || [];
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // const filteredSkills =
  //   activeCategory === "All"
  //     ? skillsData
  //     : skillsData.filter((skill) => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section
      className="py-14 px-4 min-h-[80vh]">
      <div className="mx-auto">
        <div

          className="text-center mb-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
            viewport={{ amount: 0.9, once: true }}
            className=" text-4xl sm:text-5xl font-bold bg-clip-text">
            Technical Skills
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
            viewport={{ amount: 0.6, once: true }}
            className="mt-2 text-lg">My expertise across various technologies and tools</motion.p>

        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-1 sm:gap-3 mb-12"
        >
          {portfolioData?.skills?.map((skill, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
              viewport={{ amount: 0.6, once: true }}
              key={index} variants={itemVariants}>
              <Button
                aria-label='Skills'
                variant={activeCategory === skill?.slug?.toLowerCase() ? "default" : "outline"}
                onClick={() => setActiveCategory(skill?.slug?.toLowerCase())}
                // className={`px-5 py-1 rounded-full font-medium transition-all duration-300 ${activeCategory === skill?.slug?.toLowerCase()}
                //   ? "bg-gradient-to-r from-purple-400 via-indigo-400 to-[#3B82F6] text-white shadow-lg scale-105"
                //   : " hover:bg-blue-500 border-blue-300 hover:scale-105"
                //   }`}
                className={`px-5 py-1 rounded-full font-medium transition-all duration-300 ${activeCategory === skill?.slug?.toLowerCase()
                    ? "bg-gradient-to-r from-purple-400 via-indigo-400 to-[#3B82F6] text-white shadow-lg scale-105"
                    : "hover:bg-blue-500 text-white hover:text-white hover:scale-105"
                  }`}
              >
                {skill?.title}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {selectedSkills?.length===0 && <p className="text-center text-lg font- bold">No Skill</p>}

        {/* Skills Grid */} 
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto"
          >

            {selectedSkills.map((skill, index) => (
              <motion.div
                key={`${skill.title}-${activeCategory}`}
                variants={skillVariants}
                layout
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setHoveredSkill(skill?.title)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="relative"
              >
                <Card className="h-full w-full bg-black/10 backdrop-blur-xl sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      {skill?.logo && <div className="w-10 h-10">
                        <img
                          loading='lazy'
                          src={`${skill?.logo?.url}`}
                          alt={skill?.title}
                          className="w-full h-full object-contain"
                        />
                      </div>}
                      <div className="flex-1">
                        <p className="font-semibold text-white text-lg group-hover:text-blue-400 transition-colors">
                          {skill?.title}
                        </p>
                        <Badge
                          variant="secondary"
                          className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-200"
                        >
                          {activeCategory}

                        </Badge>
                      </div>
                    </div>

                    {/* Skill Level */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-white font-medium">Proficiency</span>
                        <span className="text-sm font-bold text-white">
                          {skill?.proficiency}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill?.proficiency}%` }}
                          transition={{
                            duration: 1,
                            delay: index * 0.1,
                            ease: "easeOut",
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

          </motion.div>
        </AnimatePresence>  
      </div>
    </section>
  );
};

export default TechnicalSkill;
