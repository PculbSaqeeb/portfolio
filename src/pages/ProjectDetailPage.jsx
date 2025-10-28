// import React, { useContext } from 'react'
// import { Github, ExternalLink } from 'lucide-react';
// // import { useNavigate, useParams } from 'react-router';
// import { DataContext } from '../context/dataContext';

// const ProjectDetailPage = () => {
//     // const { portfolioData } = useContext(DataContext);
//     // const navigate = useNavigate();
//     // const { employeeName, projectID } = useParams();
//     // const project = portfolioData?.projects?.find(project => project?.id === Number(projectID));
//     // console.log(project)
//     return (

//         //         <>
//         //         <div className="mx-[50px] mt-[50px] mb-[100px]">
//         //             <div>
//         //                 {/* <div
//         //                     onClick={() =>
//         //                         navigate(`/${employeeName || "manjinder"}/projects`)
//         //                     }
//         //                     className="flex gap-4 items-center cursor-pointer"
//         //                 >
//         //                     <p>Back to Projects</p>
//         //                 </div> */}

//         //                 <div className="flex items-start gap-12 mt-10">
//         //                     <div className="">
//         //                         {/* <p className="text-5xl font-bold mt-[30px]">{project?.title}</p> */}

//         //                         <div className="w-full max-w-[900px] h-[500px] bg-stone-900 rounded-lg mt-[20px]"></div>

//         //                         <div className="mt-10 max-w-[900px]">
//         //                             <p className="text-justify leading-relaxed text-gray-700 dark:text-gray-300">
//         //                                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio impedit magnam culpa suscipit doloremque itaque, nisi numquam? Facere, quos ipsum animi magnam reiciendis mollitia ducimus? Natus perferendis nisi repellat, vel nulla officiis velit quos illo culpa ea? Provident soluta nam omnis porro nemo rerum, dolores officiis eveniet unde corporis, odit est magnam tempora suscipit. Pariatur delectus corrupti facere voluptate ratione atque cupiditate repudiandae voluptates veniam autem nam commodi, nostrum natus? Commodi ullam eligendi magnam tenetur officia, excepturi laboriosam suscipit minus voluptatum laborum maiores, voluptatibus vel et placeat nemo! Voluptatibus voluptatem, iure deserunt eos inventore corporis quisquam, ratione laborum hic repellat ex. Adipisci est error neque harum laboriosam voluptates amet quaerat sit officia labore, aut placeat! Deserunt architecto voluptas odio dolor, veritatis cum dicta alias. Sint rem cum atque, itaque natus perspiciatis consectetur debitis adipisci odit repellendus? Similique corrupti itaque magnam voluptatem unde vero quisquam debitis molestias harum rerum nulla iusto eveniet officiis facere, sunt perspiciatis! Consequatur perspiciatis sapiente repudiandae iure fugiat vitae libero ab rerum eos, culpa ullam labore quam aliquid quis doloremque omnis voluptatibus aspernatur. Impedit est illum modi, eos cupiditate praesentium culpa molestiae reiciendis dolores alias fugiat voluptate, quidem quaerat inventore. Aperiam, voluptates veniam sapiente repudiandae ducimus id hic saepe ut? Eligendi sint minima quod quae consequatur repellat cupiditate? Id, voluptatum tenetur dolore nostrum autem illo expedita vitae, deserunt, ad quod corporis nam assumenda. Saepe dicta molestias suscipit dolorem vero. Ipsam molestias illo ducimus perferendis, aliquid magnam eum cupiditate illum laborum quasi dicta? Excepturi placeat numquam beatae ducimus dolor? Dignissimos, vel ex at sequi ducimus, perspiciatis cupiditate quis nobis id recusandae, adipisci nihil magnam facilis. Optio laudantium reiciendis eveniet error odio voluptate rerum, aspernatur mollitia, officiis rem quidem, temporibus illum pariatur ut ducimus corrupti sint sed vero qui animi! Eaque commodi earum culpa error laboriosam ipsum doloremque est. Saepe explicabo officiis, animi vero, asperiores veniam alias molestiae eos laborum ullam quasi incidunt maxime itaque? Odit soluta obcaecati accusamus enim corporis ab necessitatibus aut, ullam aspernatur deleniti neque atque, nobis cum dolorum, nostrum suscipit architecto quas! Voluptatibus qui aperiam dicta repellat accusamus veritatis aspernatur rerum, minus accusantium, doloribus, blanditiis eum perspiciatis. Deleniti tempore nobis repudiandae unde. Fuga ratione perferendis esse? Numquam eos laboriosam aliquam molestiae! Omnis eveniet vitae sequi. Aspernatur minus vero excepturi placeat, assumenda quas architecto voluptate incidunt obcaecati culpa odio in vel vitae voluptas libero? Officiis laboriosam, corrupti cumque accusamus, id illum eos autem voluptas animi ratione atque dicta commodi debitis quibusdam magni nulla perspiciatis beatae quia explicabo modi eaque nesciunt odio harum alias! Eos deserunt velit, odio a aut maxime? Vel illo nulla doloremque porro nemo eligendi reiciendis, deleniti doloribus? Ducimus voluptatum perspiciatis dicta porro id earum labore fugiat voluptatem facilis sed! Dignissimos accusantium quas voluptate numquam eaque, quam est ducimus, a corrupti sunt enim eum eligendi temporibus consequuntur, quia quidem earum fuga quos pariatur. Error neque, provident quis optio omnis libero natus quam! Eius veritatis velit iusto earum animi culpa autem reiciendis quas. Labore quaerat nesciunt molestiae dolorem aut quis iste sequi dolor totam quae?
//         //                             </p>
//         //                         </div>
//         //                     </div>

