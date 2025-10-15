import React, { ReactNode } from "react";

interface NeonCardProps {
  children: ReactNode;
  className?: string;
}

const NeonCard: React.FC<NeonCardProps> = ({ children, className }) => {
  return (
    <div
      className={`bg-black bg-opacity-30 border border-orange-500 rounded-xl p-4 shadow-[0_0_20px_rgba(255,165,0,0.5)] ${className}`}
    >
      {children}
    </div>
  );
};

export default NeonCard;
