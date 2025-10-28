// import React, { useState, useEffect, useContext, useMemo, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Button from "./Button";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Star,
//   Quote,
// } from "lucide-react";
// import { DataContext } from "../context/dataContext";
// import Rating from '../components/Rating'

// const FlipCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isFlipping, setIsFlipping] = useState(false);
//   const [direction, setDirection] = useState(0);
//   const { portfolioData } = useContext(DataContext);

//   // Get recommendations or use fallback data
//   const recommendations = portfolioData?.recommendations;

//   // Gradient patterns for cards
//   const gradients = [
//     "from-blue-500 via-indigo-500 to-purple-600",
//     "from-purple-600 via-pink-500 to-rose-500",
//     "from-emerald-500 via-teal-500 to-cyan-500",
//     "from-orange-400 via-rose-500 to-pink-600",
//     "from-sky-500 via-blue-600 to-indigo-700",
//     "from-fuchsia-500 via-violet-600 to-purple-700",
//     "from-lime-400 via-emerald-500 to-green-600",
//     "from-yellow-400 via-orange-500 to-rose-600",
//   ];

//    const nextCard = useCallback(() => {
//     if (isFlipping || recommendations?.length <= 1) return;
//     setIsFlipping(true);
//     setDirection(1);
//     setCurrentIndex((prev) => (prev + 1) % recommendations?.length);
//   }, [isFlipping, recommendations?.length]);

//   const prevCard = useCallback(() => {
//     if (isFlipping || recommendations?.length <= 1) return;
//     setIsFlipping(true);
//     setDirection(-1);
//     setCurrentIndex((prev) => (prev - 1 + recommendations?.length) % recommendations?.length);
//   }, [isFlipping, recommendations.length]);

//   const goToCard = useCallback((index) => {
//     if (isFlipping || index === currentIndex || recommendations?.length <= 1) return;
//     setIsFlipping(true);
//     setDirection(index > currentIndex ? 1 : -1);
//     setCurrentIndex(index);
//   }, [isFlipping, currentIndex, recommendations?.length]);

//   // Auto-play functionality
//   useEffect(() => {
//     if (recommendations.length === 0) return;

//     const interval = setInterval(() => {
//       nextCard();
//     }, 4000); // Increased time for reading testimonials

//     return () => clearInterval(interval);
//   }, [currentIndex, recommendations?.length, nextCard]);

//   // Reset flipping state after animation
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsFlipping(false);
//     }, 600);

//     return () => clearTimeout(timer);
//   }, [currentIndex]);

//   // Don't render if no recommendations
//   if (!recommendations || recommendations?.length === 0) {
//     return (
//       <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen flex items-center">
//         <div className="max-w-4xl mx-auto text-center">
//           <p className="text-2xl sm:text-3xl font-bold text-white mb-4">No Recommendations Available</p>
//           <p className="text-slate-300 text-base sm:text-lg">Recommendations will appear here when available.</p>
//         </div>
//       </section>
//     );
//   }

//   const slideVariants = useMemo(() => ({
//     enter: (direction) => ({
//       rotateY: direction > 0 ? 90 : -90,
//       opacity: 0,
//       scale: 0.8,
//     }),
//     center: {
//       rotateY: 0,
//       opacity: 1,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 30,
//       },
//     },
//     exit: (direction) => ({
//       rotateY: direction < 0 ? 90 : -90,
//       opacity: 0,
//       scale: 0.8,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 30,
//       },
//     }),
//   }), []);

//   const currentRecommendation = recommendations[currentIndex];
//   const currentGradient = gradients[currentIndex % gradients?.length];

//   return (
//    <section>
//      <div className="flex justify-end gap-3 px-8 mt-3 sm:hidden">
//       <Button
//             aria-label="Previous Card"
//             variant="outline"
//             size="lg"
//             onClick={nextCard}
//             disabled={isFlipping}
//             className="bg-white/10 w-7 h-7 rounded-md flex items-center justify-center"
//           >
//             <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
//           </Button>


//           <Button
//             aria-label="Previous Card"
//             variant="outline"
//             size="lg"
//             onClick={prevCard}
//             disabled={isFlipping}
//             className="bg-white/10 w-7 h-7 rounded-md flex items-center justify-center"
//           >
//             <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
//           </Button>
//      </div>
     
