// import React from 'react'
// import loader from '../assets/video/Animation - 1750309571043.gif'

// const Loader = () => {
//   return (
//     <div className='flex items-center justify-center min-h-screen   '>
//       <img className='w-[200px]' src={loader} alt="" />
//     </div>
//   )
// }

// export default Loader


// import { useEffect, useState } from "react";

// const Loader=({
//   onComplete,
//   duration = 2000,
// })=> {
//   const [progress, setProgress] = useState(0);
//   const [loadingText, setLoadingText] = useState("Initializing");
//   const [isComplete, setIsComplete] = useState(false);
//   const [currentPhase, setCurrentPhase] = useState(0);

//   const loadingSteps = [
//     { text: "Initializing...", emoji: "⚡", color: "from-blue-500 to-cyan-500" },
//     { text: "Loading Skills...", emoji: "🚀", color: "from-purple-500 to-pink-500" },
//     { text: "Preparing Portfolio...", emoji: "✨", color: "from-green-500 to-blue-500" },
//     { text: "Optimizing Experience...", emoji: "🔮", color: "from-orange-500 to-red-500" },
//     { text: "Almost Ready...", emoji: "🎯", color: "from-indigo-500 to-purple-500" },
//     { text: "Welcome!", emoji: "🎉", color: "from-emerald-500 to-teal-500" },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         const newProgress = prev + Math.random() * 2 + 0.5;

//         // Update phase and loading text based on progress
//         const phaseIndex = Math.floor((newProgress / 100) * loadingSteps.length);
//         if (phaseIndex < loadingSteps.length && phaseIndex !== currentPhase) {
//           setCurrentPhase(phaseIndex);
//           setLoadingText(loadingSteps[phaseIndex].text);
//         }

//         if (newProgress >= 100) {
//           clearInterval(interval);
//           setIsComplete(true);
//           setTimeout(() => {
//             onComplete?.();
//           }, 800);
//           return 100;
//         }

//         return newProgress;
//       });
//     }, duration / 150);

//     return () => clearInterval(interval);
//   }, [duration, onComplete, currentPhase]);

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
//       {/* Animated Grid Background */}
//       <div className="absolute inset-0 opacity-20">
//         <div
//           className="w-full h-full"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(60, 131, 246, 0.3) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(60, 131, 246, 0.3) 1px, transparent 1px)
//             `,
//             backgroundSize: '50px 50px',
//             animation: 'grid-move 20s linear infinite'
//           }}
//         />
//       </div>

//       {/* Dynamic Particles System */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(50)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute rounded-full opacity-60 float-animation"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             width: `${Math.random() * 6 + 2}px`,
//             height: `${Math.random() * 6 + 2}px`,
//             backgroundColor: ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'][i % 5],
//             animationDuration: `${3 + Math.random() * 4}s`,
//             animationDelay: `${Math.random() * 5}s`,
//           }}
//         />
//       ))}
//       </div>

//       {/* Morphing Background Blobs */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-30 bg-gradient-to-r from-blue-500 to-purple-600"
//              style={{
//                left: '10%',
//                top: '10%',
//                animation: 'morph1 8s ease-in-out infinite'
//              }} />
//         <div className="absolute w-80 h-80 rounded-full blur-3xl opacity-30 bg-gradient-to-r from-purple-500 to-pink-600"
//              style={{
//                right: '10%',
//                top: '50%',
//                animation: 'morph2 10s ease-in-out infinite reverse'
//              }} />
//         <div className="absolute w-72 h-72 rounded-full blur-3xl opacity-30 bg-gradient-to-r from-cyan-500 to-blue-600"
//              style={{
//                left: '50%',
//                bottom: '10%',
//                transform: 'translateX(-50%)',
//                animation: 'morph3 12s ease-in-out infinite'
//              }} />
//       </div>

