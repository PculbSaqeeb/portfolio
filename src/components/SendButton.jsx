// import React, { useRef } from "react";
// // import { gsap } from "gsap";

// const SendButton = () => {
//   const iconRef = useRef(null);

//   const handleClick = () => {
//     const icon = iconRef.current;

//     gsap.timeline()
//       .to(icon, {
//         x: -8,
//         y: 8,
//         duration: 0.4,
//         ease: "none",
//       })
//       .to(icon, {
//         x: "50vw",
//         y: "-50vh",
//         duration: 0.4,
//       })
//       .set(icon, {
//         x: "-50vw",
//         y: "50vh",
//       })
//       .to(icon, {
//         x: 0,
//         y: 0,
//         duration: 0.3,
//       });
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className="flex items-center justify-center gap-2 py-1 bg-black dark:bg-transparent dark:bg-gradient-to-r dark:from-purple-400 dark:via-indigo-400 dark:to-blue-500 
//              transition-all duration-300 transform "
//       style={{
//         boxShadow:
//           "1px 1px 1px 1px #a3b1c6, -1px -1px 1px 0px rgba(255, 255, 255, 0.6)",
//         borderRadius: "3rem",
//       }}
//     >
//       <span className="text-lg">Send Message</span>

//       <span
//         className="w-[3rem] h-[3rem] flex justify-center items-center rounded-full"
//       // style={{
//       //   boxShadow:
//       //     "9px 9px 16px 0px #a3b1c6, -9px -9px 16px 0px rgba(255, 255, 255, 0.6)",
//       // }}
//       >
//         {/* <svg
//           ref={iconRef}
//           viewBox="0 0 512.005 512.005"
//           className="w-4 h-4 fill-current transition-transform duration-300"
//         >
//           <path d="M511.658 51.675c2.496-11.619-8.895-21.416-20.007-17.176l-482 184a15 15 0 00-.054 28.006L145 298.8v164.713a15 15 0 0028.396 6.75l56.001-111.128 136.664 101.423c8.313 6.17 20.262 2.246 23.287-7.669C516.947 34.532 511.431 52.726 511.658 51.675zm-118.981 52.718L157.874 271.612 56.846 232.594zM175 296.245l204.668-145.757c-176.114 185.79-166.916 176.011-167.684 177.045-1.141 1.535 1.985-4.448-36.984 72.882zm191.858 127.546l-120.296-89.276 217.511-229.462z" />
//         </svg> */}
//       </span>
//     </button>
//   );
// };

// export default SendButton;
