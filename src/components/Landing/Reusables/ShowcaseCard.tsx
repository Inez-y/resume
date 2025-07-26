import React, { useState } from "react";

interface ShowcaseCardProps {
  title: string;
  subtitle: string;
  image: string;
  bgColor?: string;
  isHovered?: boolean;
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({
  title,
  subtitle,
  image,
  bgColor = "bg-black",
  isHovered = false,
}) => {
  return (
    <div
      className={`relative rounded-3xl overflow-hidden w-72 sm:w-80 h-[480px] flex flex-col justify-end p-6 text-white shadow-lg transition-all duration-500 ${bgColor} ${
        isHovered ? "shadow-2xl scale-105" : "scale-100"
      }`}
    >
      {/* Background Image (zooms slightly on hover) */}
      <img
        src={image}
        alt={title}
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 ${
          isHovered ? "scale-110" : "scale-100"
        }`}
      />

      {/* Text Overlay (slides up on hover) */}
      <div
        className={`relative z-10 transform transition-all duration-500 ${
          isHovered ? "-translate-y-2 opacity-100" : "translate-y-0 opacity-90"
        }`}
      >
        <h3 className="text-sm font-light">{subtitle}</h3>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
    </div>
  );
};

export default ShowcaseCard;
