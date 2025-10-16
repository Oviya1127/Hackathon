import React from "react";
import type { ReactNode, MouseEventHandler } from "react";

interface NeonCardProps {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const NeonCard: React.FC<NeonCardProps> = ({ children, className = "", onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-black bg-opacity-30 border border-orange-500 rounded-xl p-4 shadow-[0_0_20px_rgba(255,165,0,0.5)] hover:shadow-[0_0_30px_rgba(255,165,0,0.8)] transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default NeonCard;
