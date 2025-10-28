import React, { useCallback, useRef, useState } from 'react'
import {Github,ExternalLink} from 'lucide-react';

import { useNavigate, useParams } from 'react-router';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useFadeInAnimation } from '../hooks/useAnimation';


const BASE_URL = import.meta.env.VITE_BASE_URL;

const getAnimationProps = (type, index) => {
  let initialX = 0, initialY = 40;

  if (type === "left") initialX = -100;
  else if (type === "right") initialX = 100;
  else initialY = 100;

  return {
    initial: { opacity: 0, x: initialX, y: initialY },
    whileInView: { opacity: 1, x: 0, y: 0 },
    transition: {
      duration: 0.1,
      delay: index * 0.05,
      ease: "easeOut",
    },
    viewport: {
      once: true,
      amount: 0.1
    }

  };
};



// const ProjectCard = ({ project, animationType, index }) => {
//   const animation = getAnimationProps(animationType, index);
//   const { employeeName } = useParams();
//   const navigate = useNavigate();
//   const [showAllTech, setShowAllTech] = useState(false);
//   const visibleTech = showAllTech ? project?.techStack : project?.techStack?.slice(0, 4);


//   const handleProjectDetails = (projectID) => {
//     navigate(`/${employeeName || "manjinder"}/projects/${projectID}`);
//   }

//   const cardRef = useRef(null);
//   const mouseX = useMotionValue(0.5);
//   const mouseY = useMotionValue(0.5);

//   const rotateX = useTransform(mouseY, [0, 1], [10, -10]);
//   const rotateY = useTransform(mouseX, [0, 1], [-10, 10]);

//   const handleMouseMove = (e) => {
//     const rect = cardRef.current.getBoundingClientRect();
//     const x = (e.clientX - rect.left) / rect.width;
//     const y = (e.clientY - rect.top) / rect.height;
//     mouseX.set(x);
//     mouseY.set(y);
//   };

//   const handleMouseLeave = () => {
//     mouseX.set(0.5);
//     mouseY.set(0.5);
//   };
//   return (
//     <motion.div
//       {...animation}
//       ref={cardRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         rotateX,
//         rotateY,
//         transformPerspective: 1000,
//       }}
//       className='rounded-lg pb-6 hover:border-2 hover:border-black shadow-[1px_1px_10px_rgba(0,0,0,0.3)] border-2 border-transparent dark:border-2 dark:border-gray-600 dark:hover:border-white dark:bg-gray-800 flex flex-col h-full overflow-hidden transition-all duration-300 ease-out will-change-transform '>
//       <img className='h-[255px] w-full object-cover transition-transform duration-300 ease-in-out ' src={`${BASE_URL}${project?.image?.url}`} alt="" />
//       <div className='text-[18px] px-6 pt-2'>
//         <p className=' font-bold'>{project?.name}</p>
//         <p className='text-gray-500 text-[16px] dark:text-white'>{project?.description}</p>

//         <div className='flex flex-wrap gap-3 mt-[13px] mb-[15px] cursor-pointer '>
//           {
//             visibleTech?.map((item, index) => (
//               <p key={index} className='px-1 border border-gray-500 rounded-md bg-gray-100 dark:bg-gray-600 text-sm '>
//                 {item?.title}
//               </p>
//             ))
//           }

//           {project?.techStack?.length > 4 && (
//             <p
//               className='px-2 border border-gray-500 rounded-md bg-gray-100 dark:bg-gray-600 text-sm select-none cursor-pointer'
//               onClick={() => setShowAllTech(!showAllTech)}
//             >
//               {showAllTech ? 'Show Less' : `+${project?.techStack?.length - 4}`}
//             </p>
//           )}
//         </div>

//         {
//           project?.details?.map((item, index) => (
//             <div key={index} className="flex items-start gap-2 mt-2">
//               <span className="mt-[6px] text-gray-600">
//                 <RiArrowRightLine size={10} className='dark:text-white' />
//               </span>
//               <p className="text-[16px] text-gray-600 leading-relaxed dark:text-white">
//                 {item?.detail}
//               </p>
//             </div>
//           ))
//         }
//       </div>

