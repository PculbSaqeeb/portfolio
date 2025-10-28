// import React, { useContext } from 'react';
// import { DataContext } from '../context/dataContext';

// const TechStackMarquee = () => {
//     const { portfolioData } = useContext(DataContext);

//     console.log(portfolioData.skillBreakdown)
//     // const techStacks = {
//     //     languages: [
//     //         { name: 'HTML', color: 'bg-orange-500/20 border-orange-500 text-orange-300' },
//     //         { name: 'CSS', color: 'bg-blue-500/20 border-blue-500 text-blue-300' },
//     //         { name: 'JavaScript', color: 'bg-yellow-500/20 border-yellow-500 text-yellow-300' },
//     //         { name: 'TypeScript', color: 'bg-blue-600/20 border-blue-600 text-blue-400' },
//     //         { name: 'SQL', color: 'bg-purple-500/20 border-purple-500 text-purple-300' },
//     //         { name: 'React.js', color: 'bg-cyan-500/20 border-cyan-500 text-cyan-300' },
//     //         { name: 'Tailwind CSS', color: 'bg-teal-500/20 border-teal-500 text-teal-300' },
//     //         { name: 'Bootstrap', color: 'bg-purple-600/20 border-purple-600 text-purple-400' },
//     //         { name: 'Material UI', color: 'bg-blue-700/20 border-blue-700 text-blue-400' },
//     //         { name: 'Tamagui', color: 'bg-green-500/20 border-green-500 text-green-300' },
//     //         { name: 'React Native', color: 'bg-cyan-600/20 border-cyan-600 text-cyan-400' },
//     //         { name: 'Native Base', color: 'bg-indigo-500/20 border-indigo-500 text-indigo-300' },
//     //         { name: 'Native Paper', color: 'bg-pink-500/20 border-pink-500 text-pink-300' },
//     //         { name: 'Node.js', color: 'bg-green-600/20 border-green-600 text-green-400' },
//     //         { name: 'Nest.js', color: 'bg-red-500/20 border-red-500 text-red-300' },
//     //         { name: 'GraphQL', color: 'bg-pink-600/20 border-pink-600 text-pink-400' },
//     //         { name: 'Rest API', color: 'bg-orange-600/20 border-orange-600 text-orange-400' },
//     //         { name: 'Prisma ORM', color: 'bg-violet-500/20 border-violet-500 text-violet-300' },
//     //         { name: 'Next.js', color: 'bg-gray-500/20 border-gray-500 text-gray-300' },
//     //         { name: 'Django', color: 'bg-green-700/20 border-green-700 text-green-400' },
//     //         { name: 'Express.js', color: 'bg-gray-600/20 border-gray-600 text-gray-400' },
//     //         { name: 'Zustand', color: 'bg-amber-500/20 border-amber-500 text-amber-300' }
//     //     ],
//     //     databases: [
//     //         { name: 'PostgreSQL', color: 'bg-blue-800/20 border-blue-800 text-blue-400' },
//     //         { name: 'MongoDB', color: 'bg-green-800/20 border-green-800 text-green-400' },
//     //         { name: 'MySQL', color: 'bg-orange-700/20 border-orange-700 text-orange-400' },
//     //         { name: 'Supabase', color: 'bg-emerald-500/20 border-emerald-500 text-emerald-300' },
//     //         { name: 'SQLite', color: 'bg-sky-500/20 border-sky-500 text-sky-300' },
//     //         { name: 'Realm', color: 'bg-purple-700/20 border-purple-700 text-purple-400' },
//     //         { name: 'WatermelonDB', color: 'bg-green-400/20 border-green-400 text-green-300' },
//     //         { name: 'AsyncStorage', color: 'bg-slate-500/20 border-slate-500 text-slate-300' },
//     //         { name: 'AWS', color: 'bg-yellow-800/20 border-yellow-800 text-yellow-400' },
//     //         { name: 'Firebase', color: 'bg-orange-500/20 border-orange-500 text-orange-300' },
//     //         { name: 'Heroku', color: 'bg-purple-800/20 border-purple-800 text-purple-400' },
//     //         { name: 'Vercel', color: 'bg-gray-700/20 border-gray-700 text-gray-400' },
//     //         { name: 'Netlify', color: 'bg-teal-700/20 border-teal-700 text-teal-400' },
//     //         { name: 'Render', color: 'bg-lime-500/20 border-lime-500 text-lime-300' },
//     //         { name: 'CI/CD', color: 'bg-red-600/20 border-red-600 text-red-400' },
//     //         { name: 'VPS', color: 'bg-blue-900/20 border-blue-900 text-blue-400' }
//     //     ],
//     //     payment: [
//     //         { name: 'Stripe', color: 'bg-indigo-700/20 border-indigo-700 text-indigo-400' },
//     //         { name: 'Razorpay', color: 'bg-blue-600/20 border-blue-600 text-blue-400' },
//     //         { name: 'PayPal', color: 'bg-blue-500/20 border-blue-500 text-blue-300' },
//     //         { name: 'Apple Pay', color: 'bg-gray-800/20 border-gray-800 text-gray-400' },
//     //         { name: 'Google Pay', color: 'bg-green-600/20 border-green-600 text-green-400' },
//     //         { name: 'Git', color: 'bg-red-700/20 border-red-700 text-red-400' },
//     //         { name: 'GitHub', color: 'bg-gray-900/20 border-gray-900 text-gray-300' },
//     //         { name: 'Motion', color: 'bg-purple-500/20 border-purple-500 text-purple-300' },
//     //         { name: 'Sanity', color: 'bg-red-500/20 border-red-500 text-red-300' },
//     //         { name: 'Conf', color: 'bg-emerald-600/20 border-emerald-600 text-emerald-400' }
//     //     ]
//     // };

