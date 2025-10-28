// import ContactPage from "./pages/ContactPage";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import ProjectPage from "./pages/ProjectPage";
// import IndexLayout from "./layout/indexLayout";
// // import ProjectDetailPage from "./pages/ProjectDetailPage";

// const CLIENT_ID=import.meta.env.VITE_CLIENT_ID; 

// function App() {

//   return (
//     <div className="dark:text-white dark:bg-black">
//       <BrowserRouter>
//             <Routes>
//               <Route path="/" element={<Navigate to="/manjinder" replace />} />

//               <Route path="  /:employeeName" element={<IndexLayout />}>
//                 <Route index element={<HomePage />} />
//                 <Route path="about" element={<AboutPage />} />
//                 <Route path="projects" element={<ProjectPage />} />
//                 <Route path="contact" element={<ContactPage />} />
//                 {/* <Route path="projects/:projectID" element={<ProjectDetailPage />} /> */}
//               </Route >
//             </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ScrollToHashElement from "./components/ScrollHashRoute";

// Lazy load pages and layout
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const IndexLayout = lazy(() => import("./layout/indexLayout"));
// const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage")); // if needed

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

function App() {
  return (
    <div id='home' className="text-white bg-black">
      <BrowserRouter>
      <ScrollToHashElement/>
          <Routes>
            <Route path="/" element={<Navigate to="/manjinder" replace />} />
            <Route path="/:employeeName" element={<IndexLayout />}>
              <Route index element={<HomePage />} />
              {/* <Route path="about" element={<AboutPage />} /> */}
              {/* <Route path="projects" element={<ProjectPage />} /> */}
              {/* <Route path="contact" element={<ContactPage />} /> */}
              <Route path="/:employeeName/project/:projectName" element={<ProjectDetailPage />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// bg-gradient-to-br from-blue-400 via-purple-500 to-blue-600 
// https://portfolio-backend-1-yefi.onrender.com