// import React, { useEffect, useState } from "react";
// import { ArrowUp } from "lucide-react";
// import { useLocation } from "react-router-dom";

// const ScrollToTop = () => {
//   const { pathname } = useLocation(); 
//   const [isVisible, setIsVisible] = useState(false);

//   const handleScroll = () => {
//     const scrolled = window.scrollY;
//     if (scrolled > 390) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [pathname]);

//   return (
//     <>
//       {isVisible && (
//         <button
//          aria-label='Scroll Up'
//           onClick={scrollToTop}
//           className="fixed bottom-6 right-4 z-50 p-4 rounded-full bg-black text-white dark:bg-white dark:text-black shadow-lg hover:scale-110 transition-transform cursor-pointer" 
//         >
//           <ArrowUp size={20} />
//         </button>
//       )}
//     </>
//   );
// };

// export default ScrollToTop;



import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    if (scrolled > 390) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <>
      {isVisible && (
        <button
          aria-label="Scroll Up"
          onClick={scrollToTop}
          className="fixed bottom-8 right-4 md:bottom-10 md:right-4 lg:bottom-12 lg:right-4 z-50 p-3 sm:p-4 rounded-full bg-white text-black shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer "
        >
          <ArrowUp size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
