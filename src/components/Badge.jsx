import React from "react";

 const Badge = ({ children, className = "", variant = "default" }) => {
  const baseClasses = "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium";
  const variantClasses =
    variant === "default"
      ? "bg-blue-600 text-white"
      : "bg-blue-100 text-blue-700";

  return (
    <span className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </span>
  );
};


export default Badge
