import { motion } from "framer-motion";

const AnimatedText = ({ text }) => {
  const letters = text.split("");

  return (
    <h1 className="text-[27px] sm:text-[32px] text-center md:text-[32px] md:text-left lg:text-[38px] xl:text-[77px] font-bold ">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: index * 0.05,
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </h1>
  );
};

export default AnimatedText;