//      <div className="px-2 sm:px-4 py-4 sm:py-6 lg:py-8">
//       <div className="max-w-7xl mx-auto w-full">
//         {/* Main Carousel Container */}
//         <div className="sm:relative flex items-center justify-center">
//           {/* Previous Button - Responsive positioning */}
//           <Button
//             aria-label="Previous Card"
//             variant="outline"
//             size="lg"
//             onClick={nextCard}
//             disabled={isFlipping}
//             className="absolute 
//               left-1 sm:left-2 md:left-4 lg:left-0 
//               top-1/2 -translate-y-1/2 z-20 
//               bg-gray-700/10 dark:bg-white/10 backdrop-blur-sm 
//               border-white/20 dark:text-white 
//               dark:hover:bg-white/20 hover:bg-gray-900/20 
//               disabled:opacity-50 disabled:cursor-not-allowed 
//               h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 
//               p-0 rounded-full flex items-center justify-center
//               transition-all duration-200"
//           >
//             <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
//           </Button>

//           {/* Card Display Area - Fully responsive */}
//           <div className="relative 
//             w-full max-w-[85vw] sm:max-w-[75vw] md:max-w-2xl lg:max-w-3xl
//             h-auto sm:h-72 md:h-80 lg:h-96
//              sm:mx-8 md:mx-12 lg:mx-16 
//             perspective-1000">
//             <AnimatePresence mode="wait" custom={direction}>
//               <motion.div
//                 key={currentIndex}
//                 custom={direction}
//                 variants={slideVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 className="absolute inset-0 preserve-3d"
//                 style={{ transformStyle: "preserve-3d" }}
//               >
//                 <div
//                   className={`relative w-full 
//                     bg-gradient-to-br ${currentGradient} 
//                     rounded-lg sm:rounded-xl md:rounded-2xl 
//                     shadow-xl sm:shadow-2xl overflow-hidden 
//                     transform-gpu 
//                     p-3 sm:p-4 md:p-6 lg:p-8
//                     min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px]`}
//                 >
//                   {/* Background Pattern - Responsive */}
//                   <div className="absolute inset-0 opacity-10">
//                     <div className="absolute 
//                       top-2 sm:top-4 right-2 sm:right-4 
//                       w-16 sm:w-20 md:w-24 lg:w-32 
//                       h-16 sm:h-20 md:h-24 lg:h-32 
//                       bg-white/90 rounded-full 
//                       -translate-y-4 sm:-translate-y-6 md:-translate-y-8 
//                       translate-x-4 sm:translate-x-6 md:translate-x-8" />
//                     <div className="absolute 
//                       bottom-2 sm:bottom-4 left-2 sm:left-4 
//                       w-12 sm:w-16 md:w-20 lg:w-24 
//                       h-12 sm:h-16 md:h-20 lg:h-24 
//                       bg-white/90 rounded-full 
//                       translate-y-2 sm:translate-y-4 
//                       -translate-x-2 sm:-translate-x-4" />
//                   </div>

//                   {/* Quote Icon - Responsive */}
//                   <div className="text-white/30">
//                     <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
//                   </div>

//                   {/* Card Content - Responsive layout */}
//                   <div className="relative h-full flex flex-col justify-center text-white 
//                     mt-2 sm:mt-3 md:mt-4">
                    
//                     {/* Testimonial Text - Responsive typography */}
//                     <div className="mb-4 sm:mb-6 md:mb-8 flex-1 flex items-center">
//                       <blockquote className="
//                         text-sm sm:text-base md:text-lg lg:text-xl 
//                         leading-relaxed font-medium italic 
//                         line-clamp-4 sm:line-clamp-none">
//                         "{currentRecommendation?.caption}"
//                       </blockquote>
//                     </div>

//                     {/* Client Info - Responsive layout */}
//                     <div className="flex flex-col sm:flex-row items-start sm:items-center 
//                       gap-3 sm:gap-4 md:gap-6">
                      
//                       {/* Avatar and Details Container */}
//                       <div className="flex items-center gap-3 sm:gap-4 flex-1">
//                         <div className="
//                           w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 
//                           rounded-full bg-white/20 backdrop-blur-sm 
//                           border-2 border-white/30 flex items-center justify-center 
//                           text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
//                           {currentRecommendation?.name?.slice(0, 1)}
//                         </div>

//                         <div className="flex-1 min-w-0">
//                           <p className="text-sm sm:text-base md:text-lg lg:text-xl 
//                             font-bold mb-1 truncate">
//                             {currentRecommendation?.name}
//                           </p>
//                           <p className="text-white/80 
//                             text-xs sm:text-sm md:text-base 
//                             line-clamp-2 sm:line-clamp-1">
//                             {currentRecommendation?.profile}
//                           </p>
//                         </div>
//                       </div>