//       {/* Main Loader Content */}
//       <div className="relative flex flex-col items-center space-y-12 z-10">
//         {/* Ultra Advanced Loader Animation */}
//         <div className="relative">
//           {/* Outermost Rotation Ring */}
//           {/* <div className="w-48 h-48 rounded-full border-2 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30"
//                style={{ animation: 'rotate360 4s linear infinite' }}>
//             <div className="absolute inset-2 rounded-full border-2 border-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-50"
//                  style={{ animation: 'rotate360 3s linear infinite reverse' }}>

            
//               <div className="absolute inset-4 rounded-full border-2 border-cyan-400 opacity-60"
//                    style={{ animation: 'pulse-scale 2s ease-in-out infinite' }}>

              
//                 <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-80"
//                      style={{ animation: 'pulse-glow 1.5s ease-in-out infinite' }}>

               
//                   <div className="absolute inset-0 flex items-center justify-center text-4xl"
//                        style={{ animation: 'bounce-scale 2s ease-in-out infinite' }}>
//                     <span style={{
//                       filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.8))',
//                       animation: 'emoji-rotate 3s ease-in-out infinite'
//                     }}>
//                       {loadingSteps[currentPhase]?.emoji || "⚡"}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div> */}
  
//            <div className="relative">
//           <div className="w-32 h-32 border-4 border-white/20 rounded-full animate-spin">
//             <div className="w-full h-full border-4 border-transparent border-t-blue-400 rounded-full animate-spin" style={{ animationDirection: "reverse", animationDuration: "1.5s" }} />
//           </div>

//           <div className="absolute inset-4 w-24 h-24 border-2 border-pink-400/40 rounded-full animate-pulse">
//             <div className="w-full h-full border-2 border-transparent border-r-pink-400 rounded-full animate-spin" />
//           </div>

//           <div className="absolute inset-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-pink-400 rounded-full animate-pulse flex items-center justify-center">
//             <div className="w-8 h-8 bg-white/10 rounded-full animate-bounce" />
//           </div>

//           {[...Array(8)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute w-2 h-2 bg-blue-400 rounded-full animate-ping"
//               style={{
//                 left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 8)}%`,
//                 top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 8)}%`,
//                 animationDelay: `${i * 0.2}s`,
//               }}
//             />
//           ))}
//         </div>

//           {/* Orbiting Elements */}
//           {[...Array(12)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute w-3 h-3 rounded-full"
//               style={{
//                 left: `${50 + 45 * Math.cos((i * Math.PI * 2) / 12)}%`,
//                 top: `${50 + 45 * Math.sin((i * Math.PI * 2) / 12)}%`,
//                 backgroundColor: ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981'][i % 4],
//                 animation: `orbit-${i % 4} ${2 + (i % 3)}s linear infinite`,
//                 animationDelay: `${i * 0.1}s`,
//                 filter: 'drop-shadow(0 0 6px currentColor)',
//               }}
//             />
//           ))}
//         </div>

//         {/* Enhanced Title with Multiple Effects */}
//         <div className="text-center space-y-6">
//           <div className="relative">
//             <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
//                 style={{
//                   backgroundSize: '300% 100%',
//                   animation: 'gradient-flow 3s ease infinite, title-glow 2s ease-in-out infinite',
//                   filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.5))'
//                 }}>
//               Portfolio
//             </h1>

//             {/* Title Underline Effect */}
//             <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
//                  style={{
//                    width: `${progress}%`,
//                    maxWidth: '100%',
//                    animation: 'shimmer-line 2s ease-in-out infinite',
//                    transition: 'width 0.3s ease-out'
//                  }} />
//           </div>

//           {/* Dynamic Loading Text */}
//           <div className="h-12 flex items-center justify-center space-x-4">
//             <div className="text-2xl animate-spin"
//                  style={{ animation: 'spin-slow 3s linear infinite' }}>
//               {loadingSteps[currentPhase]?.emoji || "⚡"}
//             </div>
//             <p className={`text-xl font-semibold bg-gradient-to-r ${loadingSteps[currentPhase]?.color || 'from-blue-500 to-purple-500'} bg-clip-text text-transparent transition-all duration-500`}
//                style={{ animation: 'fade-slide 0.5s ease-in-out' }}>
//               {loadingText}
//             </p>
//           </div>
//         </div>

//         {/* Ultra Advanced Progress Bar */}
//         <div className="w-96 max-w-lg space-y-4">
//           <div className="flex justify-between text-sm font-medium text-gray-300">
//             <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Loading Experience
//             </span>
//             <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-bold">
//               {Math.round(progress)}%
//             </span>
//           </div>

//           <div className="relative w-full h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
//             {/* Main Progress Fill */}
//             <div
//               className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full relative transition-all duration-300 ease-out"
//               style={{ width: `${progress}%`}}
//             >
//               {/* Multiple Shimmer Effects */}
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
//                    style={{ animation: 'shimmer-fast 1s linear infinite' }} />
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"
//                    style={{ animation: 'shimmer-slow 2s linear infinite reverse' }} />