//         //                     <div className="w-[450px] px-5 py-6 bg-slate-100 dark:bg-gray-800 rounded-lg sticky top-28 z-50">
//         //                         <p className="font-bold text-lg border-b pb-4">Project Details</p>

//         //                         <p className="font-bold mt-[12px]">Technologies</p>
//         //                         {/* <div className="flex flex-wrap gap-2 mt-[10px] border-b pb-4">
//         //                             {project?.techStack?.map((item, index) => (
//         //                                 <p key={index} className="ml-4 text-sm">
//         //                                     {item?.title}
//         //                                 </p>
//         //                             ))}
//         //                         </div> */}

//         //                         <p className="font-bold mt-[20px]">Links</p>
//         //                         <div className="flex gap-3 items-center text-lg text-blue-500 mt-[10px]">
//         //                             <Github />
//         //                             <p>Github Repository</p>
//         //                         </div>

//         //                         <div className="flex gap-3 items-center text-lg text-blue-500">
//         //                             <ExternalLink />
//         //                             <p>Live demo</p>
//         //                         </div>
//         //                     </div>
//         //                 </div>
//         //             </div>
//         //         </div>


//         //         <div className="mx-[20px] sm:mx-[30px] md:mx-[50px] mt-[30px] sm:mt-[40px] md:mt-[50px] mb-[60px] sm:mb-[80px] md:mb-[100px]">
//         //             <div>
//         //                 {/* <div
//         //                     onClick={() =>
//         //                         navigate(`/${employeeName || "manjinder"}/projects`)
//         //                     }
//         //                     className="flex gap-2 sm:gap-3 md:gap-4 items-center cursor-pointer"
//         //                 >
//         //                     <FaArrowLeft />
//         //                     <p className="text-sm sm:text-base">Back to Projects</p>
//         //                 </div> */}

//         //                 <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10 mt-8 sm:mt-10">
//         //                     <div className="">
//         //                         <p className="text-2xl sm:text-4xl md:text-5xl font-bold mt-6 sm:mt-[30px]">
//         //                             {/* {project?.title} */}
//         //                         </p>

//         //                         <div className="max-w-[900px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-stone-900 rounded-lg mt-[20px]">

//         //                         </div>