//       <div className='flex items-center justify-between mt-auto pt-6 px-6'>
//         <Button onClick={() => handleProjectDetails(project?.id)} size="sm" variant="primary">View Details <RiArrowRightLine size={18} /></Button>
//         <div className='flex gap-6'>
//           {project?.repoLink && <FiGithub size={15} onClick={() => window.open(project?.repoLink, '_blank')} className=' cursor-pointer' />}
//           {project?.liveLink && <RiExternalLinkLine onClick={() => window.open(project?.liveLink, '_blank')} className='cursor-pointer' size={16} />}
//         </div>
//       </div>
//     </motion.div>


//   )
// }

const ProjectCard = ({ project, animationType, index }) => {
  // const animation = getAnimationProps(animationType, index);
  const { employeeName } = useParams();
  const navigate = useNavigate();
  const [showAllTech, setShowAllTech] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const visibleTech = showAllTech ? project?.techStack : project?.techStack?.slice(0, 4);
  const { ref: fadeInRef, controls } = useFadeInAnimation(!!project);


  const handleProjectDetails = (projectID) => {
    navigate(`/${employeeName || "manjinder"}/projects/${projectID}`);
  }

  const cardRef = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useTransform(mouseY, [0, 1], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 1], [-10, 10]);

  const setCombinedRef = useCallback(
    (node) => {
      if (typeof fadeInRef === 'function') {
        fadeInRef(node);
      }
      cardRef.current = node;
    },
    [fadeInRef]
  );

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };



  return (
    <motion.div
      // ref={ref}
      // animate={controls}
      // {...animation}
      // ref={setCombinedRef}
      // onMouseMove={handleMouseMove}
      // onMouseLeave={() => {
      //   mouseX.set(0.5);
      //   mouseY.set(0.5);
      // }}
      // transition={{
      //   duration: 2,
      //   once: true,
      // }}
      // style={{
      //   rotateX,
      //   rotateY,
      //   transformPerspective: 2000,
      // }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
      viewport={{ once: true, amount: 0.2 }}
      // onClick={() => handleProjectDetails(project?.id)}
      className='rounded-lg pb-4 hover:border-2 hover:border-black shadow-[1px_1px_10px_rgba(0,0,0,0.3)] border-2 border-transparent dark:border-2  dark:shadow-[1px_1px_10px_rgba(151,48,202,0.5)] dark:hover:border-white flex flex-col h-full overflow-hidden transition-all duration-300 ease-out will-change-transform cursor-pointer'
    >
      {/* Image */}
      <div
        className="relative"
        onMouseEnter={() => setShowIcons(true)}
        onMouseLeave={() => setShowIcons(false)}
      >
        <img
          loading='lazy'
          className='h-[255px] w-full object-cover transition-all duration-300 ease-in-out'
          src={`${BASE_URL}${project?.image?.url}`}
          alt=""
        />

        {/* Icons - Only show on image hover */}
        {showIcons && (
          <motion.div initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 10,
              delay: 0.2,
              once: true,
            }} className='icon-container flex gap-4 absolute top-4 right-4 z-10'>
            {project?.repoLink && (
              <div

                className="p-2 bg-black/80 rounded-full hover:bg-black/30 transition-all duration-200 text-black"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project?.repoLink, '_blank');
                }}
              >
                <Github
                  size={17}
                  className='cursor-pointer text-white'
                />
              </div>
            )}
            {project?.liveLink && (
              <div
                className="p-2 bg-black/80 rounded-full hover:bg-black/30 transition-all duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project?.liveLink, '_blank');
                }}
              >
                <ExternalLink
                  className='cursor-pointer text-white'
                  size={17}
                />
              </div>
            )}
          </motion.div>
        )}
      </div>

      <div className='text-[18px] px-6 pt-2'>
        <p className='font-bold'>{project?.title}</p>
        <p className='text-gray-500 text-[16px] dark:text-white'>{project?.description}</p>

        <div className='flex flex-wrap gap-3 mt-[13px] mb-[15px] cursor-pointer'>
          {visibleTech?.map((item, index) => (
            <p key={index} className='px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium'>
              {item?.title}

            </p>
          ))}
          {project?.techStack?.length > 4 && (
            <p
              className='px-2 bg-blue-50 text-blue-700 text-sm select-none cursor-pointer py-0.5 rounded-full'
              onClick={() => setShowAllTech(!showAllTech)}
            >
              {showAllTech ? 'Show Less' : `+${project?.techStack?.length - 4}`}
            </p>
          )}
        </div>

      </div>
    </motion.div>
  );
};


export default ProjectCard




{/* <meta name="google-site-verification" content="jyeUd3rIPSp2aZ4vftuVfa_GqAnTIJBvoAFHlT1Llkc" /> */}