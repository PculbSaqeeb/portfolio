// import React from 'react'
// import Header from './Header'
// import Footer from './Footer'
// import ScrollToTop from '../components/ScrollToTop'
// import ScrollToTopOnRoute from '../components/ScrollToTopOnRoute'
// import video_1 from '../assets/video/blackhole.mp4';
// import { useTheme } from '../context/themeContext'
// import { DataContext, DataProvider } from '../context/dataContext'
// import { Outlet, useParams } from 'react-router'
// import ScrollIndicator from '../components/ScrollIndicator'



// const IndexLayout = () => {
//   const { employeeName } = useParams();
//   const { darkMode } = useTheme();


//   return (
//     <DataProvider employeeName={employeeName}>
//       <ScrollIndicator theme={darkMode} />
//       <div className='flex flex-col min-h-screen overflow-x-hidden'
//       >
//         {darkMode === "dark" && (
//           <div>
//             <div className="absolute inset-0 overflow-hidden">
//               {[...Array(50)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="absolute rounded-full"
//                   style={{
//                     left: `${Math.random() * 100}%`,
//                     top: `${Math.random() * 100}%`,
//                     width: `${Math.random() * 6 + 2}px`,
//                     height: `${Math.random() * 6 + 2}px`,
//                     backgroundColor: ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'][i % 5],
//                     animationDuration: `${3 + Math.random() * 4}s`,
//                     animationDelay: `${Math.random() * 5}s`,
//                   }}
//                 />
//               ))}
//             </div>

//             <div className="absolute inset-0 overflow-hidden pointer-events-none">
//               <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-30 bg-gradient-to-r from-blue-500 to-purple-600"
//                 style={{
//                   left: '10%',
//                   top: '10%',
//                   animation: 'morph1 8s ease-in-out infinite'
//                 }} />
//               <div className="absolute w-80 h-80 rounded-full blur-3xl opacity-30 bg-gradient-to-r from-purple-500 to-pink-600"
//                 style={{
//                   right: '10%',
//                   top: '50%',
//                   animation: 'morph2 10s ease-in-out infinite reverse'
//                 }} />
//               <div className="absolute w-72 h-72 rounded-full blur-3xl opacity-30 bg-gradient-to-r from-cyan-500 to-blue-600"
//                 style={{
//                   left: '50%',
//                   bottom: '10%',
//                   transform: 'translateX(-50%)',
//                   animation: 'morph3 12s ease-in-out infinite'
//                 }} />
//             </div>
//           </div>
//         )}
//         <ScrollToTop />
//         <ScrollToTopOnRoute />
//         <Header />
//         <div className='flex-grow'>
//           <Outlet />
//         </div>
//         <Footer />
//       </div>
//     </DataProvider>
//   )
// }

// export default IndexLayout;

// overflow-x-hidden




// import Header from './Header'
// import Footer from './Footer'
// import ScrollToTop from '../components/ScrollToTop'
// import ScrollToTopOnRoute from '../components/ScrollToTopOnRoute'
// import { DataContext, DataProvider } from '../context/dataContext'
// import { Outlet, useParams } from 'react-router'
// import ScrollIndicator from '../components/ScrollIndicator'
// import '../App.css'
// import SocialMedia from '../components/SocialMedia'

// const IndexLayout = () => {
//   const { employeeName } = useParams();
//   // const { darkMode } = useTheme();

//   return (
//     <DataProvider employeeName={employeeName}>
//       <ScrollIndicator />
//       <ScrollToTop />
//       <ScrollToTopOnRoute />
//       <Header />
//       <div className='hidden md:block overflow-x-hidden'>
//         <div className='fixed top-[50%] right-5 -translate-y-1/2 flex flex-col z-50'>
//           <SocialMedia className="flex-col text-xl gap-8" />
//         </div>
//       </div>


//       <div className='flex flex-col relative overflow-hidden'>
//         <div className="fixed inset-0 z-10 pointer-events-none overflow-x-hidden">
//           <div className="absolute inset-0 overflow-hidden">
//             {[...Array(50)].map((_, i) => {
//               const size = Math.random() * 4 + 2;
//               const duration = 3 + Math.random() * 4;
//               const delay = Math.random() * 5;
//               const colors = ['#8b5cf6', '#7c3aed', '#a78bfa', '#6d28d9'];
//               const color = colors[Math.floor(Math.random() * colors.length)];

//               return (
//                 <div
//                   key={i}
//                   className="absolute rounded-full animate-float"
//                   style={{
//                     left: `${Math.random() * 100}%`,
//                     top: `${Math.random() * 100}%`,
//                     width: `${size}px`,
//                     height: `${size}px`,
//                     backgroundColor: color,
//                     animationDuration: `${duration}s`,
//                     animationDelay: `${delay}s`,
//                     opacity: 0.6
//                   }}
//                 />
//               );
//             })}
//           </div>

