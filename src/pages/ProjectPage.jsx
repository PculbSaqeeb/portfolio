import React, { useContext, useState } from 'react'
import ProjectCard from '../components/ProjectCard';
import { DataContext } from '../context/dataContext';
import { motion } from 'framer-motion';
// import { useTheme } from '../context/themeContext';
import { useFadeInAnimation } from '../hooks/useAnimation';
import ProjectCarousel from '../components/ProjectCarosule';
import Toggle from '../components/Toggle';
const ProjectPage = () => {
  const { portfolioData } = useContext(DataContext);
  const { ref, controls } = useFadeInAnimation(!!portfolioData);
  const [showWebOnly, setShowWebOnly] = useState(false);

  const [selectedSkill, setSelectedSkill] = useState("all");
  // const { darkMode } = useTheme();


  const handleSkillSelection = (i) => {
    setSelectedSkill(i);
  }

  const filteredProjects = selectedSkill === 'all'
    ? portfolioData?.projects
    : portfolioData?.projects?.filter(project =>
      project?.techStack?.some(techItem => techItem?.title?.toLowerCase() === selectedSkill?.toLowerCase())
    );

  return (
    <>


      <div className='mx-4 sm:mx-8 md:mx-10 lg:mx-10 xl:mx-18 2xl:mx-52 mt-20 min-h-screen'>

        <div className="text-center mb-6 animate-slide-up">
          <motion.p animate={controls}
            ref={ref}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2, type: "spring", damping: 10 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold dark:text-white mb-4 tracking-tight">
            Turning Ideas into Interfaces
          </motion.p>

          <motion.p animate={controls}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }} className="dark:text-white/80 text-black text-lg max-w-5xl mx-auto">
            Here’s a glimpse into what I’ve been building. Each project you’ll find below is crafted with attention to detail, thoughtful design, and a strong foundation in functionality. From solving real-world problems to exploring new technologies, these projects showcase my journey as a developer.
          </motion.p>
        </div>


        {/* <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full backdrop-blur-md shadow-sm border border-white/10 w-fit">
        <label className="flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-300 peer-checked:bg-purple-600 rounded-full relative transition-all">
            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-5" />
          </div>
          <span className="ml-3 text-white font-medium text-sm">View Web Projects Only</span>
        </label>
      </div>
 */}

        <Toggle
          checked={showWebOnly}
          onChange={setShowWebOnly}
          label="View Web Project"
          id="web-toggle"
        />

        {/* <motion.p
      ref={ref}
        animate={controls}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2, type: "spring", damping: 10 }}
        className='font-bold text-3xl sm:text-4xl md:text-5xl text-center'>My Projects</motion.p> */}

        {/* <motion.p
      ref={ref}
        animate={controls}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
        className='mt-2 sm:mt-3 text-base sm:text-lg text-center dark:text-gray-300'>
        A showcase of my work across various technologies
      </motion.p> */}

        {/* <div className='flex flex-wrap gap-2 sm:gap-3 justify-center mt-6 sm:mt-10'>
        <p
          onClick={() => handleSkillSelection('all')}
          className={`
      px-3 py-1 rounded-md cursor-pointer 
      text-sm sm:text-base transition-all duration-200 whitespace-nowrap
      ${selectedSkill === 'all'
              ? 'bg-black text-white dark:bg-white dark:text-black'
              : `bg-white text-black dark:bg-gray-800 dark:text-white`}
    `}
        >
          All
        </p>

        {
          portfolioData?.skillBreakdown?.map((section) =>
            section?.tech?.map((item) => (
              <p
                key={item?.title}
                onClick={() => handleSkillSelection(item?.title)}
                className={`
            px-2 py-1 rounded-md cursor-pointer 
            text-sm sm:text-base transition-all duration-200
            ${selectedSkill === item.title
                    ? 'bg-black text-white dark:bg-white dark:text-black ' 
                    : `bg-white text-black dark:bg-gray-800 dark:text-white `}
          `}
              >
                {item?.title}
              </p>
            ))
          )
        }
      </div> */}


        {/* <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 mt-10 sm:mt-14 mb-16 sm:mb-24'>
        {filteredProjects && filteredProjects?.length > 0 ? (
          filteredProjects?.map((project, index) => {
            let animationType = "center";

            if ((index % 3) === 0) animationType = "left";
            else if ((index % 3) === 2) animationType = "right";
            return (
              <ProjectCard
                key={index}
                project={project}
                animationType={animationType}
                index={index}
              />
            );
          })
        ) : (
          <p className='text-center col-span-full text-gray-500'>
            No projects found for the selected technology.
          </p>
        )}
      </div> */}

        <ProjectCarousel showWebOnly={showWebOnly} />


        {/* <div className="space-y-4">
        {portfolioData?.test?.map((block, index) => {
          const isBoldBlock = block.children?.some(child => child.bold);

          // Optional: render as bullet point if it's a bolded headline
          if (isBoldBlock) {
            return (
              <div key={index} className="pl-4 border-l-4 border-purple-400 bg-purple-50 py-2 rounded-md w-fit">
                <p className="font-semibold text-purple-700 flex items-center gap-2 ">
                  {block.children.map((child, i) => (
                    <span key={i}>
                      {child.text}
                    </span>
                  ))}
                </p>
              </div>
            );
          }

          // Normal paragraph
          return (
            <p key={index} className="text-gray-700 leading-relaxed">
              {block.children.map((child, i) => {
                if (child.bold) {
                  return <strong key={i}>{child.text}</strong>;
                }
                return <span key={i}>{child.text}</span>;
              })}
            </p>
          );
        })}
      </div> */}


        {/* <div className="space-y-4">
        {portfolioData?.test?.map((block, index) => {
          const isBold = block.children?.some(child => child.bold);

          if (isBold) {
            return (
              <div key={index} className="mt-6">
                <div className="flex items-start gap-2 text-purple-700 text-lg font-semibold pl-8">
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
                className="text-gray-600 pl-9 mt-1 text-base leading-relaxed"
              >
                {block.children.map((child, i) => (
                  <span key={i}>{child.text}</span>
                ))}
              </p>
            );
          }
        })}
      </div> */}



      </div>
    </>


  )
}

export default ProjectPage
