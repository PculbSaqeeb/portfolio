import React, { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import {
    EffectCoverflow,
    Navigation,
    Pagination,
    Autoplay,
} from "swiper/modules";
import { ChevronLeft, ChevronRight, MapPin, Clock, Eye } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../App.css";
import { ExternalLink } from 'lucide-react'
import { useFadeInAnimation } from "../hooks/useAnimation";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router";
import { DataContext } from "../context/dataContext";


const BASE_URL = import.meta.env.VITE_BASE_URL;


const ProjectCard = ({ project }) => {
    const navigate = useNavigate();
    const { employeeName } = useParams();
    return (
        // <div onClick={() => navigate(`/${employeeName || "manjinder"}/project/${project?.title?.split(" ")[0]}`)} className='travel-card relative w-full h-[500px] rounded-2xl overflow-hidden cursor-pointer group '>
        //     <div
        //         className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110 overflow-hidden"
        //         style={{ backgroundImage: `url(${project?.projectImage?.url})` }}
        //     />

        //     <div className="absolute inset-0" />

        //     <div className="absolute inset-0 flex flex-col justify-between overflow-hidden py-5 px-6 sm:px-3 text-white z-10">
        //         <div className="flex justify-between items-start">
        //             <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
        //                 {/* <MapPin className="w-4 h-4" /> */}
        //                 <span className="text-sm font-medium">
        //                     {project?.slug?.charAt(0).toUpperCase() + project?.slug?.slice(1)}
        //                 </span>
        //             </div>
        //             {project?.liveLink && <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        //                 <ExternalLink
        //                     onClick={(e) => {
        //                         e.stopPropagation();
        //                         window.open(project?.liveLink || project?.githubLink);
        //                     }} className='cursor-pointer text-white w-4 h-4' />
        //             </div>}
        //         </div>

        //         <div className="space-y-4">
        //             {project?.tag && <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/80 to-purple-600/80 backdrop-blur-sm px-4 py-2 rounded-full">
        //                 {/* <Clock className="w-4 h-4" /> */}
        //                 <span className="text-sm font-bold tracking-wide">
        //                     {project?.tag}
        //                 </span>
        //             </div>}

        //             <h2 className="text-4xl md:text-4xl font-bold tracking-tight mb-6">
        //                 {project?.title}
        //             </h2>

        //             {/* <p className="text-white/90 text-sm leading-relaxed max-w-xs">
        //                 {project?.description}
        //             </p> */}

        //             <div className="flex gap-2 flex-wrap items-center">
        //                 {project?.techStack?.slice(0, 3).map((item, index) => (
        //                     <p
        //                         key={index}
        //                         className="px-2 py-1 bg-slate-50 text-black text-xs rounded-full"
        //                     >
        //                         {item?.title}
        //                     </p>
        //                 ))}

        //                 {project?.techStack?.length > 3 && (
        //                     <p className="px-2 py-1 bg-slate-200 text-black text-xs rounded-full">
        //                         +{project?.techStack?.length - 3}
        //                     </p>
        //                 )}
        //             </div>
        //         </div>
        //     </div>

        //     <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        // </div>

        // <div
        //     onClick={() => navigate(`/${employeeName || "manjinder"}/project/${project?.title?.split(" ")[0]}`)}
        //     className='travel-card relative w-full h-[500px] rounded-2xl overflow-hidden cursor-pointer group'
        // >
        //     {/* Background Image */}
        //     <div
        //         className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110 overflow-hidden"
        //         style={{ backgroundImage: `url(${project?.projectImage?.url})` }}
        //     />

        //     {/* White Overlay on Hover */}
        //     <div className="absolute inset-0 bg-black/15 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

        //     {/* Original Content - Hidden on Hover */}
        //     <div className="absolute inset-0 flex flex-col justify-between overflow-hidden py-5 px-6 sm:px-3 text-white z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
        //         <div className="flex justify-between items-start">
        //             <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
        //                 <span className="text-sm font-medium">
        //                     {project?.slug?.charAt(0).toUpperCase() + project?.slug?.slice(1)}
        //                 </span>
        //             </div>
        //             {project?.liveLink &&
        //                 <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        //                     <ExternalLink
        //                         onClick={(e) => {
        //                             e.stopPropagation();
        //                             window.open(project?.liveLink || project?.githubLink);
        //                         }}
        //                         className='cursor-pointer text-white w-4 h-4'
        //                     />
        //                 </div>
        //             }
        //         </div>

        //         <div className="space-y-4">
        //             {project?.tag &&
        //                 <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/80 to-purple-600/80 backdrop-blur-sm px-4 py-2 rounded-full">
        //                     <span className="text-sm font-bold tracking-wide">
        //                         {project?.tag}
        //                     </span>
        //                 </div>
        //             }

        //             <h2 className="text-4xl md:text-4xl font-bold tracking-tight mb-6">
        //                 {project?.title}
        //             </h2>

        //             <div className="flex gap-2 flex-wrap items-center">
        //                 {project?.techStack?.slice(0, 3).map((item, index) => (
        //                     <p
        //                         key={index}
        //                         className="px-2 py-1 bg-slate-50 text-black text-xs rounded-full"
        //                     >
        //                         {item?.title}
        //                     </p>
        //                 ))}

        //                 {project?.techStack?.length > 3 && (
        //                     <p className="px-2 py-1 bg-slate-200 text-black text-xs rounded-full">
        //                         +{project?.techStack?.length - 3}
        //                     </p>
        //                 )}
        //             </div>
        //         </div>
        //     </div>

        //     {/* Description Content - Shows on Hover with Slide Up Animation */}
        //     <div className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
        //         <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-300 px-8 py-6 text-center">
        //             {/* <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        //                 {project?.title}
        //             </h3> */}
        //             <p className="text-gray-900 text-lg leading-relaxed max-w-md mx-auto">
        //                 {project?.description}
        //             </p>

        //             {/* Tech Stack on Hover */}
        //             {/* <div className="flex gap-2 flex-wrap items-center justify-center mt-6">
        //                 {project?.techStack?.map((item, index) => (
        //                     <span
        //                         key={index}
        //                         className="px-3 py-1 bg-gray-900 text-white text-sm rounded-full"
        //                     >
        //                         {item?.title}
        //                     </span>
        //                 ))}
        //             </div> */}

        //             {/* Live Link Button */}
        //             {/* {project?.liveLink && (
        //                 <button
        //                     onClick={(e) => {
        //                         e.stopPropagation();
        //                         window.open(project?.liveLink || project?.githubLink);
        //                     }}
        //                     className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
        //                 >
        //                     <span>View Project</span>
        //                     <ExternalLink className="w-4 h-4" />
        //                 </button>
        //             )} */}
        //         </div>
        //     </div>

        //     {/* Border Gradient on Hover */}
        //     {/* <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
        // </div>

        <div 
    onClick={() => navigate(`/${employeeName || "manjinder"}/project/${project?.title?.split(" ")[0]}`)} 
    className='travel-card relative w-full h-[500px] rounded-2xl overflow-hidden cursor-pointer group'
>             
    {/* Background Image */}
    <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110 overflow-hidden"
        style={{ backgroundImage: `url(${project?.projectImage?.url})` }}
    />              

    {/* White Overlay on Hover */}
    <div className="absolute inset-0 bg-black/15 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

    {/* Original Content - Hidden on Hover */}
    <div className="absolute inset-0 flex flex-col justify-between overflow-hidden py-5 px-6 sm:px-3 text-white z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
        <div className="flex justify-between items-start">
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <span className="text-sm font-medium">
                    {project?.slug?.charAt(0).toUpperCase() + project?.slug?.slice(1)}
                </span>
            </div>
            {project?.liveLink && 
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink
                        onClick={(e) => {
                            e.stopPropagation();
                            window.open(project?.liveLink || project?.githubLink);
                        }} 
                        className='cursor-pointer text-white w-4 h-4' 
                    />
                </div>
            }
        </div>                  

        <div className="space-y-4">
            {project?.tag && 
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/80 to-purple-600/80 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-sm font-bold tracking-wide">
                        {project?.tag}
                    </span>
                </div>
            }                      

            <h2 className="text-4xl md:text-4xl font-bold tracking-tight mb-6">
                {project?.title}
            </h2>                      

            <div className="flex gap-2 flex-wrap items-center">
                {project?.techStack?.slice(0, 3).map((item, index) => (
                    <p
                        key={index}
                        className="px-2 py-1 bg-slate-50 text-black text-xs rounded-full"
                    >
                        {item?.title}
                    </p>
                ))}                          

                {project?.techStack?.length > 3 && (
                    <p className="px-2 py-1 bg-slate-200 text-black text-xs rounded-full">
                        +{project?.techStack?.length - 3}
                    </p>
                )}
            </div>
        </div>
    </div>              

    {/* Description Content - Shows on Hover with Slide Up from Bottom */}
    <div className="absolute inset-0 z-30">
        <div className="absolute bottom-0 left-0 right-0 h-full bg-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-200 flex items-center justify-center">
            <div className="px-8 py-6 text-center">
                {/* <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {project?.title}
                </h3> */}
                <p className="text-gray-50 text-lg leading-relaxed max-w-md mx-auto">
                    {project?.description}
                </p>
                
                {/* Live Link Button */}
                {/* {project?.liveLink && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            window.open(project?.liveLink || project?.githubLink);
                        }}
                        className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
                    >
                        <span>View Project</span>
                        <ExternalLink className="w-4 h-4" />
                    </button>
                )} */}
            </div>
        </div>
    </div>

    {/* Border Gradient on Hover */}
    <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</div>
    );
};

const ProjectCarousel = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);
    const { ref, controls } = useFadeInAnimation();
    const [selectedType, setSelectedType] = useState("all");
    const [filterType, setFilterType] = useState("All");
    const [isLarge, setIsLarge] = useState(false);
    const { portfolioData } = useContext(DataContext);

    const filteredDestinations = portfolioData?.projects?.filter((project) =>
        selectedType === "all" ? true : project.slug.toLowerCase() === selectedType.toLowerCase()
    );

    useEffect(() => {
        const media = window.matchMedia('(min-width: 1024px)');
        const update = () => setIsLarge(media.matches);
        update();

        media.addEventListener('change', update);
        return () => media.removeEventListener('change', update);
    }, []);

    useEffect(() => {
        if (prevRef.current && nextRef.current) {
            const swiper = document.querySelector(".swiper")?.swiper;
            if (swiper && swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.update();
            }
        }
    }, [filterType, selectedType]);

    return (

        <div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
                viewport={{ amount: 0.6, once: true }}
                className="flex justify-center mt-4">
                <div className="relative flex rounded-full overflow-hidden border border-gray-900">

                    <span
                        className="absolute top-0 left-0 h-full w-1/3 rounded-full z-0 transition-all duration-300"
                        style={{
                            transform:
                                selectedType === "all"
                                    ? "translateX(0%)"
                                    : selectedType === "mobile"
                                        ? "translateX(100%)"
                                        : "translateX(200%)",
                            background: "linear-gradient(135deg, #bd50e9, #2851d6)",
                        }}
                    ></span>

                    <input
                        onChange={() => setSelectedType("all")}
                        checked={selectedType === "all"}
                        type="radio"
                        name="plan"
                        id="all"
                        className="hidden peer/all"
                    />
                    <label
                        htmlFor="all"
                        className="z-10 px-7 py-1 cursor-pointer text-sm md:text-base peer-checked/all:text-white text-gray-300 transition-all duration-300"
                    >
                        All
                    </label>

                    <input
                        onChange={() => setSelectedType("mobile")}
                        checked={selectedType === "mobile"}
                        type="radio"
                        name="plan"
                        id="mobile"
                        className="hidden peer/mobile"
                    />
                    <label
                        htmlFor="mobile"
                        className="z-10 px-7 py-1 cursor-pointer text-sm md:text-base peer-checked/mobile:text-white text-gray-300 transition-all duration-300"
                    >
                        Mobile
                    </label>

                    <input
                        onChange={() => setSelectedType("web")}
                        checked={selectedType === "web"}
                        type="radio"
                        name="plan"
                        id="web"
                        className="hidden peer/web"
                    />
                    <label
                        htmlFor="web"
                        className="z-10 px-7 py-1 cursor-pointer text-sm md:text-base peer-checked/web:text-white text-gray-300 transition-all duration-300"
                    >
                        Web
                    </label>
                </div>
            </motion.div>

            <div className="relative w-full mt-4 flex justify-center overflow-hidden pb-10">
                <div className="relative w-full max-w-7xl mx-auto sm:px-4 ">
                    <motion.div
                        animate={controls}
                        initial={{ opacity: 0, y: 70 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }} className="relative">
                        <Swiper
                            key={`${selectedType}-${filteredDestinations?.length}`}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            effect="coverflow"
                            grabCursor={true}
                            centeredSlides={filteredDestinations?.lenght > 1}
                            breakpoints={{
                                0: {
                                    slidesPerView:
                                        filteredDestinations?.length >= 1
                                            ? 1
                                            : 0,
                                },
                                640: {
                                    slidesPerView:
                                        filteredDestinations?.length >= 2
                                            ? 2
                                            : filteredDestinations?.length,
                                },
                                1024: {
                                    slidesPerView:
                                        filteredDestinations?.length >= 3
                                            ? 3
                                            : filteredDestinations?.length,
                                },
                            }}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            loop={filteredDestinations?.length > 1}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }}
                            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                            className="travel-swiper w-full py-12"
                            style={{
                                "--swiper-pagination-color": "#fff",
                                "--swiper-pagination-bullet-inactive-color": "#ffffff60",
                                "--swiper-pagination-bullet-size": "12px",
                                "--swiper-pagination-bullet-horizontal-gap": "10px",
                            }}
                        >
                            {filteredDestinations?.map((project) => (
                                <SwiperSlide key={`${selectedType}-${project.id}`} className="w-80 md:w-96" style={{ width: isLarge ? '350px' : '330px', padding: "20px" }}>
                                    <ProjectCard project={project} />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <button aria-label='Previous Card' ref={prevRef} className="custom-swiper-button absolute left-4 top-1/2 transform -translate-y-1/2 z-20">
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <button aria-label='Next Card' ref={nextRef} className="custom-swiper-button absolute right-4 top-1/2 transform -translate-y-1/2 z-20">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </motion.div>


                    <div className="flex justify-center items-center space-x-5 sm:space-x-8 mt-2 sm:mt-12 text-white/80">
                        {portfolioData?.projectStats?.map((value, index) => (
                            <div key={index} className="flex items-center space-x-5 sm:space-x-8">
                                <div className="text-center">
                                    <div className="text-lg sm:text-4xl font-bold">{value?.experience}+</div>
                                    <div className="text-sm sm:text-md">{value?.label}</div>
                                </div>

                                {index !== portfolioData?.projectStats?.length - 1 && (
                                    <div className="w-px h-8 bg-white/30" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCarousel;






// slidesPerView={filteredDestinations?.length < 2 ? filteredDestinations?.length : "auto"}

// slidesPerView={
//     filteredDestinations?.length >= 3
//         ? 3
//         : filteredDestinations?.length === 2
//             ? 2
//             : 1
// }







// slidesPerView={
//     filteredDestinations?.length >= 5
//         ? 3.4
//         : filteredDestinations?.length === 4
//             ? 3
//             : filteredDestinations?.length === 3
//                 ? 3
//                 : filteredDestinations?.length === 2
//                     ? 2
//                     : 1
// }

// breakpoints={{
//     1280: {
//         slidesPerView:
//             filteredDestinations.length >= 5
//                 ? 3.4
//                 : filteredDestinations.length === 4
//                     ? 3
//                     : filteredDestinations.length === 3
//                         ? 2.5
//                         : filteredDestinations.length === 2
//                             ? 1.5
//                             : 1,
//     },
//     1024: {
//         slidesPerView:
//             filteredDestinations.length >= 4
//                 ? 2.5
//                 : filteredDestinations.length === 3
//                     ? 2
//                     : filteredDestinations.length === 2
//                         ? 1.5
//                         : 1,
//     },
//     640: {
//         slidesPerView:
//             filteredDestinations.length === 2
//                 ? 1.5
//                 : 1,
//     },
//     0: {
//         slidesPerView: 1,
//     },
// }}