//         //                         <div className="mt-6 sm:mt-10 max-w-[900px]">
//         //                             <p className="text-justify leading-relaxed text-gray-700 dark:text-gray-300 text-sm sm:text-base">
//         //                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quae odio quia qui officia? Error doloremque deleniti consequuntur voluptas pariatur assumenda at, numquam nihil nulla, quisquam, laboriosam velit provident nostrum rerum commodi adipisci voluptatem exercitationem debitis corrupti soluta quibusdam omnis alias! Repellendus, aperiam saepe dolores placeat quod nobis libero ut quae? Totam quas officiis maxime unde iusto aliquid distinctio doloribus molestiae? Quos fugit dolorum voluptas ducimus architecto? Ipsam veritatis dignissimos, eos non odio quisquam, voluptate illum neque impedit suscipit ut nostrum autem assumenda voluptatem vitae cupiditate tempore nesciunt ipsa eligendi cum eveniet voluptatibus at? Facere repudiandae blanditiis sint laborum, perspiciatis repellat eveniet voluptas repellendus ducimus magnam voluptate qui nihil, aspernatur vitae. Recusandae neque fuga inventore repellat debitis natus aliquam explicabo sapiente ab fugit. Ipsam sequi quia magnam, inventore voluptate animi laboriosam necessitatibus accusantium quaerat neque, provident corporis! Illo ipsa explicabo modi praesentium harum rerum ab, odio pariatur facere id maxime perferendis voluptate dolorum optio assumenda repudiandae sed tenetur quae dicta? Saepe libero, modi eos aut maxime suscipit numquam quidem dolorem repellat ab veritatis ducimus unde praesentium enim dolorum itaque quia minus molestias dolor qui earum? Ipsam saepe numquam temporibus fuga autem inventore, praesentium culpa cum magnam voluptatibus velit, fugit, unde tempora officia quod nihil eum. Nesciunt, quibusdam minus adipisci delectus, quas veniam temporibus iure nobis aut blanditiis soluta inventore repellendus fuga! Hic adipisci quos, consequatur mollitia quia magni. Adipisci, possimus dicta obcaecati vitae error quaerat, sequi exercitationem sit ipsum laudantium minus aliquam unde repudiandae eius! Quaerat, placeat voluptate explicabo, ipsam vitae numquam quibusdam distinctio vel asperiores rerum eveniet consequuntur magni debitis quas nobis similique nulla ut facere, itaque quia aspernatur esse excepturi tempore quisquam. Veniam at rem quasi, sunt quibusdam voluptas beatae hic voluptates reprehenderit iusto voluptatem. Tempore sunt recusandae repudiandae accusantium tempora ipsa temporibus dicta ullam, esse id deserunt. Hic fugit nam ratione enim officia corrupti commodi obcaecati neque! Repellendus ea ratione perspiciatis corrupti eum eligendi natus laudantium consectetur aperiam, suscipit impedit explicabo veritatis. Praesentium, veniam facere? Minus, similique maiores quia itaque vero, ipsum placeat animi, voluptatibus totam veniam facere quae. Odit corrupti alias adipisci quis ratione consequatur ab eum fugit sunt iure unde itaque quos temporibus impedit ipsum, quisquam reprehenderit voluptatem explicabo maxime dolores quibusdam minus quidem debitis vel! Animi laudantium reprehenderit cupiditate molestiae facere ea incidunt odio quos earum voluptates, illum quam minus officia obcaecati optio provident vero aperiam enim. Reprehenderit laudantium repudiandae ducimus? Ducimus, voluptate accusamus pariatur quibusdam repellat voluptatem ad vitae numquam repellendus maiores eaque, voluptates asperiores iure eligendi quos! Ut atque incidunt iure placeat? Rem nostrum magnam natus itaque beatae officia inventore molestias repellat tenetur! Quod nihil architecto vel deserunt, explicabo provident, magni ratione quasi expedita sit debitis repellat repudiandae. Accusantium odit debitis quibusdam, illo quo dolore tempore, amet neque quos ut eveniet, adipisci dignissimos sit facere repellat sequi sunt cupiditate dolorem modi nesciunt? Autem aut praesentium consequatur repellendus fuga alias aliquam, illo dolores laboriosam possimus voluptatem ad, hic ipsum delectus blanditiis atque cumque sapiente nemo rerum aperiam explicabo facere ullam. Iste, odit nesciunt.
//         //                             </p>
//         //                         </div>
//         //                     </div>

//         //                     <div className="w-full lg:w-[450px] px-4 sm:px-5 py-6 bg-slate-100 dark:bg-gray-800 rounded-lg lg:sticky lg:top-28 lg:z-50">
//         //                         <p className="font-bold text-base sm:text-lg border-b pb-4">Project Details</p>

//         //                         <p className="font-bold mt-4 sm:mt-[12px]">Technologies</p>
//         //                         {/* <div className="flex flex-wrap gap-2 mt-2 sm:mt-[10px] border-b pb-4">
//         //                             {project?.techStack?.map((item, index) => (
//         //                                 <p key={index} className="ml-2 sm:ml-4 text-xs sm:text-sm">
//         //                                     {item?.title}
//         //                                 </p>
//         //                             ))}
//         //                         </div> */}

//         //                         <p className="font-bold mt-6 sm:mt-[20px]">Links</p>
//         //                         {/* {project?.repoLink && <div onClick={() => window.open(project?.repoLink, '_blank')} className="flex gap-2 sm:gap-3 items-center text-sm sm:text-lg text-blue-500 mt-2 sm:mt-[10px] cursor-pointer">
//         //                             <FiGithub/>
//         //                             <p>Github Repository</p>
//         //                         </div>} */}

//         //                         {/* {project?.liveLink && <div onClick={() => window.open(project?.liveLink, '_blank')} className="flex gap-2 sm:gap-3 items-center text-sm sm:text-lg text-blue-500 mt-2 cursor-pointer">
//         //                             <RiExternalLinkLine/>
//         //                             <p>Live demo</p>
//         //                         </div>} */}
//         //                     </div>
//         //                 </div>
//         //             </div>
//         //         </div>
//         // </>


