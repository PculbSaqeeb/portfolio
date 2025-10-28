import React, { useContext, useRef } from 'react'
import { DataContext } from '../context/dataContext';
import { Calendar, Trophy, Laptop, Users } from 'lucide-react'
import CounterCard from './CounterCard';
import { motion, useInView } from 'framer-motion';

const Stats = () => {
  const { portfolioData } = useContext(DataContext);

  const icons = [
    Calendar,
    Trophy,
    Laptop,
    Users
  ];

  return (
    // <div className='min-h-[40vh]'>
    //   <div className='flex gap-10 flex-wrap justify-center'>
    //     {portfolioData?.stats?.map((stat, index) => {
    //       const ref = useRef(null);
    //       const isInView = useInView(ref, { once: false, amount: 0.2 });

    //       return (
    //         <motion.div
    //           key={index}
    //           ref={ref}
    //           initial={{ opacity: 0, y: 50 }}
    //           animate={isInView ? { opacity: 1, y: 0 } : {}}
    //           transition={{
    //             duration: 0.6,
    //             delay: index * 0.2,
    //             ease: "easeOut",
    //             amount: 0.3,
    //           }}
    //           viewport={{ once: true }}
    //         >
    //           <CounterCard
    //             end={stat?.experience}
    //             label={stat?.label}
    //             icon={icons[index]}
    //           />
    //         </motion.div>
    //       );
    //     })}
    //   </div>
    // </div>

    <div className='min-h-[40vh] px-4 xl:mx-[200px]'>
      <div className='flex justify-center flex-wrap gap-14 '>
        {portfolioData?.stats?.map((stat, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: false, amount: 0.2 });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
                amount: 0.3,
              }}
              viewport={{ once: true }}
              className="w-full flex-shrink-0  max-w-[280px]"
            >
              <CounterCard
                end={stat?.experience}
                label={stat?.label}
                icon={icons[index]}
              />
            </motion.div>
          );
        })}
      </div>
    </div>

  );
}

export default Stats;
