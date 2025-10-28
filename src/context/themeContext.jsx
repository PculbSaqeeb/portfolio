
// import React, { createContext, useContext, useEffect, useState } from "react";

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(() => {
//     const storedTheme = localStorage.getItem("theme");
//     if (storedTheme) return storedTheme; 
//     const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//     return systemPrefersDark ? "dark" : "light";
//   });

//   useEffect(() => {
//     const html = document.documentElement;

//     if (darkMode === "dark") {
//       html.classList.add("dark");
//     } else {
//       html.classList.remove("dark");
//     }

//     html.setAttribute("data-theme", darkMode);
//     localStorage.setItem("theme", darkMode);
//   }, [darkMode]);

//   const toggleDarkMode = () => {
//     setDarkMode(prev => (prev === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);