//               {/* Glowing Edge Effect */}
//               <div className="absolute right-0 top-0 w-4 h-full bg-gradient-to-r from-transparent to-white/50 rounded-r-full"
//                    style={{ animation: 'glow-pulse 1.5s ease-in-out infinite' }} />
//             </div>

//             {/* Progress Indicator Dot */}
//             <div className="absolute top-1/2 w-2 h-2 bg-white rounded-full transform -translate-y-1/2 transition-all duration-300"
//                  style={{
//                    left: `calc(${progress}% - 4px)`,
//                    boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
//                    animation: 'dot-pulse 1s ease-in-out infinite'
//                  }} />
//           </div>
//         </div>

//         {/* Enhanced Tech Stack with 3D Effects */}
//         <div className={`flex space-x-8 transition-all duration-700 ${
//           progress > 30 ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-90"
//         }`}>
//           {[
//             { emoji: "⚛️", name: "React", color: "from-cyan-400 to-blue-500" },
//             { emoji: "🔷", name: "TypeScript", color: "from-blue-500 to-indigo-600" },
//             { emoji: "🎨", name: "Design", color: "from-purple-500 to-pink-500" },
//             { emoji: "🚀", name: "Performance", color: "from-green-400 to-cyan-500" },
//           ].map((tech, i) => (
//             <div
//               key={i}
//               className={`relative group w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-2xl cursor-pointer transform transition-all duration-300 hover:scale-110`}
//               style={{
//                 animation: `tech-float ${2 + i * 0.5}s ease-in-out infinite`,
//                 animationDelay: `${i * 0.3}s`,
//                 boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
//               }}
//             >
//               <span style={{
//                 filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
//                 animation: `icon-wiggle ${3 + i}s ease-in-out infinite`
//               }}>
//                 {tech.emoji}
//               </span>

//               {/* Tooltip */}
//               <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//                 {tech.name}
//               </div>

//               {/* Glow Effect */}
//               <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </div>
//           ))}
//         </div>

//         {/* Success Animation */}
//         {/* {isComplete && (
//           <div className="absolute inset-0 flex items-center justify-center z-20">
//             <div className="text-6xl animate-bounce"
//                  style={{
//                    animation: 'success-burst 0.8s ease-out',
//                    filter: 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.8))'
//                  }}>
//               ✨🎉✨
//             </div>
//           </div>
//         )} */}
//       </div>

//       <style>{`
//         @keyframes grid-move {
//           0% { transform: translate(0, 0); }
//           100% { transform: translate(50px, 50px); }
//         }

//         @keyframes morph1 {
//           0%, 100% { transform: rotate(0deg) scale(1); border-radius: 50%; }
//           25% { transform: rotate(90deg) scale(1.1); border-radius: 40% 60% 60% 40%; }
//           50% { transform: rotate(180deg) scale(0.9); border-radius: 60% 40% 40% 60%; }
//           75% { transform: rotate(270deg) scale(1.05); border-radius: 30% 70% 70% 30%; }
//         }

//         @keyframes morph2 {
//           0%, 100% { transform: rotate(0deg) scale(1); border-radius: 50%; }
//           33% { transform: rotate(120deg) scale(1.2); border-radius: 70% 30% 30% 70%; }
//           66% { transform: rotate(240deg) scale(0.8); border-radius: 30% 70% 30% 70%; }
//         }

//         @keyframes morph3 {
//           0%, 100% { transform: translateX(-50%) rotate(0deg) scale(1); border-radius: 50%; }
//           50% { transform: translateX(-50%) rotate(180deg) scale(1.1); border-radius: 40% 60% 40% 60%; }
//         }

//         @keyframes rotate360 {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         @keyframes pulse-scale {
//           0%, 100% { transform: scale(1); opacity: 0.6; }
//           50% { transform: scale(1.05); opacity: 0.8; }
//         }

//         @keyframes pulse-glow {
//           0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.4); }
//           50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.8); }
//         }

//         @keyframes bounce-scale {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.1); }
//         }

//         @keyframes emoji-rotate {
//           0%, 100% { transform: rotate(0deg); }
//           25% { transform: rotate(-10deg); }
//           75% { transform: rotate(10deg); }
//         }

//         @keyframes gradient-flow {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }

//         @keyframes title-glow {
//           0%, 100% { filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.5)); }
//           50% { filter: drop-shadow(0 0 30px rgba(139, 92, 246, 0.8)); }
//         }

//         @keyframes shimmer-line {
//           0%, 100% { opacity: 0.5; }
//           50% { opacity: 1; }
//         }

//         @keyframes fade-slide {
//           0% { opacity: 0; transform: translateY(10px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes shimmer-fast {
//           0% { transform: translateX(-100%) skewX(-12deg); }
//           100% { transform: translateX(200%) skewX(-12deg); }
//         }

//         @keyframes shimmer-slow {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(200%); }
//         }

//         @keyframes glow-pulse {
//           0%, 100% { opacity: 0.5; }
//           50% { opacity: 1; }
//         }

//         @keyframes dot-pulse {
//           0%, 100% { transform: translateY(-50%) scale(1); }
//           50% { transform: translateY(-50%) scale(1.2); }
//         }

//         @keyframes tech-float {
//           0%, 100% { transform: translateY(0px) rotateX(0deg); }
//           50% { transform: translateY(-10px) rotateX(5deg); }
//         }

//         @keyframes icon-wiggle {
//           0%, 100% { transform: rotate(0deg); }
//           25% { transform: rotate(-5deg); }
//           75% { transform: rotate(5deg); }
//         }

//         @keyframes success-burst {
//           0% { transform: scale(0) rotate(0deg); opacity: 0; }
//           50% { transform: scale(1.3) rotate(180deg); opacity: 1; }
//           100% { transform: scale(1) rotate(360deg); opacity: 1; }
//         }

//         @keyframes orbit-0 {
//           from { transform: rotate(0deg) translateX(60px) rotate(0deg); }
//           to { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
//         }

//         @keyframes orbit-1 {
//           from { transform: rotate(0deg) translateX(70px) rotate(0deg); }
//           to { transform: rotate(-360deg) translateX(70px) rotate(360deg); }
//         }

//         @keyframes orbit-2 {
//           from { transform: rotate(0deg) translateX(80px) rotate(0deg); }
//           to { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
//         }

//         @keyframes orbit-3 {
//           from { transform: rotate(0deg) translateX(90px) rotate(0deg); }
//           to { transform: rotate(-360deg) translateX(90px) rotate(360deg); }
//         }

//         @keyframes float {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           25% { transform: translateY(-20px) translateX(10px); }
//           50% { transform: translateY(-40px) translateX(0px); }
//           75% { transform: translateY(-20px) translateX(-10px); }
//         }

//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//       `}</style>
//     </div>
//   );
// }


// export default Loader;



import { useEffect, useState, useMemo } from "react";