//         <>
//             {/* <section className='mt-[50px]'>
//                 <h1 className='text-5xl text-center font-bold'>Title of Project</h1>
//                 <h4 className='text-xl text-center mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id a magni, sapiente corporis cum tempora esse perspiciatis sunt. Ipsa, est!</h4>

//                <div className='mt-16'>
//                  <div className='w-[400px]'>
//                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur amet consectetur aut voluptatem mollitia possimus accusantium hic soluta consequatur ad quasi, tempore tempora. Laudantium repellendus maxime impedit vitae porro eaque voluptas ad laboriosam harum labore tempora eos corrupti ullam, cum voluptate modi! Delectus obcaecati quidem dignissimos dolorum voluptas at corrupti saepe molestias a quos, id quasi aspernatur laudantium! Quidem nostrum repudiandae dolor vel inventore totam architecto illum modi? Nisi similique numquam, facilis temporibus, provident quisquam ut quos, non ea ad mollitia quibusdam voluptates nobis blanditiis labore harum iste. Recusandae quos maiores deleniti voluptatibus sint cumque, non quo neque. Voluptatum, quod!
//                 </div>

//                 <div className=''>

//                 </div>
//                </div>
//             </section> */}



//         </>

//     )
// }

// export default ProjectDetailPage



import { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import appStore_logo from '../assets/images/logo/appstoe_logo.png'
import playStore_logo from '../assets/images/logo/playstore_logo.png'

import {
    Github,
    ExternalLink,
    Smartphone,
    Play,
    ChevronLeft,
    ChevronRight,
    Star,
    Users,
    Code,
    Zap,
    Shield,
    Rocket,
    CheckCircle,
    AlertCircle,
    Lightbulb,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Badge from "../components/Badge";
import { DataContext } from "../context/dataContext";
import feature_logo from '../assets/images/logo/flash.png'
// import laptop from '../assets/images/logo/laptop.png';
// import laptop1 from '../assets/images/logo/20250711_1819_लैपटॉप_स्क्रीन_डिस्प्ले_remix_01jzwrb32gfs1s4xbj8fxmc8fh-removebg-preview.png';

import laptop_mockup from '../assets/images/avatar/Rectangle 3-front.png';
import tablet_mockup from '../assets/images/avatar/Rectangle 3-landscape (2).png'
import ios_mockup from '../assets/images/avatar/realistic-front-view-smartphone-mockup-mobile-iphone-purple-frame-with-blank-white-display-vector.png'
import ios_mockup1 from '../assets/images/avatar/realistic-front-view-smartphone-mockup-mobile-iphone-purple-frame-with-blank-white-display-vector 1 (3).svg'
import android_mockup from '../assets/images/avatar/Rectangle 3-portrait.png'

const BASE_URL = import.meta.env.VITE_BASE_URL;

const ProjectDetailPage = () => {
    // const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { portfolioData } = useContext(DataContext);
    const { employeeName, projectName } = useParams();
    const project = portfolioData?.projects?.find(project => project?.title?.split(" ")[0]?.toLowerCase() === projectName?.toLowerCase());
    const isMobile = project?.slug;
    // const nextImage = () => {
    //     setCurrentImageIndex((prev) => (prev + 1) % project?.mutipleProjectImage?.length);
    // };

    // const prevImage = () => {
    //     setCurrentImageIndex(
    //         (prev) => (prev - 1 + project?.mutipleProjectImage?.length) % project?.mutipleProjectImage?.length,
    //     );
    // };

    // useEffect(() => {
    //     window.imageAutoplay = setInterval(() => {
    //         setCurrentImageIndex((prev) => (prev + 1) % project?.mutipleProjectImage?.length);
    //     }, 2000);

    //     return () => clearInterval(window.imageAutoplay);
    // }, [project?.mutipleProjectImage?.length]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
            },
        },
    };


    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };



    return (
        <div id="" className="min-h-screen relative overflow-x-hidden">
            {/* Background Effects */}

            <div className=" overflow-hidden">
                {/* Header */}
                <motion.header
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="p-4 pt-10 sm:p-6 sm:pt-12 lg:p-8"
                >
                    {/* <Link
                        to={`/${employeeName}`}
                        state={{ scrollTo: "home" }}
                        className="inline-flex items-center text-purple-300 hover:text-white transition-colors duration-300"
                    >
                        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        Back to Home
                    </Link> */}
                </motion.header>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="container mx-auto px-4 sm:px-6 lg:px-8"
                >
                    {/* Hero Section */}
                    <motion.div variants={itemVariants} className="text-center">
                        <h1 className="text-[28px] sm:text-5xl lg:text-6xl font-bold text-white mb-1 sm:mb-4">
                            {project?.title}
                        </h1>
                        {/* <h2 className="text-lg sm:text-xl lg:text-2xl text-purple-300 mb-1 sm:mb-6">
                            {project?.name}
                        </h2> */}
                        <p className="text-base sm:text-lg text-white max-w-3xl mx-auto leading-relaxed">
                            {project?.description}
                        </p>
                    </motion.div>



                    {/* {isMobile === "web" && (
                        <div className="relative">
                            <div className="hidden sm:block absolute top-[85px] md:top-[97px] lg:top-[207px] xl:top-[249px] xl:left-24 2xl:left-50 sm:w-[160px] sm:h-[250px] md:w-[180px] md:h-[310px] lg:w-[190px] lg:h-[338px] bg-black rounded-[10px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[40px] p-2 shadow-[0_0_0_2px_#333,0_20px_40px_rgba(0,0,0,0.3)] z-10">
                                <div className="relative w-full h-full bg-black rounded-[10px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[37px] overflow-hidden">
                                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-[90px] lg:w-[120px] h-[25px] bg-black rounded-[12px] z-10" />
                                    <div className="relative w-full h-full bg-white rounded-[10px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[4px] overflow-hidden">
                                        <div className="absolute inset-0 rounded-[10px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[40px] overflow-hidden">
                                            <img
                                                src={video}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-white/80 rounded-md z-10" />
                                    </div>
                                </div>
                            </div>

                            <div className=" flex items-center justify-center p-4">
                                <div className="relative">
                                    <img
                                        src={laptop}
                                        alt="Laptop"
                                        className="w-[1000px] h-auto"
                                    />

                                    <div
                                        className="absolute"
                                        style={{
                                            top: '12.1%',
                                            left: '12.9%',
                                            width: '75%',
                                            height: '76%',
                                        }}
                                    >
                                        <img
                                            ref={videoRef}
                                            src={video}
                                            className="w-full h-full object-cover rounded-t-lg shadow-lg overflow-hidden"

                                        />
                                    </div>
                                </div>


                            </div>

                            <div className="hidden lg:block lg:absolute lg:top-[245px] lg:right-0 xl:top-[187px] 2xl:top-[186px] xl:-right-10 2xl:-right-10 z-10 relative border border-gray-500 rounded-[20px]">

                                <div className="lg:w-[400px] h-[300px] xl:w-[500px] xl:h-[400px] 2xl:w-[580px] 2xl:h-[400px] border-[20px] border-black rounded-[20px] overflow-hidden">
                                    <img className="w-full h-full object-contain" src={video} alt="" />
                                </div>
                            </div>
                        </div>
                    )} */}
                    {/* 
                    {isMobile === "mobile" && (
                        <div className="relative flex flex-col items-center justify-center px-4 py-10 ">
                            <img
                                className="hidden sm:block absolute sm:-left-20 sm:top-44 md:-left-30 md:top-44 lg:left-0 lg:top-60 xl:left-24 xl:top-60 2xl:top-62 2xl:left-44  -rotate-[30deg] z-30 sm:w-[300px] md:w-[400px]"
                                src={pencil}
                                alt="Pencil"
                            />

                            <div className="relative border border-gray-500 rounded-[20px] z-10">
                                <div className="w-[300px] h-[220px] sm:w-[550px] sm:h-[360px] md:w-[650px] md:h-[450px] xl:w-[750px] xl:h-[500px] 2xl:w-[750px] 2xl:h-[500px] border-[20px] border-black rounded-[20px] overflow-hidden ">
                                    <img className="w-full h-full object-cover" src={project?.mutipleProjectImage[0]?.url} alt="Tablet Video" />
                                </div>

                                <div className="absolute top-20 right-0 sm:top-28 sm:-right-6 md:top-28 md:-right-10 lg:top-40 lg:-right-24 xl:top-40 xl:-right-28 2xl:top-32 2xl:-right-30  w-[120px] h-[200px] sm:w-[170px] sm:h-[300px] md:w-[220px] md:h-[390px] lg:w-[210px] lg:h-[390px] 2xl:w-[250px] 2xl:h-[430px] bg-black rounded-[10px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[45px] p-2 shadow-[0_0_0_2px_#333,0_20px_40px_rgba(0,0,0,0.3)] z-20">
                                    <div className="relative w-full h-full bg-black rounded-[10px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[45px] overflow-hidden">
                                        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-16 sm:w-[120px] h-3 sm:h-[25px] bg-black rounded-[12px] z-10" />
                                        <div className="relative w-full h-full bg-white rounded-[10px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[45px] overflow-hidden">
                                            <div className="absolute inset-0 rounded-[10px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[45px] overflow-hidden">
                                                <img
                                                    src={project?.mutipleProjectImage[0]?.url}
                                                    // autoPlay
                                                    // loop
                                                    // muted
                                                    // playsInline
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-white/80 rounded-md z-10" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )} */}










                    {isMobile === "web" && <div className="relative w-full xl:max-w-4xl 2xl:max-w-6xl mx-auto mb-12">
                        {project?.mockupsVideo[0]?.isLaptop && (
                            <div>
                                <img
                                    src={laptop_mockup}
                                    alt="Laptop Mockup"
                                    className="w-full h-full object-contain "
                                />
                                <div className="absolute top-[10.2%] left-[10.3%] w-[79.5%] h-[79.4%] overflow-hidden shadow-md shadow-black/50">
                                    <img

                                        className="w-full h-full object-cover cursor-pointer rounded-t-[10px]"
                                        src={project?.mockupsVideo[0]?.laptopMockupVideo[0]?.url}
                                    />
                                </div>

                                {/* <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-[90%] h-[10px] bg-[#aaa0c3]/40 blur-md rounded-full z-[-1]" /> */}

                            </div>
                        )}

                        {project?.mockupsVideo[0]?.isIos && <div className="hidden xl:block absolute top-[4%] -left-[39%] 2xl:top-[12.3%] 2xl:-left-[34.5%] xl:max-w-xl 2xl:max-w-2xl overflow-hidden -z-1">
                            <img src={ios_mockup} alt="" />
                            <div className="absolute top-[8.7%] 2xl:top-[8.9%] left-[31%] w-[38.3%] h-[81.9%] overflow-hidden rounded-[30px] 2xl:rounded-[35px] shadow-md shadow-black/50 ">
                                <img
                                    src={project?.mockupsVideo[0]?.iosMockupVideo[0]?.url}
                                    className="w-full h-full object-cover cursor-pointer"
                                />
                            </div>
                        </div>
                        }
                        {project?.mockupsVideo[0]?.isTablet &&
                            <div className="hidden xl:block absolute bottom-[5.7%] -right-[20%] transform -rotate-90 xl:max-w-xl 2xl:max-w-2xl">
                                <img src={tablet_mockup} alt="Tablet Mockup" className="w-full h-auto " />

                                <div className="absolute -top-[11.7%] left-[19%] w-[62%] xl:h-[518px] 2xl:h-[603px] overflow-hidden shadow-md shadow-black/50 transform rotate-90">
                                    <img
                                        src={project?.mockupsVideo[0]?.tabletMockupVideo[0]?.url}
                                        className="w-full h-full object-cover cursor-pointer rounded-[9px]"
                                    />
                                </div>
                             {/* <div className="absolute  w-[60%] h-[20px] bg-[#aaa0c3]/40 blur-md rounded-full z-[-1] rotate-90" /> */}

                            </div>
                        }
                    </div>}


                    {isMobile === "mobile" && <div className="flex flex-col sm:flex-row justify-center items-center mt-16">
                        {project?.mockupsVideo[0]?.isMobile && <div className="max-w-[500px] h-[550px] sm:h-[600px] md:h-[700px] relative">
                            <img className="w-full h-full" src={android_mockup} alt="" />
                            <div className="absolute top-[6.9%] left-[11.8%] w-[75.8%] h-[85.9%] overflow-hidden">
                                <img
                                    src={project?.mockupsVideo[0]?.mobileMockupVideo[0]?.url}
                                    className="w-full h-full object-cover cursor-pointer"
                                />
                            </div>
                        </div>}

                        {project?.mockupsVideo[0]?.isIos && <div className="max-w-[500px] h-[550px] sm:h-[600px] md:h-[680px] relative">
                            <img className="w-full h-full" src={ios_mockup1} alt="" />

                            <div className="absolute top-[3.1%] sm:top-[6.9%] md:top-[3.3%] left-[10.4%] w-[80.6%] sm:h-[85.5%] md:h-[91.8%] lg:h-[92.7%] rounded-[32px] md:rounded-[38px] overflow-hidden">
                                <img
                                    src={project?.mockupsVideo[0]?.iosMockupVideo[0]?.url}
                                    className="w-full h-full object-cover cursor-pointer"
                                />
                            </div>
                        </div>}
                    </div>}



                    {project?.link.length > 0 && <motion.div variants={itemVariants} className="mb-16 mt-44 ">
                        <div className="">
                            <h2 className="text-[26px] sm:text-4xl font-bold text-white mb-8 text-center">
                                Project Links
                            </h2>
                            <div className="flex justify-center flex-wrap gap-6 cursor-pointer">
                                {project?.link?.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link?.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full max-w-[350px]"
                                    >
                                        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                                            {link?.logo?.url && <img
                                                className="w-16 mx-auto mb-4"
                                                src={`${link?.logo?.url}`}
                                                alt={link?.title || "Platform Logo"}
                                            />}
                                            <h3 className="text-lg font-semibold text-white mb-2">
                                                {link?.title}
                                            </h3>
                                            {<p className="text-gray-400 text-sm">{link?.slogun}</p>}
                                        </div>
                                    </a>
                                ))}
                            </div>

                        </div>
                    </motion.div>}

                    {/* Technologies */}
                    <motion.div variants={itemVariants} className="mb-12 sm:mb-16 ">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-[26px] sm:text-4xl font-bold text-white mb-6 sm:mb-8">
                                Built With
                            </h2>
                            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                                {project?.techStack?.map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Badge
                                            variant="secondary"
                                            className="text-xs sm:text-sm bg-purple-500/20 text-purple-300 border-purple-500/30 px-3 sm:px-4 py-1 sm:py-2 font-medium hover:bg-purple-500/30 transition-all duration-300"
                                        >
                                            {tech?.title}
                                        </Badge>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Key Features */}
                    <motion.div variants={itemVariants} className="mb-12 sm:mb-16 ">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-[26px] sm:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">
                                Key Features
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                {project?.feature?.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.2 }}
                                        className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-3 sm:p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className="bg-purple-500/20 p-3 rounded-lg">
                                                {/* <div className="text-purple-400">{feature.icon}</div> */}
                                                <img
                                                    className="w-5 h-5"
                                                    src={feature?.logo?.url || feature_logo}
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.src = feature_logo;
                                                    }}
                                                    alt="feature logo"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                                                    {feature?.title}
                                                </h3>
                                                <p className="text-gray-300 leading-relaxed">
                                                    {feature?.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Problems & Solutions */}
                    {project?.problem && (<motion.div variants={itemVariants} className="mb-12 sm:mb-16 ">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-[26px] sm:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">
                                Problems & Solutions
                            </h2>
                            <div className="space-y-8">
                                {project?.problem?.map((problem, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.3 }}
                                        className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
                                    >
                                        {/* Problem */}
                                        <div className="bg-red-900/20 backdrop-blur-sm border border-red-700/30 rounded-xl p-3 sm:p-6">
                                            <div className="flex items-start space-x-4">
                                                <div className="bg-red-500/20 p-3 rounded-l g">
                                                    <AlertCircle className="text-red-400 w-5 h-5" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-red-300 text-sm font-medium mb-2">
                                                        PROBLEM
                                                    </div>
                                                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                                                        {problem?.title}
                                                    </h3>
                                                    <p className="text-white leading-relaxed">
                                                        {problem?.problemDetail}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Solution */}
                                        {project?.solution[index] && (<div className="bg-green-900/20 backdrop-blur-sm border border-green-700/30 rounded-xl p-3 sm:p-6">
                                            <div className="flex items-start space-x-4">
                                                <div className="bg-green-500/20 p-3 rounded-lg">
                                                    <div className="text-green-400">
                                                        <Lightbulb className="w-5 h-5" />
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-green-300 text-sm font-medium mb-2">
                                                        SOLUTION
                                                    </div>
                                                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                                                        {project?.solution[index]?.title}
                                                    </h3>
                                                    <p className="text-gray-300 leading-relaxed mb-3">
                                                        {project?.solution[index]?.solutionDetail}
                                                    </p>
                                                    <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-[13px] font-medium">
                                                        <CheckCircle className="w-4 h-4 mr-2" />
                                                        {project?.solution[index]?.impact}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>)}

                    {/* CTA Section */}
                    <motion.div variants={itemVariants} className="text-center">
                        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
                            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                                Interested in Similar Work?
                            </h2>
                            <p className="text-gray-300 mb-6 text-sm sm:text-base">
                                {portfolioData?.message}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to={`/${employeeName}`}
                                    state={{ scrollTo: "contact" }}>
                                    <Button
                                        size="lg"
                                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-105"
                                    >
                                        Get In Touch
                                    </Button>
                                </Link>
                                <Link
                                    to={`/${employeeName}`}
                                    state={{ scrollTo: "projects" }}
                                >
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="w-full border-2 border-purple-400/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 font-semibold px-8 py-3 rounded-xl transition-all duration-300"
                                    >
                                        View More Projects
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>

    );
}
export default ProjectDetailPage;









