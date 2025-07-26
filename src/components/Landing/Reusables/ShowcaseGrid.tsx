import React, { useState } from "react";
import ShowcaseCard from "./ShowcaseCard";

const ShowcaseGrid: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cards = [
    {
      title: "AI-opening possibilities.",
      subtitle: "Apple Intelligence",
      image: "/assets/iphone-ai.jpg",
      bgColor: "bg-black",
    },
    {
      title: "Picture your best photos and videos.",
      subtitle: "Cutting-Edge Cameras",
      image: "/assets/iphone-camera.jpg",
      bgColor: "bg-blue-900",
    },
    {
      title: "The fastest chip ever.",
      subtitle: "Blazing Performance",
      image: "/assets/iphone-chip.jpg",
      bgColor: "bg-purple-900",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch gap-6 px-4 py-12">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`transition-all duration-500 ${
            hoveredIndex === index
              ? "brightness-100 z-20"
              : hoveredIndex !== null
              ? "brightness-75 z-10"
              : "brightness-100 z-10"
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <ShowcaseCard {...card} isHovered={hoveredIndex === index} />
        </div>
      ))}
    </div>
  );
};

export default ShowcaseGrid;