const Loader = ({ onComplete, duration = 2000 }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing");
  const [isComplete, setIsComplete] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);

  const loadingSteps = useMemo(() => [
    { text: "Initializing...", emoji: "⚡", color: "from-blue-500 to-cyan-500" },
    { text: "Loading Skills...", emoji: "🚀", color: "from-purple-500 to-pink-500" },
    { text: "Preparing Portfolio...", emoji: "✨", color: "from-green-500 to-blue-500" },
    { text: "Optimizing Experience...", emoji: "🔮", color: "from-orange-500 to-red-500" },
    { text: "Almost Ready...", emoji: "🎯", color: "from-indigo-500 to-purple-500" },
    { text: "Welcome!", emoji: "🎉", color: "from-emerald-500 to-teal-500" },
  ], []);

  useEffect(() => {
    const stepsCount = loadingSteps.length;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = Math.min(prev + 100 / (duration / 50), 100); // Smoother linear progress
        const phaseIndex = Math.min(Math.floor((newProgress / 100) * stepsCount), stepsCount - 1);

        if (phaseIndex !== currentPhase) {
          setCurrentPhase(phaseIndex);
          setLoadingText(loadingSteps[phaseIndex].text);
        }

        if (newProgress >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(() => onComplete?.(), 500); // Reduced timeout for faster completion
          return 100;
        }

        return newProgress;
      });
    }, 50); // Fixed interval for smoother updates

    return () => clearInterval(interval);
  }, [duration, onComplete, currentPhase, loadingSteps]);

  const particles = useMemo(() => [...Array(20)], []); // Reduced particles from 50 to 20
  const techStack = useMemo(() => [
    { emoji: "⚛️", name: "React", color: "from-cyan-400 to-blue-500" },
    { emoji: "🔷", name: "TypeScript", color: "from-blue-500 to-indigo-600" },
    { emoji: "🎨", name: "Design", color: "from-purple-500 to-pink-500" },
    { emoji: "🚀", name: "Performance", color: "from-green-400 to-cyan-500" },
  ], []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden ">
      {/* Simplified Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(60, 131, 246, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(60, 131, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'grid-move 15s linear infinite',
          }}
        />
      </div>

      {/* Reduced Particle System */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              backgroundColor: ['#3b82f6', '#8b5cf6', '#06b6d4'][i % 3], // Reduced color variety
              animationDuration: `${4 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 3}s`,
              animationName: 'float',
            }}
          />
        ))}
      </div>

      {/* Simplified Morphing Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-80 h-80 rounded-full blur-2xl opacity-20 bg-gradient-to-r from-blue-500 to-purple-600"
          style={{ left: '15%', top: '15%', animation: 'morph1 10s ease-in-out infinite' }}
        />
        <div
          className="absolute w-64 h-64 rounded-full blur-2xl opacity-20 bg-gradient-to-r from-purple-500 to-pink-600"
          style={{ right: '15%', top: '60%', animation: 'morph2 12s ease-in-out infinite reverse' }}
        />
      </div>

      {/* Main Loader Content */}
      <div className="relative flex flex-col items-center space-y-8 z-10">
        {/* Simplified Loader Animation */}
        <div className="relative w-24 h-24">
          <div className="w-24 h-24 border-4 border-white/20 rounded-full animate-spin">
            <div
              className="w-full h-full border-4 border-transparent border-t-blue-400 rounded-full"
              style={{ animation: 'rotate360 1.2s linear infinite reverse' }}
            />
          </div>
          <div className="absolute inset-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-pink-400 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-2xl">{loadingSteps[currentPhase]?.emoji || "⚡"}</span>
            <span className="invisible">D</span>
          </div>
        </div>

        {/* Optimized Title */}
        <div className="text-center space-y-4">
          <h1
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            style={{ animation: 'gradient-flow 4s ease infinite' }}
          >
            Portfolio
          </h1>
          <div
            className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            style={{ width: `${progress}%`, maxWidth: '100%', transition: 'width 0.2s ease-out' }}
          />
        </div>

        {/* Dynamic Loading Text */}
        <div className="h-10 w-80 flex items-center justify-center space-x-3">
          <span className="text-xl animate-spin" style={{ animation: 'spin-slow 4s linear infinite' }}>
            {loadingSteps[currentPhase]?.emoji || "⚡"}
          </span>
          <span></span>
          <p
            className={`text-lg font-medium bg-gradient-to-r ${loadingSteps[currentPhase]?.color} bg-clip-text text-transparent transition-colors duration-300`}
          >
            {loadingText}
          </p>
        </div>

        {/* Optimized Progress Bar */}
        <div className="w-80 max-w-md space-y-3">
          <div className="flex justify-between text-sm font-medium text-gray-300">
            <span>Loading Experience</span>
            <span className="font-bold">{Math.round(progress)}%</span>
          </div>
          <div className="relative w-full h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-200"
              style={{ width: `${progress}%` }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                style={{ animation: 'shimmer-fast 1.2s linear infinite' }}
              />
            </div>
          </div>
        </div>

        {/* Simplified Tech Stack */}
        <div
          className={`flex space-x-6 transition-opacity duration-500 ${
            progress > 30 ? "opacity-100" : "opacity-0"
          }`}
        >
          {techStack.map((tech, i) => (
            <div
              key={i}
              className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-lg flex items-center justify-center text-xl cursor-pointer hover:scale-105 transition-transform duration-200`}
              style={{ animation: `tech-float ${2 + i * 0.4}s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }}
            >
              <span>{tech.emoji}</span>
              <div className="absolute -bottom-6 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optimized CSS Animations */}
      <style>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }

        @keyframes morph1 {
          0%, 100% { transform: scale(1); border-radius: 50%; }
          50% { transform: scale(1.1); border-radius: 45% 55%; }
        }

        @keyframes morph2 {
          0%, 100% { transform: scale(1); border-radius: 50%; }
          50% { transform: scale(1.15); border-radius: 55% 45%; }
        }

        @keyframes rotate360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes shimmer-fast {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        @keyframes tech-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;