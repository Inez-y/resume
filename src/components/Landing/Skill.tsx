import { useEffect, useRef } from "react";
import useScrollFadeIn from "./useScrollFadeIn";

// Colour Adjustment Needed
const skills = [
  { name: "Python", size: "large", color: "bg-pink-200" },
  { name: "Java", size: "large", color: "bg-blue-200" },
  { name: "React", size: "large", color: "bg-green-200" },
  { name: "TypeScript", size: "medium", color: "bg-yellow-200" },
  { name: "JavaScript", size: "medium", color: "bg-purple-200" },
  { name: "C", size: "medium", color: "bg-red-200" },
  { name: "SQL", size: "medium", color: "bg-indigo-200" },
  { name: "MySQL", size: "small", color: "bg-pink-100" },
  { name: "HTML", size: "small", color: "bg-green-100" },
  { name: "CSS", size: "small", color: "bg-blue-100" },
  { name: "Rust", size: "small", color: "bg-yellow-100" },
  { name: "Go", size: "small", color: "bg-purple-100" },
  { name: "R", size: "small", color: "bg-indigo-100" },
  { name: "Ocaml", size: "small", color: "bg-red-100" },
];

const Skills: React.FC = () => {
  const ref = useScrollFadeIn();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const { offsetWidth, offsetHeight } = container;
    const bubbles = Array.from(container.children) as HTMLElement[];

    let angle = 0;
    let radius = 0;

    bubbles.forEach((bubble, idx) => {
      const centerX = offsetWidth / 2;
      const centerY = offsetHeight / 2;

      const spacing = Math.min(offsetWidth, offsetHeight) / 8;
      const angleStep = 0.6;

      if (skills[idx].size === "large") {
        bubble.style.left = `${centerX - bubble.offsetWidth / 2}px`;
        bubble.style.top = `${centerY - bubble.offsetHeight / 2}px`;
      } else {
        angle += angleStep;
        radius += spacing / (skills[idx].size === "medium" ? 1.5 : 1);

        const x = centerX + radius * Math.cos(angle) - bubble.offsetWidth / 2;
        const y = centerY + radius * Math.sin(angle) - bubble.offsetHeight / 2;

        bubble.style.left = `${x}px`;
        bubble.style.top = `${y}px`;
      }
    });

    const handleResize = () => {
      requestAnimationFrame(() => {
        const { offsetWidth, offsetHeight } = container;
        let angle = 0;
        let radius = 0;

        bubbles.forEach((bubble, idx) => {
          const centerX = offsetWidth / 2;
          const centerY = offsetHeight / 2;
          const spacing = Math.min(offsetWidth, offsetHeight) / 8;
          const angleStep = 0.6;

          if (skills[idx].size === "large") {
            bubble.style.left = `${centerX - bubble.offsetWidth / 2}px`;
            bubble.style.top = `${centerY - bubble.offsetHeight / 2}px`;
          } else {
            angle += angleStep;
            radius += spacing / (skills[idx].size === "medium" ? 1.5 : 1);

            const x = centerX + radius * Math.cos(angle) - bubble.offsetWidth / 2;
            const y = centerY + radius * Math.sin(angle) - bubble.offsetHeight / 2;

            bubble.style.left = `${x}px`;
            bubble.style.top = `${y}px`;
          }
        });
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      ref={ref}
      // mw-auto doesn't work
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-96"
    >
      <h2 className="text-4xl font-bold mb-8">Skills</h2>

      {/* Responsive spiral container */}
      <div
        ref={containerRef}
        className="relative w-full max-w-[90%] md:max-w-[1200px] h-[500px] sm:h-[600px] md:h-[700px] mx-auto"
      >
        {skills.map((skill, idx) => {
          const sizeClass =
            skill.size === "large"
              ? "w-32 h-32 sm:w-40 sm:h-40 text-lg sm:text-xl"
              : skill.size === "medium"
              ? "w-20 h-20 sm:w-28 sm:h-28 text-base sm:text-lg"
              : "w-14 h-14 sm:w-20 sm:h-20 text-xs sm:text-sm";

          return (
            <div
              key={idx}
              className={`absolute flex items-center justify-center rounded-full ${skill.color} shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 font-semibold text-gray-700 ${sizeClass}`}
            >
              {skill.name}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
