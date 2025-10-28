// import React, { useContext, useEffect } from 'react'
// import { NavLink, useParams } from 'react-router-dom'
// import { useTheme } from '../context/themeContext';
// import { Sun, Moon, AlignJustify, CircleX } from 'lucide-react'
// import { useState } from 'react';
// import { DataContext } from '../context/dataContext';

// const Header = () => {
//     const { darkMode, toggleDarkMode } = useTheme();
//     const [open, setOpen] = useState(false);
//     const { portfolioData } = useContext(DataContext);
//     const { employeeName } = useParams();

//     useEffect(() => {
//         if (open) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = 'auto';
//         }

//         return () => {
//             document.body.style.overflow = 'auto';
//         };
//     }, [open]);


//     const [activeSection, setActiveSection] = useState("home");

//     useEffect(() => {
//         const handleScroll = () => {
//             const sections = ['home', 'about', 'projects', 'contact'];

//             const scrollY = window.scrollY;
//             let currentSection

//             for (let id of sections) {
//                 const section = document.getElementById(id);
//                 if (section) {
//                     const offsetTop = section.offsetTop - 100;
//                     if (scrollY >= offsetTop) {
//                         currentSection = id;
//                     }
//                 }
//             }
//             setActiveSection(currentSection);
//             currentSection = null;
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);



//     return (
//         <header className='h-[60px] mx-4 sm:mx-[30px] lg:mx-[100px] xl:mx-[200px] 2xl:mx-[  0px] 3xl:mx-[400px] mt-[20px] sticky top-[20px] shadow-[1px_1px_10px_rgba(0,0,0,0.3)] rounded-lg px-5 z-50 bg-white/50 backdrop-blur-lg dark:bg-white/10 '>
//             <nav className='flex items-center justify-between h-[60px]'>
//                 <p className='cursor-pointer font-bold text-xl'>
//                     {portfolioData?.name}
//                 </p>

//                 <ul className='hidden md:flex items-center gap-10 cursor-pointer'>
//                     {[
//                         ``,
//                         `/about`,
//                         `/projects`,
//                         `/contact`,
//                     ].map((path, i) => {
//                         const id = ['home', 'about', 'projects', 'contact'][i];
//                         return (
//                             <li key={path}>
//                                 <NavLink
//                                     to={`/${employeeName || "manjinder"}${path}`}
//                                     end={`/${employeeName || "manjinder"}${path}`}
//                                     className={({ isActive }) =>
//                                         isActive || activeSection === id
//                                             ? 'px-3 py-1 bg-gray-100 rounded-sm text-black dark:text-white dark:bg-gradient-to-r dark:from-purple-400 dark:via-indigo-400 dark:to-[#3B82F6] font-bold overflow-hidden'
//                                             : 'px-3 py-1 dark:hover:bg-purple-400/20 hover:bg-gray-100 dark:hover:text-white rounded-sm hover:text-black dark:text-white overflow-hidden'
//                                     }
//                                 >
//                                     {['Home', 'About', 'Projects', 'Contact'][i]}
//                                 </NavLink>
//                             </li>
//                         )
//                     })}
//                 </ul>

//                 <div onClick={toggleDarkMode} className='hidden md:block'>
//                     {darkMode === 'dark' ? (
//                         <div className='hover:bg-purple-300/20 p-2 rounded-md cursor-pointer'>
//                             <Sun size={20} />
//                         </div>
//                     ) : (
//                         <div className='hover:bg-slate-100 p-2 rounded-md cursor-pointer'>
//                             <Moon size={20} />
//                         </div>
//                     )}
//                 </div>

//                 <div className='md:hidden flex items-center gap-4'>
//                     <button  aria-label='Redirect To Menu' onClick={() => setOpen(true)}>
//                         <AlignJustify size={26} />
//                     </button>
//                 </div>
//             </nav>

//             {open && (
//                 <div className='fixed inset-0 z-50 -mx-4 sm:-mx-[30px] -mt-[20px]'>
//                     <div className='absolute inset-0 bg-black/10 backdrop-blur-md' onClick={() => setOpen(false)}></div>

//                     <div c className={`absolute top-0 right-0 w-[350px] h-screen bg-white dark:bg-gray-900 shadow-lg p-6 transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
//                         <div className='flex justify-between items-center mb-6'>
//                             <p className='text-xl font-bold'>{employeeName.charAt(0).toUpperCase() + employeeName.slice(1).toLowerCase()}</p>

//                             <div className='flex gap-4 items-center'>
//                                 <div >
//                                     <p onClick={toggleDarkMode}>
//                                         {darkMode === 'dark' ? (
//                                             <div className='hover:bg-slate-800 rounded-md w-fit'>
//                                                 <Sun size={20} />
//                                             </div>
//                                         ) : (
//                                             <div className='hover:bg-slate-100  rounded-md w-fit'>
//                                                 <Moon size={20} />
//                                             </div>
//                                         )}
//                                     </p>
//                                 </div>

