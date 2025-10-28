import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/dataContext';
import { motion } from 'framer-motion';
import { useFadeInAnimation } from '../hooks/useAnimation';
import { Copy, Check } from "lucide-react";
import handshake from '../assets/images/logo/handshake-logo.png';
import Stats from '../components/Stats';
import Features from '../components/Features';
import TechnicalSkill from '../components/TechnicalSkill';
import Recommendation from '../components/Recommendation';

const AboutPage = () => {
  const { portfolioData } = useContext(DataContext);
  const [animate, setAnimate] = useState(false);
  const { ref, controls } = useFadeInAnimation(!!portfolioData);
  const [copied, setCopied] = useState(false);


  const email = portfolioData.contactEmail;

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


  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    // <motion.div ref={ref}
    //   animate={controls}
    //   initial={{ opacity: 0, y: 50 }}
    //   whileInView={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }} className='px-4 sm:px-2'>

    //   <motion.p
    //     ref={ref}
    //     animate={controls}
    //     initial={{ opacity: 0, y: -50 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.7, ease: "easeOut", delay: 0.4, type: "spring", damping: 10 }}
    //     className={`font-bold text-4xl sm:text-5xl text-center mt-[60px] sm:mt-[84px]`}>About Me</motion.p>

    //   <motion.p
    //     ref={ref}
    //     animate={controls}
    //     initial={{ opacity: 0, y: 50 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.6, ease: "easeIn", delay: 0.5 }}
    //     className={`text-base sm:text-lg dark:text-gray-300 text-center mt-[10px]`}>Get to know more about my background and skills</motion.p>

    //   <div className='flex flex-col md:flex-row gap-12 mt-[50px] mx-4 md:mx-[40px] lg:mx-[60px] xl:mx-[100px] 2xl:mx-[200px] mb-[90px]'>

    //     <div className='w-full lg:w-1/2'>
    //       <p className='text-xl sm:text-2xl font-bold'>Who I Am</p>
    //       {portfolioData?.longBio?.split('\n').map((para, index) => (
    //         <p
    //           key={index}
    //           className='mt-[10px] dark:text-white  text-sm sm:text-base'
    //         >
    //           {para}
    //         </p>


    //       ))}
    //       <p className='text-xl sm:text-2xl font-bold mt-[30px]'>Education</p>
    //       <motion.div
    //       >
    //         {
    //           portfolioData?.education?.map((item, i) => (
    //             <motion.div
    //               initial={{ opacity: 0, x: -100 }}
    //               animate={{ opacity: 1, x: 0 }}
    //               viewport={{ amount: 0.9 }}
    //               transition={{
    //                 type: "spring",
    //                 stiffness: 100,
    //                 damping: 10,
    //                 delay: 0.8
    //               }} key={i}
    //               className='px-4 py-8 shadow-[1px_1px_10px_rgba(0,0,0,0.1)] dark:border-gray-800 dark:border mt-[20px] rounded-lg'>
    //               <p className='font-bold text-lg'>{item?.degree}</p>
    //               <p className='dark:text-white font-bold'>{item?.university}</p>

    //               <div className='flex flex-col sm:flex-row sm:justify-between mt-[35px] dark:text-white text-sm gap-2'>
    //                 <p>January 2025 - May 2027</p>
    //                 <p>{item?.location?.city}, {item?.location?.state}, {item?.location?.country}</p>
    //               </div>
    //             </motion.div>
    //           ))
    //         }
    //       </motion.div>

    //     </div>

    //     <div className='w-full lg:w-1/2'>
    //       <p className='font-bold text-xl sm:text-2xl mb-4'>Skills</p>

    //       {portfolioData?.skills?.map((skillCategory, index) => {
    //         const matchingBreakdown = portfolioData?.skillBreakdown.find(
    //           breakdown => breakdown?.slug === skillCategory?.slug
    //         );

    //         return (
    //           <div key={index} className='mt-6'>
    //             <p className='font-bold text-base sm:text-lg'>{skillCategory?.title}</p>

    //             <div className='flex gap-3 mt-[10px] flex-wrap'>
    //               {matchingBreakdown?.tech.map((techItem, techIndex) => (
    //                 <p
    //                   key={`${index}-${techIndex}`}
    //                   className='bg-slate-200 text-sm rounded-md px-2 py-1 dark:bg-gray-700'
    //                 >
    //                   {techItem?.title}
    //                 </p>
    //               ))}
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>

    //   </div>
    // </motion.div>


    <>
      <div className='flex gap-[170px] flex-row-reverse justify-center mx-[70px] mt-20 mb-20'>
        <div className='w-1/2 min-h-[75vh]'>
          <motion.p animate={controls}
            ref={ref}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3, type: "spring", damping: 10 }} className='text-xl sm:text-lg text-success'>More About Me</motion.p>
          {/* <p className='mt-3 text-5xl font-bold mb-4'>I'm Manjinder, a </p> */}
          {/* <i className='text-5xl font-bold animated-gradient-text'>Full Stack developer</i> */}

          <motion.p animate={controls}
            ref={ref}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2, type: "spring", damping: 10 }} className='text-6xl font-bold mt-[20px]'>Meet Manjinder</motion.p>
          {/* <motion.div animate={controls}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }} className='rounded-xl mt-[20px] shadow-xl'>
            {portfolioData?.longBio?.split('\n').map((para, index) => (
              <p
                key={index}
                className='pt-4 dark:text-white text-lg sm:text-base '
              >
                {para}
              </p>
            ))}
          </motion.div> */}


          <motion.div
            animate={controls}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
            className="space-y-2 mt-8">
            {portfolioData?.longBio?.map((block, index) => {
              const isBold = block.children?.some(child => child.bold);

              if (isBold) {
                return (
                  <div key={index}>
                    <div className="flex items-start gap-2 text-[#A750E6] text-lg font-semibold mt-4">
                      <span className="text-xl">➤</span>
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
                    className="dark:text-white mt-1 text-base leading-relaxed"
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
            transition={{
              duration: 0.9
              , ease: "easeOut", delay: 0.1
            }}
            viewport={{ amount: 0.2, once: true }}
            className="relative mt-8 text-center px-6 py-6 text-xl sm:text-2xl font-semibold italic dark:text-white/90 rounded-xl bg-gradient-to-r from-purple-900/30 via-indigo-900/20 to-blue-900/30 dark:from-purple-900/30 dark:via-slate-900/30 dark:to-indigo-900/30 backdrop-blur-md shadow-lg ring-1 ring-violet-600/40 hover:shadow-violet-500/20 transition-all">
            <span className="block text-sm uppercase tracking-wider dark:text-violet-400 mb-2">Quote</span>
            <em className="font-serif">"Code is the language I use to bring ideas to life."</em>

            <span className="absolute -top-3 left-6 text-5xl dark:text-violet-500 dark:opacity-30  opacity-80">“</span>
            <span className="absolute -bottom-9 right-6 text-5xl dark:text-violet-500 dark:opacity-30 opacity-80">”</span>
          </motion.blockquote>
        </div>


        <div className='relative w-96 h-96 rounded-full mt-[140px] flex items-center justify-center bg-white/7 backdrop-blur-2xl'>
          <div loading='lazy' className='w-80 h-80 rounded-full flex items-center justify-center bg-white/1 backdrop-blur-2xl ring-2 ring-violet-600/40 shadow-xl'>
            <img loading='lazy' className='w-full h-full rounded-full object-cover object-center' src="https://imgs.search.brave.com/G4ap423FAiNCDzGKbUf1Tv2wdgN4arNbUIbDHSACfRg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzEzLzM1Lzgy/LzM2MF9GXzcxMzM1/ODI1NF9wTTEyaGF5/RnZHa01iWHdVMXdF/UmF3d0MyVHUzTWZw/eS5qcGc" alt="" />
            <div className="absolute inset-0 spin-slow ">
              <div className="absolute left-1/2 -top-[13%] transform -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="w-20 h-20 bg-[#6c14aa] shadow-[0_0_10px_#60A5FA] rounded-full flex items-center justify-center">
                  <span className="text-white font-extrabold text-sm">UI / UX</span>
                </motion.div>
              </div>

              <div className="absolute -left-[1%] top-[89%] transform -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="w-20 h-20 bg-[#6c14aa] shadow-[0_0_10px_#60A5FA] rounded-full flex items-center justify-center">
                  <span className="text-white font-extrabold text-sm ">UI / UX</span>
                </motion.div>
              </div>

              <div className="absolute left-[100.6%] top-[89%] transform -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="w-20 h-20 bg-[#6c14aa] shadow-[0_0_10px_#60A5FA] rounded-full flex items-center justify-center">
                  <span className="text-white font-extrabold text-sm">UI / UX</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>


      </div>

      <Stats />
      <Features />
      <TechnicalSkill />
      <Recommendation />

      <div className='dark:bg-white/10 w-1/2 px-10 py-12 rounded-xl bg-gray-300/10 backdrop-blur-xl shadow-xl mx-auto '>
        <img loading='lazy' className='mx-auto w-20' src={handshake} alt="" />
        <p className='dark:text-white text-2xl font-bold text-center mt-[16px]'>Let's work together on your next project</p>
        <p className="wave-text dark:text-white text-lg text-center transition-colors mt-[20px]">
          Available for freelance, remote, or contract work. Let’s discuss how I can contribute to your next big idea. Drop me an email and I’ll get back to you shortly!
        </p>

        <button aria-label='Copy the Email' onMouseDown={(e) => e.stopPropagation()} onClick={handleCopy}
          className='py-1 w-fit px-3 mx-auto flex gap-2 items-center justify-center mt-[25px] rounded-md bg-white/10 backdrop-blur-xl inner-shadow cursor-pointer'>
          <Copy size={20} />
          <p className='text-md font-semibold glow-text'> {copied ? "Copied to clipboard" : email}</p>
        </button>


      </div>

      {copied && <div className='flex gap-3 items-center z-50 dark:bg-white/10 backdrop-blur-xl bg-gray-300/10 rounded-lg px-5 py-3 absolute right-4 bottom-2'>
        <div className='bg-white rounded-full text-black p-1'>
          <Check size={13} />
        </div>

        <div className='text-sm'>
          <p>Copied to Clipboard! </p>
          <p className='mt-1'>Email address copied successfully.</p>
        </div>

        <button aria-label="Redirect To Email" onClick={() => window.open(`mailto:${email}`)} className='px-2 py-2 dark:bg-white dark:text-black bg-black text-white rounded-md text-sm cursor-pointer'>Send Email</button>
      </div>}
    </>

  )
}

export default AboutPage


// animate={{ y: [0, -5, 0] }}