//     const TechChip = ({ tech }) => (
//         <span className={`inline-flex items-center text-sm px-3 py-[2px] mx-2 rounded-md border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap bg-black/50`}>
//             {tech}
//         </span>
//     );

//     const MarqueeRow = ({ items, direction = 'left', speed = 50 }) => {
//         // Duplicate items to create seamless loop
//         // const duplicatedItems = [...items, ...items, ...items];

//         return (
//             <div className="overflow-hidden py-4">
//                 <div
//                     className={`flex ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
//                     style={{
//                         animationDuration: `${speed}s`,
//                         width: 'fit-content'
//                     }}
//                 >

//                     {portfolioData?.skills?.map((skillCategory, index) => {
//                         const matchingBreakdown = portfolioData?.skillBreakdown.find(
//                             breakdown => breakdown?.slug === skillCategory?.slug
//                         );

//                         return (
//                             <div key={index} className='mt-6'>
//                                 <div className=''>
//                                     {matchingBreakdown?.tech.map((tech, index) => (
//                                         <TechChip key={`${tech.title}-${index}`} tech={tech.title} />
//                                     ))}
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className=" overflow-hidden">
//             {/* Add custom CSS animations */}
//             <style>{`
//         @keyframes marquee-left {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-33.333%);
//           }
//         }

//         @keyframes marquee-right {
//           0% {
//             transform: translateX(-33.333%);
//           }
//           100% {
//             transform: translateX(0%);
//           }
//         }

//         .animate-marquee-left {
//           animation: marquee-left linear infinite;
//         }

//         .animate-marquee-right {
//           animation: marquee-right linear infinite;
//         }
//       `}</style>



//             <div className="py-8 space-y-6 w-[600px]">
//                 {/* Languages Row - Left to Right */}
//                 <MarqueeRow items={portfolioData.skillBreakdown} direction="right" speed={50} />

//                 {/* Frameworks Row - Right to Left */}
//                 {/* <MarqueeRow items={techStacks.frameworks} direction="left" speed={50} /> */}

//                 {/* Database Row - Left to Right */}
//                 <MarqueeRow items={portfolioData.skillBreakdown} direction="right" speed={50} />

//                 {/* AI/ML Row - Right to Left */}
//                 {/* <MarqueeRow items={techStacks.aiml} direction="left" speed={50} /> */}

//                 {/* Cloud & DevOps Row - Left to Right */}
//                 {/* <MarqueeRow items={techStacks.cloud} direction="right" speed={50} /> */}

//                 {/* Payment & Tools Row - Right to Left */}
//                 <MarqueeRow items={portfolioData.skillBreakdown} direction="left" speed={50} />
//             </div>


//         </div>
//     );
// };

// export default TechStackMarquee;


// import React, { useContext } from 'react';
// import { DataContext } from '../context/dataContext';
// const BASE_URL = import.meta.env.VITE_BASE_URL;

// const TechStackMarquee = () => {
//     const { portfolioData } = useContext(DataContext);

//     console.log(portfolioData.skillBreakdown)


