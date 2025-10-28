import React, { lazy, useContext } from 'react'
import { DataContext } from '../context/dataContext';
import { motion } from 'framer-motion';
// import FlipCarousel from '../components/Flip';
const FlipCarousel = lazy(() => import("./FlipCarousel"));

import '../App.css'

const Recommendation = () => {
    const { portfolioData } = useContext(DataContext);

    return (
        <section className='bg-gray-900/10 dark:backdrop-blur-xs py-20 sm:px-6 lg:px-20 sm:mb-[50px]  min-h-[80vh]'>
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                viewport={{ amount: 0.9, once: true }}
                className='text-4xl sm:text-5xl font-bold text-center'>Testimonial</motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.1 }}
                className='text-base sm:text-lg mt-2 text-center dark:text-gray-300'>
                Appreciations From My Clients
            </motion.p>

            {/* <div className='mt-12 flex flex-col md:flex md:flex-row gap-8 jCustify-center items-center'>
                {portfolioData?.recommendations?.map((item, index) => (
                    <div key={index} className='bg-white px-6 py-14 shadow-md rounded-lg max-w-[600px] md:max-w-[500px] dark:bg-gray-800 '>
                        <p className=' mb-6 mt-[6px]'>
                            "{item?.caption}"
                        </p>

                        <div className='flex gap-4'>
                            <div className='p-4 rounded-full border border-gray-400 text-center text-lg font-semibold bg-gray-100 dark:bg-gray-800 w-14 h-14 flex items-center justify-center '>
                                {item?.name?.slice(0,1)}
                            </div>
                            <div>
                                <p className='font-bold'>{item?.name}</p>
                                <p className='text-sm'>
                                    {item?.profile}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div> */}
            <FlipCarousel />
        </section>




        // <div
        //     className='bg-slate-50 dark:bg-gray-900/10 dark:backdrop-blur-xs py-20 px-4 sm:px-6 lg:px-20'>

        //     <div className='text-center my-12'>
        //         <motion.h2
        //             initial={{ opacity: 0, y: -50 }}
        //             whileInView={{ opacity: 1, y: 0 }}
        //             transition={{ duration: 0.7, ease: "easeOut", delay: 0.2, type: "spring", damping: 7 }}
        //             viewport={{ amount: 0.6 }}
        //             className='text-4xl sm:text-5xl font-bold'
        //         >
        //             Recommendations
        //         </motion.h2>

        //         <motion.p
        //             initial={{ opacity: 0, y: 50 }}
        //             whileInView={{ opacity: 1, y: 0 }}
        //             transition={{ duration: 0.6, ease: "easeIn", delay: 0.3 }}
        //             viewport={{ amount: 0.2 }}
        //             className='text-base sm:text-lg mt-4 text-gray-600'
        //         >
        //             What mentors and colleagues say about my work
        //         </motion.p>
        //     </div>


        //      <div className='mt-20 flex flex-col sm:flex-row gap-8 justify-center items-center sm:items-stretch slider-container'>
        //         {/* <Slider {...settings}> */}
        //             {portfolioData?.recommendations?.map((item, index) => {
        //                 const isEven = index % 2 === 0;
        //                 return (
        //                     <div
        //                         initial={{ opacity: 0, x: isEven ? -100 : 100 }}
        //                         whileInView={{ opacity: 1, x: 0 }}
        //                         transition={{
        //                             duration: 0.6,
        //                             delay: index * 0.1,
        //                             ease: "easeOut"
        //                         }}
        //                         viewport={{ once: false, amount: 0.8 }}
        //                         key={index}
        //                         className='bg-white px-6 py-14 shadow-md rounded-lg max-w-[600px] md:max-w-[500px] dark:bg-gray-800 flex flex-col justify-between'
        //                     >
        //                         <div>
        //                             <PiQuotes size={34} />
        //                             <p className='mb-6 mt-[10px]'>
        //                                 "{item?.caption}"
        //                             </p>
        //                         </div>

        //                         <div className='flex gap-4 items-center mt-auto'>
        //                             <div className='p-4 rounded-full border border-gray-400 text-center text-lg font-semibold bg-gray-100 dark:bg-gray-800 w-14 h-14 flex items-center justify-center '>
        //                                 {item?.name?.slice(0, 1)}
        //                             </div>
        //                             <div>
        //                                 <p className='font-bold'>{item?.name}</p>
        //                                 <p className='text-sm'>
        //                                     {item?.profile}
        //                                 </p>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 )
        //             })}
        //         {/* </Slider> */}
        //     </div> 



        // </div>


    )
}

export default Recommendation;

