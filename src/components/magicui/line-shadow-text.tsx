import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface LineShadowTextProps {
  children: React.ReactNode;
  className?: string;
}

const LineShadowText: React.FC<LineShadowTextProps> = ({ children, className }) => {
  return (
    <motion.h1
      className={cn(
        "relative text-4xl font-bold tracking-tight text-center text-white drop-shadow-lg",
        className
      )}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.h1>
  );
};

export default LineShadowText;