//                                 <CircleX size={24} onClick={() => setOpen(false)} className='cursor-pointer' />
//                             </div>
//                         </div>
//                         <ul className='flex flex-col gap-6'>
//                             {['/', '/about', '/projects', '/contact'].map((path, i) => (
//                                 <li key={path}>
//                                     <NavLink
//                                         to={`/${employeeName || "manjinder"}${path}`}
//                                         end={`/${employeeName || "manjinder"}${path}`}
//                                         className={({ isActive }) =>
//                                             isActive
//                                                 ? 'block px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-md text-black dark:text-white'
//                                                 : 'block px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md text-gray-700 dark:text-gray-300'
//                                         }
//                                         onClick={() => setOpen(false)} // close drawer on click
//                                     >
//                                         {['Home', 'About', 'Projects', 'Contact'][i]}
//                                     </NavLink>
//                                 </li>
//                             ))}
//                         </ul>

//                     </div>
//                 </div>
//             )}


//         </header>

//     )
// }

// export default Header



import React, { useContext, useEffect } from 'react'
import { Link, NavLink, useLocation, useParams } from 'react-router-dom'
// import { useTheme } from '../context/themeContext';
import { Sun, Moon, AlignJustify, CircleX } from 'lucide-react'
import { useState } from 'react';
import { DataContext } from '../context/dataContext';