{/* Image Slider */ }
{/* <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
                        <div className="relative max-w-5xl mx-auto">
                            <div
                                onMouseEnter={() => clearInterval(window.imageAutoplay)}
                                onMouseLeave={() => {
                                    window.imageAutoplay = setInterval(() => {
                                        setCurrentImageIndex((prev) => (prev + 1) % project?.mutipleProjectImage?.length);
                                    }, 4000);
                                }} className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-gray-700/50">
                                <motion.img
                                    key={currentImageIndex}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    src={`${project?.mutipleProjectImage[currentImageIndex]?.url}`}
                                    alt={`Project screenshot ${currentImageIndex + 1}`}
                                    className="w-full h-full object-cover"
                                />

                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </button>

                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                    {project?.image?.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                                                ? "bg-purple-400"
                                                : "bg-gray-500 hover:bg-gray-300"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div> */}






{/* {isMobile === "web" && (
                        <div className="relative">
                            <div className="hidden sm:block absolute top-[85px] md:top-[97px] lg:top-[207px] xl:top-[249px] xl:left-24 2xl:left-50 sm:w-[160px] sm:h-[250px] md:w-[180px] md:h-[310px] lg:w-[190px] lg:h-[338px] bg-black rounded-[10px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[40px] p-2 shadow-[0_0_0_2px_#333,0_20px_40px_rgba(0,0,0,0.3)] z-10">
                                <div className="relative w-full h-full bg-black rounded-[10px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[37px] overflow-hidden">
                                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-[90px] lg:w-[120px] h-[25px] bg-black rounded-[12px] z-10" />
                                    <div className="relative w-full h-full bg-white rounded-[10px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[4px] overflow-hidden">
                                        <div className="absolute inset-0 rounded-[10px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[40px] overflow-hidden">
                                            <img
                                                src={video}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-white/80 rounded-md z-10" />
                                    </div>
                                </div>
                            </div>

                            <div className=" flex items-center justify-center p-4">
                                <div className="relative">
                                    <img
                                        src={laptop}
                                        alt="Laptop"
                                        className="w-[1000px] h-auto"
                                    />

                                    <div
                                        className="absolute"
                                        style={{
                                            top: '12.1%',
                                            left: '12.9%',
                                            width: '75%',
                                            height: '76%',
                                        }}
                                    >
                                        <img
                                            ref={videoRef}
                                            src={video}
                                            className="w-full h-full object-cover rounded-t-lg shadow-lg overflow-hidden"

                                        />
                                    </div>
                                </div>


                            </div>

                            <div className="hidden lg:block lg:absolute lg:top-[245px] lg:right-0 xl:top-[187px] 2xl:top-[186px] xl:-right-10 2xl:-right-10 z-10 relative border border-gray-500 rounded-[20px]">

                                <div className="lg:w-[400px] h-[300px] xl:w-[500px] xl:h-[400px] 2xl:w-[580px] 2xl:h-[400px] border-[20px] border-black rounded-[20px] overflow-hidden">
                                    <img className="w-full h-full object-contain" src={video} alt="" />
                                </div>
                            </div>
                        </div>
                    )} */}

