import React, { useEffect, useState } from 'react';

const CounterCard = ({ end, label, icon: Icon }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const incrementTime = 50;

    const interval = setInterval(() => {
      start += 1;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(interval);
  }, [end]);

  return (

    //   <div
    //     className='w-full max-w-[280px] py-10 px-4 shadow-sm bg-black/20 backdrop-blur-sm
    //     shadow-[#a428fd] rounded-2xl text-center transform transition duration-300 ease-in-out
    // hover:scale-110 hover:shadow-lg hover:shadow-[#a428fd] 
    // hover:-translate-y-2 dark:shadow-[0_0_10px_#A750E6] cursor-pointer'
    //   >
    //     {Icon && (
    //       <Icon className='mx-auto mb-4 w-12 h-12 text-gray-200' />
    //     )}
    //     <p className='text-4xl sm:text-5xl font-bold text-white'>{count}+</p>
    //     <p className='mt-2 text-base sm:text-lg font-semibold text-white'>{label}</p>
    //   </div>

      <div
        className="w-full h-[220px] sm:h-[240px] py-8 px-4 
    rounded-2xl text-center transform transition duration-300 ease-in-out
    hover:scale-110 hover:shadow-lg hover:shadow-[#a428fd] 
    hover:-translate-y-2 shadow-[0_0_10px_#A750E6] cursor-pointer flex flex-col justify-center bg-black/20 backdrop-blur-md"
      >
        {Icon && <Icon className="mx-auto mb-4 w-12 h-12 text-gray-200" />}
        <p className="text-4xl sm:text-5xl font-bold text-white">{count}+</p>
        <p className="mt-2 text-base sm:text-lg font-semibold text-white">{label}</p>
      </div>

  );
};

export default CounterCard;
// bg-gradient-to-r from-[#9703ec]/20 via-[#4a2568]/10 to-[#A750E6]/10