const Header = () => {
    // const { darkMode, toggleDarkMode } = useTheme();
    const [open, setOpen] = useState(false);
    const { portfolioData } = useContext(DataContext);
    const { employeeName } = useParams();
    const location = useLocation();
    const isHomePage = location.pathname === `/${employeeName}`;

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [open]);

    useEffect(() => {
  const hash = location.hash.replace('#', '');
  if (hash && ['home', 'about', 'projects', 'contact'].includes(hash)) {
    setActiveSection(hash);
    const section = document.getElementById(hash);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}, [location.hash]);

    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'contact'];

            const scrollY = window.scrollY;
            let currentSection

            for (let id of sections) {
                const section = document.getElementById(id);
                if (section) {
                    const offsetTop = section.offsetTop - 100;
                    if (scrollY >= offsetTop) {
                        currentSection = id;
                    }
                }
            }
            setActiveSection(currentSection);
            currentSection = null;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // mx-4 sm:mx-[30px] lg:mx-[100px] xl:mx-[200px] 2xl:mx-[250px] 3xl:mx-[400px]

    return (
        <>
            <header className='hidden sm:block h-[60px] sticky top-[20px] shadow-[1px_1px_10px_rgba(0,0,0,0.3)] rounded-lg px-20 z-50 bg-white/10 backdrop-blur-lg dark:bg-white/10 max-w-fit mx-auto'>
                <nav className='flex items-center justify-center h-[60px] w-fit'>
                    {/* <p className='cursor-pointer font-bold text-xl'>
                    {portfolioData?.name}
                </p> */}

                    {/* <ul className='hidden md:flex items-center gap-10 cursor-pointer'>
                        {['home', 'about', 'projects', 'contact'].map((id, i) => (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    className={`px-3 py-1 rounded-sm font-bold overflow-hidden
            ${activeSection === id
                                            ? 'bg-gray-100 text-black dark:text-white dark:bg-gradient-to-r dark:from-purple-400 dark:via-indigo-400 dark:to-[#3B82F6]'
                                            : 'dark:hover:bg-purple-400/20 hover:bg-gray-100 dark:hover:text-white hover:text-black dark:text-white'
                                        }`}
                                >
                                    {id.charAt(0).toUpperCase() + id.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul> */}


                    {/* <ul className="hidden sm:flex items-center gap-10 cursor-pointer">
                    {["home", "about", "projects", "contact"].map((id) => (
                        <li key={id}>
                            <Link
                                to={`/${employeeName}#${id}`}
                                className={`px-3 py-2 rounded-sm font-bold overflow-hidden
              ${activeSection === id
                                        ? " text-white bg-gradient-to-r from-purple-400 via-indigo-400 to-[#3B82F6]"
                                        : "hover:bg-purple-400/20 hover:text-white text-white"
                                    }`}
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </Link>
                        </li>
                    ))}
                </ul> */}

                    <ul className="hidden sm:flex items-center gap-10 cursor-pointer">
                        {["home", "about", "projects", "contact"].map((id) => {
                            const isActive = isHomePage
                                ? activeSection === id
                                : id === "projects";

                            return (
                                <li key={id}>
                                    <Link
                                        to={`/${employeeName}#${id}`}
                                        className={`px-3 py-2 rounded-sm font-bold overflow-hidden
              ${isActive
                                                ? "text-white bg-gradient-to-r from-purple-400 via-indigo-400 to-[#3B82F6]"
                                                : "hover:bg-purple-400/20 hover:text-white text-white"
                                            }`}
                                    >
                                        {id.charAt(0).toUpperCase() + id.slice(1)}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>


                    {/* <div onClick={toggleDarkMode} className='hidden md:block'>
                    {darkMode === 'dark' ? (
                        <div className='hover:bg-purple-300/20 p-2 rounded-md cursor-pointer'>
                            <Sun size={20} />
                        </div>
                    ) : (
                        <div className='hover:bg-slate-100 p-2 rounded-md cursor-pointer'>
                            <Moon size={20} />
                        </div>
                    )}
                </div> */}


                </nav>




                {/* {open && (
                    <div className=' inset-0 z-50 -mx-4 sm:-mx-[30px] -mt-[20px]'>
                        <div className=' ' onClick={() => setOpen(false)}></div>

                        <div className={`w-full h-screen bg-black backdrop-blur-md shadow-lg p-5 transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
                            <div className='flex justify-between items-center mb-6'>
                                <p className='text-xl font-bold text-white'>{employeeName.charAt(0).toUpperCase() + employeeName.slice(1).toLowerCase()}</p>

                                <div className='flex gap-4 items-center'>

                                </div>
                                <CircleX size={24} onClick={() => setOpen(false)} className='cursor-pointer' />
                            </div>
                            <ul className='flex flex-col gap-6'>
                             


                                {["home", "about", "projects", "contact"].map((id) => (
                                    <li key={id}>
                                        <Link
                                            to={`/${employeeName}#${id}`}
                                            className={`px-3 py-1 rounded-sm font-bold overflow-hidden
              ${activeSection === id
                                                    ? "block px-3 py-2 bg-white/10 dark:bg-white/10 backdrop-blur-2xl rounded-md     dark:text-white"
                                                    : "block px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md text-white dark:text-gray-300"
                                                }`}
                                            onClick={() => setOpen(false)}
                                        >
                                            {id.charAt(0).toUpperCase() + id.slice(1)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                )} */}
            </header>


            <header className='sm:hidden h-[60px] sticky top-[20px] shadow-[1px_1px_10px_rgba(0,0,0,0.3)] rounded-lg px-4 z-50 bg-white/10 backdrop-blur-lg dark:bg-white/10 mx-4 '>
                <nav className='flex items-center justify-between h-[60px] w-full'>
                    <div className='text-white font-bold text-lg'>
                        {employeeName.charAt(0).toUpperCase() + employeeName.slice(1).toLowerCase()}
                    </div>

                    <div className='flex items-center'>
                        <button
                            aria-label='Open Menu'
                            onClick={() => setOpen(true)}
                            className='text-white hover:bg-purple-400/20 p-2 rounded-md transition-colors'
                        >
                            <AlignJustify size={24} />
                        </button>
                    </div>
                </nav>
            </header>

            {open && (
                <div className='fixed inset-0 z-50 sm:hidden'>
                    {/* Background overlay */}
                    <div
                        className='absolute inset-0 bg-black/50 backdrop-blur-sm'
                        onClick={() => setOpen(false)}
                    ></div>

                    {/* Menu panel */}
                    <div className={`absolute right-0 top-0 w-80 h-full bg-black/90 backdrop-blur-md shadow-lg p-6 transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'
                        }`}>
                        {/* Menu Header */}
                        <div className='flex justify-between items-center mb-8'>
                            <p className='text-xl font-bold text-white'>
                                {employeeName.charAt(0).toUpperCase() + employeeName.slice(1).toLowerCase()}
                            </p>
                            <CircleX
                                size={24}
                                onClick={() => setOpen(false)}
                                className='cursor-pointer text-white hover:text-purple-400 transition-colors'
                            />
                        </div>

                        {/* Navigation Menu */}
                        <ul className='flex flex-col gap-4'>
                            {["home", "about", "projects", "contact"].map((id) => {
                                const isActive = isHomePage
                                    ? activeSection === id
                                    : id === "projects";

                                return (
                                    <li key={id}>
                                        <Link
                                            to={`/${employeeName}#${id}`}
                                            className={`block px-4 py-3 rounded-md font-medium transition-colors ${isActive
                                                    ? "bg-gradient-to-r from-purple-400 via-indigo-400 to-[#3B82F6] text-white"
                                                    : "text-gray-300 hover:bg-purple-400/20 hover:text-white"
                                                }`}
                                            onClick={() => setOpen(false)}
                                        >
                                            {id.charAt(0).toUpperCase() + id.slice(1)}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                       
                    </div>
                </div>
            )}
        </>

    )
}

export default Header
