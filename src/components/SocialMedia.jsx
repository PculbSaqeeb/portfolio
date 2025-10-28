    import React, { useContext } from 'react';
    import { motion } from 'framer-motion';
    import { getIconByTitle } from '../constant/socialLogo/socialMediaLogo';
    import { DataContext } from '../context/dataContext';

    const SocialMedia = ({ className }) => {
        const { portfolioData } = useContext(DataContext);


        const getTailwindHoverClasses = (title) => {
            const lowerTitle = title.toLowerCase();

            if (lowerTitle.includes('github')) {
                return "transition-transform duration-300 hover:rotate-12";
            }

            if (lowerTitle.includes('upwork')) {
                return "transition-transform duration-300 hover:-translate-y-1";
            }

            // if (lowerTitle.includes('phone')) {
            //     return "transition-transform duration-300 hover:rotate-6";
            // }

            if (lowerTitle.includes('mail') || lowerTitle.includes('message')) {
                return "transition-transform duration-300 hover:scale-105";
            }

            return "transition-transform duration-300 hover:scale-100";
        };


        return (
            <div className={`flex gap-3 mt-[30px] justify-center md:justify-start ${className}`}>
                {portfolioData?.socialLinks?.map((item, index) => {
                    const IconComponent = getIconByTitle(item?.title);

                    const handleClick = () => {
                        const trimmedUrl = item?.url?.trim();
                        let finalUrl = trimmedUrl;

                        if (item?.title.toLowerCase().includes('mail')) {
                            finalUrl = `mailto:${trimmedUrl}`;
                            window.location.href = finalUrl;
                        } 
                        // else if (item.title.toLowerCase().includes('phone')) {
                        //     finalUrl = `tel:${trimmedUrl}`;
                        //     window.location.href = finalUrl;
                        // } 
                        else {
                            window.open(finalUrl, '_blank');
                        }
                    };

                    return (
                        <div key={index} className='relative group flex items-center'>
                            {/* Text sliding from left */}
                            <div className='absolute right-full mr-3 
                                 text-white px-3 py-1 rounded-lg text-sm 
                                transform translate-x-4 opacity-0 
                                group-hover:translate-x-0 group-hover:opacity-100 
                                transition-all duration-300 ease-in
                                pointer-events-none whitespace-nowrap z-10
                                bg-gray-700'>
                                {item.title}

                                {/* Arrow pointing right to icon */}
                                <div className='absolute top-1/2 -right-1 transform -translate-y-1/2 
                                    border-t-4 border-b-4 border-l-4 
                                    border-t-transparent border-b-transparent 
                                    border-l-gray-700'></div>
                            </div>

                            {/* Icon */}
                            {/* <motion.div
                                onClick={handleClick}
                                // {...getHoverAnimationProps(item.title)}
                                className={`bg-gray-100 rounded-full p-3 cursor-pointer 
                                dark:bg-[#A750E6] hover:bg-gray-200 
                                dark:hover:bg-gray-700 transition-all duration-200 
                                hover:scale-110 relative z-20 hover:shadow-[0_0_10px_rgba(139,92,246,0.7)] ${getTailwindHoverClasses(item.title)}`}
                            >
                                {IconComponent &&
                                    (typeof IconComponent === "string" ? (
                                        <img src={IconComponent} alt={item.title} className="w-6 h-6 object-contain" />
                                    ) : (
                                        <IconComponent className="text-lg" />
                                    ))}
                            </motion.div> */}

                            <motion.div
                                onClick={handleClick}
                                className={`
         rounded-full p-3 cursor-pointer 
        bg-[#A750E6] 
        hover:bg-gray-700 transition-all duration-200 
        relative z-20 
        // hover:shadow-[0_0_10px_rgba(139,92,246,0.7)] 
        flex items-center justify-center 
        ${getTailwindHoverClasses(item.title)}
    `}
                            >
                                {IconComponent &&
                                    (typeof IconComponent === "string" ? (
                                        <img
                                            src={IconComponent}
                                            alt={item?.title}
                                            className="w-6 h-6 object-contain mt-[1px]" 
                                        />
                                    ) : (
                                        <IconComponent className="text-lg" />
                                    ))}
                            </motion.div>

                        </div>
                    );
                })}
            </div>
        );
    };

    export default SocialMedia;