//     const TechChip = ({ tech }) => (
//         <span className='inline-flex items-center text-sm px-3 py-[2px] mx-2 rounded-md border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap bg-black/50'>
//             {/* Display logo if available */}
//             {tech.logo && (
//                 <img className="w-6 h-6" src={`${BASE_URL}${tech?.logo?.url}`}/>
//             )}
//             {/* Display title */}   
//             {tech.title}
//         </span>
//     );

//     const MarqueeRow = ({ items, direction = 'left', speed = 50 }) => {
//         return (
//             <div className="overflow-hidden py-4">
//                 <div
//                     className={`flex ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
//                     style={{
//                         animationDuration: `${speed}s`,
//                         width: 'fit-content'
//                     }}
//                 >
//                     {items.map((item) => item.tech.map((tech,index) => (
//                         <TechChip key={index} tech={tech} />

//                     )))}
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className=" overflow-hidden">
//             <style>{`
//         @keyframes marquee-left {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-33.333%);
//           }
//         }

//         @keyframes marquee-right {
//           0% {
//             transform: translateX(-33.333%);
//           }
//           100% {
//             transform: translateX(0%);
//           }
//         }

//         .animate-marquee-left {
//           animation: marquee-left linear infinite;
//         }

//         .animate-marquee-right {
//           animation: marquee-right linear infinite;
//         }
//       `}</style>

//             <div className="py-8 space-y-6 w-[600px]">
//                 {portfolioData?.skillBreakdown?.map((item)=><MarqueeRow items={item} direction="right" speed={50} />)}
//             </div>
//         </div>
//     );
// };

// export default TechStackMarquee;


// import React, { useContext } from 'react';
// import { DataContext } from '../context/dataContext';

// const BASE_URL = import.meta.env.VITE_BASE_URL;

// const TechStackMarquee = () => {
//     const { portfolioData } = useContext(DataContext);

//     const TechChip = ({ tech }) => (
//         // <span className='inline-flex items-center text-sm px-3 py-[2px] mx-2 rounded-md border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap bg-black/50'>
//         //     {tech.logo && (
//         //         <img className="w-6 h-6 mr-2" src={`${BASE_URL}${tech?.logo?.url}`} alt={tech.title} />
//         //     )}
//         //     {tech.title}
//         // </span>



//         <span className='inline-flex items-center gap-2 text-sm font-medium px-4 py-2 mx-2 rounded-full border border-white/20  transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-white/40 hover:bg-white/10 whitespace-nowrap dark:bg-black/50 dark:text-white shadow-xl bg-gray-300/10 backdrop-blur-xl'>
//             {/* Display logo if available */}
//             {tech.logo && (
//                 <img
//                     className="w-5 h-5 object-contain flex-shrink-0"
//                     src={`${BASE_URL}${tech?.logo?.url}`}
//                     alt={tech.title}
//                     onError={(e) => {
//                         e.target.style.display = 'none';
//                     }}
//                 />
//             )}
//             {/* Display title */}
//             <span className="truncate">{tech.title}</span>
//         </span>

//     );

//     const MarqueeRow = ({ techs, direction = 'left', speed = 50 }) => {
//         return (
//             <div className="overflow-hidden py-4">
//                 <div
//                     className={`flex ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
//                     style={{
//                         animationDuration: `${speed}s`,
//                         width: 'fit-content'
//                     }}
//                 >
//                     {[...techs, ...techs, ...techs].map((tech, index) => (
//                         <TechChip key={`${tech.id || tech.title}-${index}`} tech={tech} />
//                     ))}
//                 </div>



//             </div>
//         );
//     };

//     return (
//         <div className="overflow-hidden">
//             <style>{`
//         @keyframes marquee-left {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-33.333%);
//           }
//         }

//         @keyframes marquee-right {
//           0% {
//             transform: translateX(-33.333%);
//           }
//           100% {
//             transform: translateX(0%);
//           }
//         }

//         .animate-marquee-left {
//           animation: marquee-left linear infinite;
//         }

//         .animate-marquee-right {
//           animation: marquee-right linear infinite;
//         }
//       `}</style>

//             <div className="py-6 space-y-6">
//                 {portfolioData?.skillBreakdown?.map((category, index) => (
//                     <MarqueeRow
//                         key={category.id || index}
//                         techs={category.tech}
//                         direction={index % 2 === 0 ? "left" : "right"}
//                         speed={70 + (index * 10)}
//                     />
//                 ))}
//             </div>


