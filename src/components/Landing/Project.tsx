import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useScrollFadeIn from "./useScrollFadeIn";

interface ProjectCard {
  title: string;
  desc: string;
  link: string;
  image: string;
  bgColor?: string;
  glowColor: string;
}

const Projects: React.FC = () => {
  const ref = useScrollFadeIn();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [transition, setTransition] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects: ProjectCard[] = [
    // Ocaml
    {
      title: "Catculator",
      desc: "Responsive React + Tailwind portfolio.",
      link: "#",
      image: "data:image/jpeg;base64,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",
      bgColor: "bg-gray-900",
      glowColor: "rgba(156, 163, 175, 0.5)", // gray
    },
    // Vancouver Monopoly
    {
      title: "Monopoly: Vancouver Housing Market",
      desc: "Full-stack MERN task management app.",
      link: "#",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-AMoTYaNUl08aPCSobQ0wqqO-baUWlRudAw&s",
      bgColor: "bg-blue-900",
      glowColor: "rgba(59, 130, 246, 0.5)", // blue
    },
    // Discord bot
    {
      title: "Check-In Bot",
      desc: "Full-stack MERN task management app.",
      link: "#",
      image: "data:image/png;base64,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",
      bgColor: "bg-blue-900",
      glowColor: "rgba(59, 130, 246, 0.5)", // blue
    },
    // Duolingo
    {
      title: "Duolingo",
      desc: "Full-stack MERN task management app.",
      link: "#",
      image: "data:image/jpeg;base64,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",
      bgColor: "bg-blue-900",
      glowColor: "rgba(59, 130, 246, 0.5)", // blue
    },
    // 3800 
    {
      title: "Goverlytics",
      desc: "Full-stack MERN task management app.",
      link: "#",
      image: "data:image/jpeg;base64,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",
      bgColor: "bg-blue-900",
      glowColor: "rgba(59, 130, 246, 0.5)", // blue
    },
    // 2800 - Recipt
    {
      title: "Recipt",
      desc: "Full-stack MERN task management app.",
      link: "#",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGzQhc1d2km-ZYCyp_iXPX90wFUpzi08LLZQ&s",
      bgColor: "bg-blue-900",
      glowColor: "rgba(59, 130, 246, 0.5)", // blue
    },

  ];

  // Swipe gesture
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX.current - touchEndX;
    const threshold = 50; // min swipe
    if (deltaX > threshold) nextSlide();
    else if (deltaX < -threshold) prevSlide();
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 10, y: -y * 10 });
    setTransition(false);
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setTransition(true);
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6 py-12"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      {/* Carousel Container */}
      <div className="relative w-full max-w-xl overflow-hidden">
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.div
            key={currentIndex}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            {/* Single Visible Card */}
            <div
              key={currentIndex}
              className="relative cursor-pointer"
              onMouseEnter={() => setHoveredIndex(currentIndex)}
              onMouseLeave={() => {
                setHoveredIndex(null);
                handleMouseLeave();
              }}
              onMouseMove={handleMouseMove}
              onClick={() => window.open(projects[currentIndex].link, "_blank")}
            >
              {/* Glow */}
              {hoveredIndex === currentIndex && (
                <div
                  className="absolute -inset-4 rounded-3xl blur-2xl"
                  style={{
                    background: projects[currentIndex].glowColor,
                    opacity: 0.6,
                  }}
                />
              )}

              {/* Card */}
              <div
                style={{
                  transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                  transition: transition ? "transform 0.6s ease" : "none",
                }}
                className={`relative rounded-3xl overflow-hidden w-72 sm:w-80 h-[480px] flex flex-col justify-end p-6 text-grey shadow-lg ${projects[currentIndex].bgColor} ${
                  hoveredIndex === currentIndex
                    ? "shadow-2xl scale-105"
                    : "scale-100"
                }`}
              >
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="relative z-10">
                  <h3 className="text-m text-white">{projects[currentIndex].desc}</h3>
                  <h2 className="text-3xl font-extrabold text-white">{projects[currentIndex].title}</h2>
                  {hoveredIndex === currentIndex && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(projects[currentIndex].link, "_blank");
                      }}
                      className="mt-4 px-4 py-2 text-sm font-medium bg-white text-black rounded-full shadow hover:shadow-lg"
                    >
                      View Project →
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="flex gap-2 mt-6">
        {projects.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              currentIndex === i ? "bg-black scale-125" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Projects;