//           <div className="absolute inset-0 overflow-hidden">
//             <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-25 bg-gradient-to-r from-indigo-500 to-violet-600 animate-morph1"
//               style={{ left: '10%', top: '10%' }}
//             />
//             <div className="absolute w-80 h-80 rounded-full blur-3xl opacity-25 bg-gradient-to-r from-purple-500 to-fuchsia-600 animate-morph2"
//               style={{ right: '10%', top: '50%' }}
//             />
//             <div className="absolute w-72 h-72 rounded-full blur-3xl opacity-25 bg-gradient-to-r from-blue-800 to-purple-900 animate-morph3"
//               style={{ left: '50%', bottom: '10%', transform: 'translateX(-50%)' }}
//             />
//           </div>
//         </div>

//         <div className="fixed inset-0 z-10 pointer-events-none overflow-x-hidden">
//           <div className="absolute inset-0">
//             {[...Array(50)].map((_, i) => {
//               const size = Math.random() * 4 + 2;
//               const duration = 3 + Math.random() * 4;
//               const delay = Math.random() * 5;
//               const colors = ['#8b5cf6', '#7c3aed', '#a78bfa', '#6d28d9'];
//               const color = colors[Math.floor(Math.random() * colors.length)];

//               return (
//                 <div
//                   key={i}
//                   className="absolute rounded-full animate-float"
//                   style={{
//                     left: `${Math.random() * 100}%`,
//                     top: `${Math.random() * 100}%`,
//                     width: `${size}px`,
//                     height: `${size}px`,
//                     backgroundColor: color,
//                     animationDuration: `${duration}s`,
//                     animationDelay: `${delay}s`,
//                     opacity: 0.5
//                   }}
//                 />
//               );
//             })}
//           </div>


//         </div>
//       </div>

//       <div className="relative z-20">
//         <main >
//           <Outlet />
//         </main>
//         <Footer />
//       </div>



//     </DataProvider>
//   )
// }

// export default IndexLayout;



import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '../components/ScrollToTop'
import ScrollToTopOnRoute from '../components/ScrollToTopOnRoute'
// import { useTheme } from '../context/themeContext'
import { DataContext, DataProvider } from '../context/dataContext'
import { Outlet, useParams } from 'react-router'
import ScrollIndicator from '../components/ScrollIndicator'
import '../App.css'
import SocialMedia from '../components/SocialMedia'

const IndexLayout = () => {
  const { employeeName } = useParams();
  // const { darkMode } = useTheme();

  return (
    <DataProvider employeeName={employeeName}>
      <ScrollIndicator />
      <ScrollToTop />
      <ScrollToTopOnRoute />
      <Header />

      {/* Social Media - Desktop only */}
      <div className='hidden md:block overflow-x-hidden'>
        <div className='fixed top-[50%] right-5 -translate-y-1/2 flex flex-col z-50'>
          <SocialMedia className="flex-col text-xl gap-8" />
        </div>
      </div>

      {/* Background Particles Container */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* First particle layer */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => {
            const size = Math.random() * 4 + 2;
            const duration = 3 + Math.random() * 4;
            const delay = Math.random() * 5;
            const colors = ['#8b5cf6', '#7c3aed', '#a78bfa', '#6d28d9'];
            const color = colors[Math.floor(Math.random() * colors.length)];

            return (
              <div
                key={i}
                className="absolute rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: color,
                  animationDuration: `${duration}s`,
                  animationDelay: `${delay}s`,
                  opacity: 0.6,
                  transform: 'translateY(0px)',
                  animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`
                }}
              />
            );
          })}
        </div>

        {/* Background gradient blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-96 h-96 rounded-full blur-3xl opacity-25 bg-gradient-to-r from-indigo-500 to-violet-600"
            style={{
              left: '10%',
              top: '10%',
              animation: 'morph1 8s ease-in-out infinite alternate'
            }}
          />
          <div
            className="absolute w-80 h-80 rounded-full blur-3xl opacity-25 bg-gradient-to-r from-purple-500 to-fuchsia-600"
            style={{
              right: '10%',
              top: '50%',
              animation: 'morph2 6s ease-in-out infinite alternate-reverse'
            }}
          />
          <div
            className="absolute w-72 h-72 rounded-full blur-3xl opacity-25 bg-gradient-to-r from-blue-800 to-purple-900"
            style={{
              left: '50%',
              bottom: '10%',
              transform: 'translateX(-50%)',
              animation: 'morph3 10s ease-in-out infinite alternate'
            }}
          />
        </div>

        {/* Second particle layer */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => {
            const size = Math.random() * 3 + 1.5;
            const duration = 4 + Math.random() * 3;
            const delay = Math.random() * 6;
            const colors = ['#8b5cf6', '#7c3aed', '#a78bfa', '#6d28d9'];
            const color = colors[Math.floor(Math.random() * colors.length)];

            return (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: color,
                  opacity: 0.4,
                  animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </DataProvider>
  )
}

export default IndexLayout;