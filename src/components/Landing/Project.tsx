import { useEffect, useRef, useState } from "react";
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

  const projects: ProjectCard[] = [
    {
      title: "Portfolio Website",
      desc: "Responsive React + Tailwind portfolio.",
      link: "#",
      image: "data:image/png;base64,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",
      bgColor: "bg-gray-900",
      glowColor: "rgba(156, 163, 175, 0.5)", // gray
    },
    {
      title: "Task Manager App",
      desc: "Full-stack MERN task management app.",
      link: "#",
      image: "data:image/png;base64,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",
      bgColor: "bg-blue-900",
      glowColor: "rgba(59, 130, 246, 0.5)", // blue
    },
    {
      title: "E-commerce Platform",
      desc: "Next.js + Stripe-based store.",
      link: "#",
      image: "data:image/png;base64,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",
      bgColor: "bg-purple-900",
      glowColor: "rgba(168, 85, 247, 0.5)", // purple
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 10, y: -y * 10 }); // max 10deg tilt
    setTransition(false); // disable snap transition during movement
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setTransition(true); // enable smooth snap back
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6 py-12"
    >
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch gap-6 max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative transition-all duration-500 cursor-pointer perspective ${
              hoveredIndex === index
                ? "brightness-100 z-20"
                : hoveredIndex !== null
                ? "brightness-75 z-10"
                : "brightness-100 z-10"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => {
              setHoveredIndex(null);
              handleMouseLeave();
            }}
            onMouseMove={handleMouseMove}
            onClick={() => window.open(project.link, "_blank")}
          >
            {/* Soft Glow Effect */}
            {hoveredIndex === index && (
              <div
                className="absolute -inset-4 rounded-3xl blur-2xl transition-opacity duration-500"
                style={{
                  background: project.glowColor,
                  opacity: hoveredIndex === index ? 0.7 : 0,
                }}
              ></div>
            )}

            {/* Card */}
            <div
              style={{
                transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                transition: transition ? "transform 0.6s ease" : "none",
              }}
              className={`relative rounded-3xl overflow-hidden w-72 sm:w-80 h-[480px] flex flex-col justify-end p-6 text-grey shadow-lg transition-all duration-500 ${project.bgColor} ${
                hoveredIndex === index ? "shadow-2xl scale-105" : "scale-100"
              }`}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className={`absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
              />

              {/* Overlay Text + Button */}
              <div
                className={`relative z-10 transform transition-all duration-500 ${
                  hoveredIndex === index
                    ? "-translate-y-2 opacity-100"
                    : "translate-y-0 opacity-90"
                }`}
              >
                <h3 className="text-sm font-light">{project.desc}</h3>
                <h2 className="text-2xl font-bold">{project.title}</h2>
                {hoveredIndex === index && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.link, "_blank");
                    }}
                    className="mt-4 px-4 py-2 text-sm font-medium bg-white text-black rounded-full shadow hover:shadow-lg transition-opacity duration-500 opacity-100"
                  >
                    View Project →
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;