{/* {isMobile === "mobile" && (
                        <div className="relative flex flex-col items-center justify-center px-4 py-10 ">
                            <img
                                className="hidden sm:block absolute sm:-left-20 sm:top-44 md:-left-30 md:top-44 lg:left-0 lg:top-60 xl:left-24 xl:top-60 2xl:top-62 2xl:left-44  -rotate-[30deg] z-30 sm:w-[300px] md:w-[400px]"
                                src={pencil}
                                alt="Pencil"
                            />

                            <div className="relative border border-gray-500 rounded-[20px] z-10">
                                <div className="w-[300px] h-[220px] sm:w-[550px] sm:h-[360px] md:w-[650px] md:h-[450px] xl:w-[750px] xl:h-[500px] 2xl:w-[750px] 2xl:h-[500px] border-[20px] border-black rounded-[20px] overflow-hidden ">
                                    <img className="w-full h-full object-cover" src={project?.mutipleProjectImage[0]?.url} alt="Tablet Video" />
                                </div>

                                <div className="absolute top-20 right-0 sm:top-28 sm:-right-6 md:top-28 md:-right-10 lg:top-40 lg:-right-24 xl:top-40 xl:-right-28 2xl:top-32 2xl:-right-30  w-[120px] h-[200px] sm:w-[170px] sm:h-[300px] md:w-[220px] md:h-[390px] lg:w-[210px] lg:h-[390px] 2xl:w-[250px] 2xl:h-[430px] bg-black rounded-[10px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[45px] p-2 shadow-[0_0_0_2px_#333,0_20px_40px_rgba(0,0,0,0.3)] z-20">
                                    <div className="relative w-full h-full bg-black rounded-[10px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[45px] overflow-hidden">
                                        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-16 sm:w-[120px] h-3 sm:h-[25px] bg-black rounded-[12px] z-10" />
                                        <div className="relative w-full h-full bg-white rounded-[10px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[45px] overflow-hidden">
                                            <div className="absolute inset-0 rounded-[10px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[45px] overflow-hidden">
                                                <img
                                                    src={project?.mutipleProjectImage[0]?.url}
                                                    // autoPlay
                                                    // loop
                                                    // muted
                                                    // playsInline
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-white/80 rounded-md z-10" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )} */}