//              <div className="absolute -bottom-10 right-1/6">
//                     {/* Outermost Circle */}
//                     <div className="w-98 h-96 border rounded-full flex items-center justify-center">
//                         {/* Second Circle */}
//                         <div className="w-64 h-64 border rounded-full flex items-center justify-center">
//                             {/* Third Circle */}
//                             <div className="w-40 h-40 border rounded-full flex items-center justify-center">
//                                 {/* Innermost Circle */}
//                                 <div className="w-20 h-20 border rounded-full"></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//         </div>
//     );
// };

// export default TechStackMarquee;


import React, { useContext } from 'react';
import { DataContext } from '../context/dataContext';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const TechStackMarquee = () => {
    const { portfolioData } = useContext(DataContext);

    const TechChip = ({ tech }) => (
        <span className='inline-flex items-center gap-2 text-sm font-medium px-4 py-2 mx-2 rounded-full border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-white/40 hover:bg-white/10 whitespace-nowrap dark:bg-black/50 dark:text-white shadow-xl bg-gray-300/10 backdrop-blur-xl'>
            {tech?.logo && (
                <img
                loading='lazy'
                    className="w-5 h-5 object-contain flex-shrink-0"
                    src={`${BASE_URL}${tech?.logo?.url}`}
                    alt={tech.title}
                    onError={(e) => {
                        e.target.style.display = 'none';
                    }}
                />
            )}
            <span className="truncate">{tech.title}</span>
        </span>
    );

    const MarqueeRow = ({ techs, direction = 'left', speed = 50 }) => {
        return (
            <div className="overflow-hidden py-4">
                <div
                    className={`flex ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
                    style={{
                        animationDuration: `${speed}s`,
                        width: 'fit-content'
                    }}
                >
                    {[...techs, ...techs, ...techs].map((tech, index) => (
                        <TechChip key={`${tech?.id || tech?.title}-${index}`} tech={tech} />
                    ))}
                </div>
            </div>
        );
    };

    // const CircleButton = ({ position, onClick }) => (
    //     <button
    //         onClick={onClick}
    //         className={`absolute ${position} group transition-all duration-300 hover:scale-110 z-10`}
    //     >
    //         {/* Main Circle */}
    //         <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
    //             <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
    //                 {/* Arrow Icon */}
    //                 <svg 
    //                     className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform" 
    //                     fill="none" 
    //                     stroke="currentColor" 
    //                     viewBox="0 0 24 24"
    //                 >
    //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    //                 </svg>
    //             </div>
    //         </div>

    //         {/* Half Circle Accent */}
    //         <div className={`absolute top-1/2 ${position.includes('left') ? '-right-2' : '-left-2'} transform -translate-y-1/2 w-8 h-16 bg-gradient-to-br from-purple-400/50 to-pink-400/50 rounded-full opacity-60`} 
    //              style={{
    //                  clipPath: position.includes('left') ? 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' : 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)'
    //              }}
    //         />
    //     </button>
    // );

    return (
        <div className="relative overflow-hidden">
            <style>{`
                @keyframes marquee-left {
                  0% {
                    transform: translateX(0%);
                  }
                  100% {
                    transform: translateX(-33.333%);
                  }
                }
                
                @keyframes marquee-right {
                  0% {
                    transform: translateX(-33.333%);
                  }
                  100% {
                    transform: translateX(0%);
                  }
                }
                
                .animate-marquee-left {
                  animation: marquee-left linear infinite;
                }
                
                .animate-marquee-right {
                  animation: marquee-right linear infinite;
                }
            `}</style>

            {/* Circle Buttons */}


            {/* Marquee Content */}
            <div className="py-6 space-y-6">
                {portfolioData?.skillBreakdown?.map((category, index) => (
                    <MarqueeRow
                        key={category.id || index}
                        techs={category.tech}
                        direction={index % 2 === 0 ? "left" : "right"}
                        speed={70 + (index * 10)}
                    />
                ))}
            </div>

            {/* Decorative Circles at Bottom */}
            {/* <div className="absolute -bottom-64 right-[8%] ">
                <div className="w-[500px] h-[500px] border border-white/10 rounded-full flex items-center justify-center">
                    <div className="w-96 h-96 border border-white/20 rounded-full flex items-center justify-center">
                        <div className="w-64 h-64 border border-white/30 rounded-full flex items-center justify-center">
                            <div className="w-32 h-32 border border-white/20 rounded-full flex items-center justify-center">
                                <div className="w-8 h-8 border border-white/40 rounded-full "></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default TechStackMarquee;