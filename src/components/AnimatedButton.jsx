import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from 'framer-motion';



const AnimatedButton = ({
    to,
    children,
    className,
    variant = "primary",
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        // setIsClicked(true);

        // Add a slight delay for the click animation
        setTimeout(() => {
            navigate(to);
        }, 200);
    };

    const variantClasses = {
        primary: {
            base: "bg-gradient-to-r from-blue-600 via-blue-500 to-purple-500 text-white",
            hover: "hover:from-blue-700 hover:via-blue-500 hover:to-purple-500",
            shadow: "hover:shadow-2xl hover:shadow-blue-500/25",
        },
        secondary: {
            base: "bg-white/10 backdrop-blur-sm border border-white/20 text-white",
            hover: "hover:bg-white/15 hover:border-white/30",
            shadow: "hover:shadow-xl hover:shadow-white/10",
        },
    };

    return (
        <motion.button
            aria-label="Go to Project Page"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            viewport={{ once: true, amount: 0.2, delay: 0.4 }}
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`group relative px-3 py-3 font-semibold cursor-pointer mt-3 rounded-full overflow-hidden transition-all duration-500 ease-out hover:scale-105 active:scale-95 transform-gpu ${variantClasses[variant]?.base} ${variantClasses[variant]?.hover} ${variantClasses[variant]?.shadow} ${isClicked ? "scale-95" : ""} ${className} `}
        >
            {/* Animated background gradient */}
            <div
                className={
                    `absolute inset-0 bg-gradient-to-r from-cyan-200 via-purple-500 to-blue-500 opacity-0 transition-opacity duration-500 ${isHovered && "opacity-20"}`}
            />

            {/* Ripple effect */}
            <div
                className={
                    `absolute inset-0 bg-white/20 rounded-full scale-0 transition-transform duration-500 ${isClicked && "scale-150"}`}
            />

            {/* Particle effects */}
            <div className="absolute inset-0 overflow-hidden rounded-full">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className={
                            `absolute w-1 h-1 bg-white/60 rounded-full transition-all duration-1000 ${isHovered ? "animate-pulse" : "opacity-0"}`}
                        style={{
                            left: `${20 + i * 12}%`,
                            top: `${30 + (i % 2) * 40}%`,
                            animationDelay: `${i * 100}ms`,
                        }}
                    />
                ))}
            </div>

            {/* Shine effect */}
            <div
                className={
                    `absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-700  ${isHovered && "translate-x-full"}`}
            />

            {/* Content */}
            <span className="relative z-10 flex items-center justify-center gap-2">
                {variant === "primary" && (
                    <Sparkles
                        size={18}
                        className={
                            `transition-transform duration-300 ${isHovered && "rotate-12 scale-110"}`}
                    />
                )}

                <span className="font-medium">{children}</span>

                <ArrowRight
                    size={18}
                    className={
                        `transition-transform duration-300 ${isHovered && "translate-x-1"}`}
                />
            </span>

            {/* Glow effect */}
            <div
                className={
                    `absolute inset-0 rounded-full blur-xl bg-gradient-to-r from-blue-500 to-purple-900 opacity-0 transition-opacity duration-500 ${isHovered && "opacity-30"}`}
                style={{ zIndex: -1 }}
            />
        </motion.button>
    );
};

export default AnimatedButton;