
// import React, { useState, useEffect } from "react";

// const Typewriter = ({ text='', delay }) => {
//   const [currentText, setCurrentText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (currentIndex < text.length) {
//       const timeout = setTimeout(() => {
//         setCurrentText(prevText => prevText + text[currentIndex]);
//         setCurrentIndex(prevIndex => prevIndex + 1);
//       }, delay);

//       return () => clearTimeout(timeout);
//     }
//   }, [currentIndex, delay, text]);

//    return <span>{currentText}</span>;

// };

// export default Typewriter;


import React, { useState, useEffect } from "react";

const Typewriter = ({ text = "", delay = 150, pauseTime = 1000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting && index < text.length) {
      // Typing phase
      timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, delay);
    } else if (isDeleting && index > 0) {
      // Deleting phase
      timer = setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1));
        setIndex(prev => prev - 1);
      }, delay);
    } else if (index === text.length && !isDeleting) {
      // Wait after full text is typed, then start deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (index === 0 && isDeleting) {
      // Once deleted, start typing again
      setIsDeleting(false);
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting, text, delay, pauseTime]);

  return <span>{displayedText}</span>;
};

export default Typewriter;
