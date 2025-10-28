import React from 'react'

const Button = ({ children, className, variant = "primary", size = "sm", type = "button", onClick, "aria-label": ariaLabel, ...rest }) => {
    const baseStyles = "rounded-lg cursor-pointer";

    const sizeStyles = {
        sm:"px-3 py-1 text-[16px] flex items-center gap-4",
        md: "px-3 py-2 flex items-center gap-4",

    };

    const variantStyles = {
        primary: "bg-black text-white dark:bg-white dark:text-black",
        outlineDark:"font-medium border border-gray-300 dark:hover:bg-zinc-900 hover:bg-slate-100 bg-white dark:bg-black",
    }
    return (
        <div>
            <button
                type={type}
                onClick={onClick}
                aria-label={ariaLabel}
                className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
                {...rest}
            >
                {children}
            </button>
        </div>
    )
}

export default Button
