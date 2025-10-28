import React, { useContext } from 'react'
import { DataContext } from '../context/dataContext';
import SocialMedia from './SocialMedia';
import { motion } from "framer-motion";
import AnimatedText from './AminatedText';
import DownloadButton from './DownloadButton';
import { TypeAnimation } from 'react-type-animation';

const BASE_URL = import.meta.env.VITE_BASE_URL;
// import '../App.css'

const Profile = () => {
    const { portfolioData } = useContext(DataContext);

    const handleDownload = () => {
        const fileId = portfolioData.resumeLink.split("/d/")[1]?.split("/")[0];
        const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
        const a = document.createElement("a");
        a.href = downloadLink;
        a.download = "Resume.pdf";
        a.click();
    };

    // const icons = [
    //     CiCalendar,
    //     HiOutlineTrophy,
    //     FaLaptopCode,
    //     IoPeopleOutline
    // ]

    return (
        <>
            <section className='relative min-h-[85vh] overflow-x-hidden'>
                <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-6 md:gap-[30px] lg:gap-[40px] xl:gap-[70px] 2xl:gap-[250px] 3xl:gap-[350px] lg:mb-[100px] mx-4 md:mx-[30px] lg:mx-[30px] xl:mx-[30px] mt-[50px] md:mt-[150px]'>

                    <div className='text-center md:text-left w-fit'>
                        {/* <p className='text-[23px] sm:text-[32px] md:text-[32px] lg:text-[38px] xl:text-[50px] font-bold gap-4'>
                            Hello! I'm
                        </p> */}

                        <h2 className="text-[27px] md:text-[36px] xl:text-[48px] font-bold">
                            Hello! I'm
                        </h2>

                        <AnimatedText text={`${portfolioData?.name}`} />


                        <TypeAnimation
                            sequence={portfolioData?.profile?.flatMap(text => [text?.profile, 2000])}
                            wrapper="span"
                            speed={10}
                            deletionSpeed={30}
                            repeat={Infinity}
                            cursor={false}
                            className="text-[24px] sm:text-[26px] lg:text-[30px] font-bold text-white mt-[2px]"
                        />
                        <span className='invisible'>D</span>


                        {/* <div>
                            <span className='text-[20px] sm:text-[26px] lg:text-[30px] font-bold'>
                                <Typewriter text={portfolioData?.profile} delay={70} pauseTime={1000} />
                            </span>
                            <span className="invisible">c</span>
                        </div> */}

                        <div>
                            <motion.p
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    type: "tween",
                                    // stiffness: 100,
                                    // damping: 1, 
                                    duration: 0.3,
                                    // delay: 0.01,
                                }}
                                className='text-[18px]  sm:text-base lg:text-lg mt-[12px] md:max-w-[400px] lg:max-w-[620px] lg:mx-0'>
                                {portfolioData?.shortBio}
                            </motion.p>

                            <span className="invisible">v</span>
                        </div>

                        <div className='flex sm:flex-row justify-center items-center md:justify-start mt-[6px] gap-5 '>
                            <button
                                onClick={() => {
                                    const contactSection = document.getElementById("contact");
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}
                                aria-label='Redirect To UpWork'
                                className={`
                                    px-4 py-2 flex items-center gap-2 transition-all cursor-pointer border-2 border-[#f5f5f5] rounded-full hover:bg-white  hover:text-black text-[#F9FAFB] 
                                `}
                            >
                                {/* <FiSend className='text-[#F9FAFB] dark:hover:text-black '/> */}
                                {/* <span className='text-[#F9FAFB] dark:hover:text-black'>Contact me</span> */}
                                Contact Me
                            </button>



                            <DownloadButton handleDownload={handleDownload} />
                        </div>

                        <div className='md:hidden block'>
                            <SocialMedia className='hover:bg-white-100 text-md' />
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 10,
                            damping: 2,
                            delay: 0.4
                        }}
                        className='flex justify-center relative'
                    >
                        {/* <img
                            loading='lazy'
                            className='w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[300px] md:h-[300px] lg:w-[320px] lg:h-[320px] xl:w-[400px] xl:h-[400px] 2xl:w-[480px] 2xl:h-[480px] rounded-full object-cover transition-transform duration-900 ease-in-out hover:scale-105 z-10'
                            src={`${portfolioData?.avatar?.url}`}
                            alt="Proflie image"
                        /> */}

                        <img
  loading="lazy"
  className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[300px] md:h-[300px] lg:w-[320px] lg:h-[320px] xl:w-[400px] xl:h-[400px] 2xl:w-[480px] 2xl:h-[480px] rounded-full object-cover transition-transform duration-900 ease-in-out hover:scale-105 z-10"
  src={`${portfolioData?.avatar?.url}?w=480&auto=compress&format=webp`}
  srcSet={`
    ${portfolioData?.avatar?.url}?w=250&auto=compress&format=webp 250w,
    ${portfolioData?.avatar?.url}?w=300&auto=compress&format=webp 300w,
    ${portfolioData?.avatar?.url}?w=320&auto=compress&format=webp 320w,
    ${portfolioData?.avatar?.url}?w=400&auto=compress&format=webp 400w,
    ${portfolioData?.avatar?.url}?w=480&auto=compress&format=webp 480w
  `}
  sizes="(max-width: 640px) 250px,
         (max-width: 768px) 300px,
         (max-width: 1024px) 320px,
         (max-width: 1280px) 400px,
         480px"
  alt="Profile image"
/>

                    </motion.div>

                    {/* <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            type: "tween", // Better than spring for smoother image transitions
                            duration: 0.5,
                            ease: "easeOut",
                        }}
                        className="flex justify-center relative"
                    >
                        <img
                            loading="lazy"
                            width="500"
                            height="500"
                            className="
      w-[200px]
      sm:w-[300px] sm:h-[300px]
      md:w-[340px] md:h-[340px]
      lg:w-[360px] lg:h-[360px]
      xl:w-[400px] xl:h-[400px]
      2xl:w-[540px] 2xl:h-[540px]
      rounded-full object-cover
      transition-transform duration-500 ease-in-out hover:scale-105
      z-10
    "
                            src={`${BASE_URL}${portfolioData?.avatar?.url}?w=480`}
                            srcSet={`
      ${BASE_URL}${portfolioData?.avatar?.url}?w=200 200w,
      ${BASE_URL}${portfolioData?.avatar?.url}?w=300 300w,
      ${BASE_URL}${portfolioData?.avatar?.url}?w=340 340w,
      ${BASE_URL}${portfolioData?.avatar?.url}?w=360 360w,
      ${BASE_URL}${portfolioData?.avatar?.url}?w=400 400w,
      ${BASE_URL}${portfolioData?.avatar?.url}?w=480 480w
    `}
                            sizes="
      (max-width: 640px) 200px,
      (max-width: 768px) 300px,
      (max-width: 1024px) 340px,
      (max-width: 1280px) 360px,
      (max-width: 1536px) 400px,
      480px
    "
                            alt="Profile image"
                        />
                    </motion.div> */}

                </div>

            </section>
        </>
    )
}

export default Profile;