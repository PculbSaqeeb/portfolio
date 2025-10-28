import React, { useContext } from 'react'
import { DataContext } from '../context/dataContext';
import { useNavigate, useParams } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const Footer = () => {
    const navigate = useNavigate();
    const { portfolioData } = useContext(DataContext);

    return (
       
        // <div id='about' className='dark:bg-black-100/90 dark:backdrop-blur-lg'>
        //     <div className='border-t border-gray-300 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4 sm:px-16 md:px-28'>

        //         <div>
        //             <h2 className='text-lg font-bold'>{portfolioData?.name}</h2>
        //             <p className='mt-3 text-sm text-gray-700 dark:text-gray-300'>
        //                 {portfolioData?.shortBio}
        //             </p>
        //         </div>

        //         <div>
        //             <h2 className='text-lg font-bold'>Quick Links</h2>
        //             <ul className='mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer'>
        //                 <li onClick={() => navigate(`/${employeeName || "manjinder"}/about`)}>About Me</li>
        //                 <li onClick={() => navigate(`/${employeeName || "manjinder"}/projects`)}>Projects</li>
        //                 <li onClick={() => navigate(`/${employeeName || "manjinder"}/contact`)}>Contacts</li>
        //                 <li className='flex items-center gap-2'>Resume <RiExternalLinkLine size={14} /></li>
        //             </ul>
        //         </div>

        //         <div>
        //             <h2 className='text-lg font-bold'>Keyboard Shortcuts</h2>
        //             <ul className='mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer'>
        //                 <li onClick={toggleDarkMode} className='flex items-center gap-1'>
        //                     <div  className='hidden md:block'>
        //                         {darkMode === 'dark' ? (
        //                             <div className='hover:bg-slate-700 p-1 rounded-md'>
        //                                 <CiLight size={20} />
        //                             </div>
        //                         ) : (
        //                             <div className='hover:bg-slate-100 p-1 rounded-md'>
        //                                 <MdOutlineDarkMode   size={20} />
        //                             </div>
        //                         )}
        //                     </div>
        //                         <p >Toggle theme</p>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>

            <footer className="text-center py-6">
                <p className="text-sm  dark:text-white">
                    {/* © 2025 <span className="font-semibold">{portfolioData?.name}</span>. All rights reserved. */}
                </p>
                {/* <p className="text-xs dark:text-white mt-1">
                    Crafted with ❤️ using <span className="font-medium text-blue-500">React.js</span> & <span className="font-medium text-teal-500">Tailwind CSS</span>.
                </p> */}    
            </footer>
    )
}

export default Footer
