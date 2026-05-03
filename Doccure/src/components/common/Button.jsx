import React from "react";
import { motion } from "motion/react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  type = "button",
}) => {

  // 🎨 Variants
  const variants = {
    primary: "bg-linear-to-r from-blue-500 to-cyan-400 rounded-2xl text-white font-medium tracking-wider cursor-pointer ",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    search: "text-white bg-blue-400 hover:bg-blue-600 rounded-full mr-2 tracking-wider",
  };

  //  Sizes
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      className={`
        rounded-full font-medium transition-all duration-300
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};

export default Button;