import React from 'react'
import { motion, useScroll } from "framer-motion";

const ScrollIndicator = ({ theme }) => {
    const { scrollYProgress } = useScroll();
    // const backgroundColor = theme === 'dark' ? '#ffffff' : '#ff0088'; 
    const backgroundStyle =
        theme === 'dark'
            ? { backgroundColor: '#ffffff' }
            : {
                backgroundImage: 'linear-gradient(135deg, #bd50e9, #2851d6)',
            };
    return (
        <motion.div
            id="scroll-indicator"
            style={{
                scaleX: scrollYProgress,
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: "5px",
                originX: 0,
                ...backgroundStyle,
                zIndex: 9999,
            }}
        />
    );
}

export default ScrollIndicator
