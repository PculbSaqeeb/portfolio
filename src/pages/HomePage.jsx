  import Profile from '../components/Profile'
import About from '../components/About';
import Project from '../components/Project';
import Contact from '../components/Contact';
import { useLocation } from 'react-router';
import { useEffect } from 'react';

const HomePage = () => {
    const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 0);

        // Remove scroll state to prevent future scrolls
        window.history.replaceState({}, document.title);
      }
    }
  }, [location]);

  return (
    <>
      <Profile />
      <About />
      <Contact/>
    </>
  )
}

export default HomePage