//                       {/* Rating Stars - Responsive */}
//                       {/* <div className="flex gap-1 sm:gap-1.5 self-start sm:self-center">
//                         {[...Array(5)].map((_, i) => (
//                           <Star key={i} className="
//                             w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 
//                             fill-yellow-400 text-yellow-400" />
//                         ))}
//                       </div> */}

//                       {currentRecommendation?.rating && (
//                         <Rating rating={currentRecommendation?.rating}/>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>

//             {/* Side Cards Preview - Only visible on larger screens */}
//             <div className="absolute inset-0 pointer-events-none hidden lg:block">
//               {recommendations.length > 1 && (
//                 <>
//                   {/* Previous Card Preview */}
//                   <motion.div
//                     className="absolute -left-12 xl:-left-16 top-8 xl:top-12 
//                       w-48 xl:w-64 h-48 xl:h-64 opacity-10 scale-75"
//                     animate={{ x: direction === -1 ? 20 : 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <div
//                       className={`w-full h-full bg-gradient-to-br ${
//                         gradients[(currentIndex - 1 + recommendations?.length) % recommendations?.length % gradients?.length]
//                       } rounded-xl shadow-lg transform rotate-y-12`}
//                     />
//                   </motion.div>

//                   {/* Next Card Preview */}
//                   <motion.div
//                     className="absolute -right-12 xl:-right-16 top-8 xl:top-12 
//                       w-48 xl:w-64 h-48 xl:h-64 opacity-10 scale-75"
//                     animate={{ x: direction === 1 ? -20 : 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <div
//                       className={`w-full h-full bg-gradient-to-br ${
//                         gradients[(currentIndex + 1) % recommendations?.length % gradients?.length]
//                       } rounded-xl shadow-lg transform -rotate-y-12`}
//                     />
//                   </motion.div>
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Next Button - Responsive positioning */}

//            <Button
//             aria-label="Previous Card"
//             variant="outline"
//             size="lg"
//             onClick={prevCard}
//             disabled={isFlipping}
//             className="absolute 
//               right-1 sm:right-2 md:right-4 lg:right-[0] 
//               top-1/2 -translate-y-1/2 z-20 
//               bg-gray-700/10 dark:bg-white/10 backdrop-blur-sm 
//               border-white/20 dark:text-white 
//               dark:hover:bg-white/20 hover:bg-gray-900/20 
//               disabled:opacity-50 disabled:cursor-not-allowed 
//               h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 
//               p-0 rounded-full flex items-center justify-center
//               transition-all duration-200"
//           >
//             <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
//           </Button>

//         </div>

//         {/* Pagination Dots - Responsive */}
//         <div className="hidden sm:flex justify-center gap-2 sm:gap-4 
//           mt-6 sm:mt-16 md:mt-28 lg:mt-20">
//           {recommendations.map((_, index) => (
//             <button
//               aria-label={`Go to slide ${index + 1}`}
//               key={index}
//               onClick={() => goToCard(index)}
//               disabled={isFlipping}
//               className={`
//                 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 
//                 rounded-full cursor-pointer transition-all duration-300 
//                 ${index === currentIndex
//                   ? " scale-125 bg-white"
//                   : "bg-white/30  hover:bg-white/50"
//                 } disabled:cursor-not-allowed
//                 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
             
//    </section>
//   );
// };

// export default FlipCarousel;



import React, { useState, useEffect, useContext, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
} from "lucide-react";
import { DataContext } from "../context/dataContext";
import Rating from '../components/Rating'

const FlipCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [direction, setDirection] = useState(0);
  const { portfolioData } = useContext(DataContext);

  // Get recommendations or use fallback data
  const recommendations = portfolioData?.recommendations;

  // Gradient patterns for cards
  const gradients = [
    "from-blue-500 via-indigo-500 to-purple-600",
    "from-purple-600 via-pink-500 to-rose-500",
    "from-emerald-500 via-teal-500 to-cyan-500",
    "from-orange-400 via-rose-500 to-pink-600",
    "from-sky-500 via-blue-600 to-indigo-700",
    "from-fuchsia-500 via-violet-600 to-purple-700",
    "from-lime-400 via-emerald-500 to-green-600",
    "from-yellow-400 via-orange-500 to-rose-600",
  ];

  const nextCard = useCallback(() => {
    if (isFlipping || recommendations?.length <= 1) return;
    setIsFlipping(true);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % recommendations?.length);
  }, [isFlipping, recommendations?.length]);

  const prevCard = useCallback(() => {
    if (isFlipping || recommendations?.length <= 1) return;
    setIsFlipping(true);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + recommendations?.length) % recommendations?.length);
  }, [isFlipping, recommendations?.length]);

  const goToCard = useCallback((index) => {
    if (isFlipping || index === currentIndex || recommendations?.length <= 1) return;
    setIsFlipping(true);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [isFlipping, currentIndex, recommendations?.length]);

  // Auto-play functionality
  useEffect(() => {
    if (recommendations?.length === 0) return;

    const interval = setInterval(() => {
      nextCard();
    }, 4000); // Increased time for reading testimonials

    return () => clearInterval(interval);
  }, [currentIndex, recommendations?.length, nextCard]);

  // Reset flipping state after animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFlipping(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Don't render if no recommendations
  if (!recommendations || recommendations?.length === 0) {
    return (
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl sm:text-3xl font-bold text-white mb-4">No Recommendations Available</p>
          <p className="text-slate-300 text-base sm:text-lg">Recommendations will appear here when available.</p>
        </div>
      </section>
    );
  }

  const slideVariants = useMemo(() => ({
    enter: (direction) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction) => ({
      rotateY: direction < 0 ? 90 : -90,
      opacity: 0,
      scale: 0.8,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    }),
  }), []);

  const currentRecommendation = recommendations[currentIndex];
  const currentGradient = gradients[currentIndex % gradients?.length];

  return (
   <section>
     <div className="flex justify-end gap-3 px-8 mt-3 sm:hidden">
      <Button
            aria-label="Previous Card"
            variant="outline"
            size="lg"
            onClick={prevCard}
            // disabled={isFlipping}
            className="bg-white/10 w-7 h-7 rounded-md flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </Button>

          <Button
            aria-label="Next Card"
            variant="outline"
            size="lg"
            onClick={nextCard}
            // disabled={isFlipping}
            className="bg-white/10 w-7 h-7 rounded-md flex items-center justify-center"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </Button>
     </div>
     
     <div className="px-2 sm:px-4 py-4 sm:py-6 lg:py-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Carousel Container */}
        <div className="sm:relative flex items-center justify-center">
          {/* Previous Button - Responsive positioning */}
          <Button
            aria-label="Previous Card"
            variant="outline"
            size="lg"
            onClick={prevCard}
            // disabled={isFlipping}
            className="absolute 
              left-1 sm:left-2 md:left-4 lg:left-0 
              top-1/2 -translate-y-1/2 z-20 
              bg-gray-700/10 dark:bg-white/10 backdrop-blur-sm 
              border-white/20 dark:text-white 
              dark:hover:bg-white/20 hover:bg-gray-900/20 
              disabled:opacity-50 disabled:cursor-not-allowed 
              h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 
              p-0 rounded-full flex items-center justify-center
              transition-all duration-200"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </Button>

          {/* Card Display Area - Fully responsive */}
          <div className="relative 
            w-full max-w-[85vw] sm:max-w-[75vw] md:max-w-2xl lg:max-w-3xl
            h-auto sm:h-72 md:h-80 lg:h-96
             sm:mx-8 md:mx-12 lg:mx-16 
            perspective-1000">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 preserve-3d"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className={`relative w-full 
                    bg-gradient-to-br ${currentGradient} 
                    rounded-lg sm:rounded-xl md:rounded-2xl 
                    shadow-xl sm:shadow-2xl overflow-hidden 
                    transform-gpu 
                    p-3 sm:p-4 md:p-6 lg:p-8
                    min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px]`}
                >
                  {/* Background Pattern - Responsive */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute 
                      top-2 sm:top-4 right-2 sm:right-4 
                      w-16 sm:w-20 md:w-24 lg:w-32 
                      h-16 sm:h-20 md:h-24 lg:h-32 
                      bg-white/90 rounded-full 
                      -translate-y-4 sm:-translate-y-6 md:-translate-y-8 
                      translate-x-4 sm:translate-x-6 md:translate-x-8" />
                    <div className="absolute 
                      bottom-2 sm:bottom-4 left-2 sm:left-4 
                      w-12 sm:w-16 md:w-20 lg:w-24 
                      h-12 sm:h-16 md:h-20 lg:h-24 
                      bg-white/90 rounded-full 
                      translate-y-2 sm:translate-y-4 
                      -translate-x-2 sm:-translate-x-4" />
                  </div>

                  {/* Quote Icon - Responsive */}
                  <div className="text-white/30">
                    <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                  </div>

                  {/* Card Content - Responsive layout */}
                  <div className="relative h-full flex flex-col justify-center text-white 
                    mt-2 sm:mt-3 md:mt-4">
                    
                    {/* Testimonial Text - Responsive typography */}
                    <div className="mb-4 sm:mb-6 md:mb-8 flex-1 flex items-center">
                      <blockquote className="
                        text-sm sm:text-base md:text-lg lg:text-xl 
                        leading-relaxed font-medium italic 
                        line-clamp-4 sm:line-clamp-none">
                        "{currentRecommendation?.caption}"
                      </blockquote>
                    </div>

                    {/* Client Info - Responsive layout */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center 
                      gap-3 sm:gap-4 md:gap-6">
                      
                      {/* Avatar and Details Container */}
                      <div className="flex items-center gap-3 sm:gap-4 flex-1">
                        <div className="
                          w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 
                          rounded-full bg-white/20 backdrop-blur-sm 
                          border-2 border-white/30 flex items-center justify-center 
                          text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
                          {currentRecommendation?.name?.slice(0, 1)}
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl 
                            font-bold mb-1 truncate">
                            {currentRecommendation?.name}
                          </p>
                          <p className="text-white/80 
                            text-xs sm:text-sm md:text-base 
                            line-clamp-2 sm:line-clamp-1">
                            {currentRecommendation?.profile}
                          </p>
                        </div>
                      </div>

                      {/* Rating Stars - Responsive */}
                      {currentRecommendation?.rating && (
                        <Rating rating={currentRecommendation?.rating}/>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Side Cards Preview - Only visible on larger screens */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
              {recommendations.length > 1 && (
                <>
                  <motion.div
                    className="absolute -left-12 xl:-left-16 top-8 xl:top-12 
                      w-48 xl:w-64 h-48 xl:h-64 opacity-10 scale-75"
                    animate={{ x: direction === -1 ? 20 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`w-full h-full bg-gradient-to-br ${
                        gradients[(currentIndex - 1 + recommendations?.length) % recommendations?.length % gradients?.length]
                      } rounded-xl shadow-lg transform rotate-y-12`}
                    />
                  </motion.div>

                  <motion.div
                    className="absolute -right-12 xl:-right-16 top-8 xl:top-12 
                      w-48 xl:w-64 h-48 xl:h-64 opacity-10 scale-75"
                    animate={{ x: direction === 1 ? -20 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`w-full h-full bg-gradient-to-br ${
                        gradients[(currentIndex + 1) % recommendations?.length % gradients?.length]
                      } rounded-xl shadow-lg transform -rotate-y-12`}
                    />
                  </motion.div>
                </>
              )}
            </div>
          </div>

          {/* Next Button - Responsive positioning */}
           <Button
            aria-label="Next Card"
            variant="outline"
            size="lg"
            onClick={nextCard}
            // disabled={isFlipping}
            className="absolute 
              right-1 sm:right-2 md:right-4 lg:right-[0] 
              top-1/2 -translate-y-1/2 z-20 
              bg-gray-700/10 dark:bg-white/10 backdrop-blur-sm 
              border-white/20 dark:text-white 
              dark:hover:bg-white/20 hover:bg-gray-900/20 
              disabled:opacity-50 disabled:cursor-not-allowed 
              h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 
              p-0 rounded-full flex items-center justify-center
              transition-all duration-200"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </Button>

        </div>

        {/* Pagination Dots - Responsive */}
        <div className="hidden sm:flex justify-center gap-2 sm:gap-4 
          mt-6 sm:mt-16 md:mt-28 lg:mt-20">
          {recommendations.map((_, index) => (
            <button
              aria-label={`Go to slide ${index + 1}`}
              key={index}
              onClick={() => goToCard(index)}
              disabled={isFlipping}
              className={`
                w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 
                rounded-full cursor-pointer transition-all duration-300 
                ${index === currentIndex
                  ? " scale-125 bg-white"
                  : "bg-white/30  hover:bg-white/50"
                } disabled:cursor-not-allowed
                hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent`}
            />
          ))}
        </div>
      </div>
    </div>
   </section>
  );
};

export default FlipCarousel;