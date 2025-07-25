import { useEffect, useRef } from "react";
import useScrollFadeIn from "./useScrollFadeIn";

// Spiral layout settings
const CENTER_X = 400; // approximate center (will adjust for container)
const CENTER_Y = 300;
const SPIRAL_SPACING = 80; // distance between rings
const ANGLE_STEP = 0.6;    // how tightly the spiral turns

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

    const bubbles = Array.from(container.children) as HTMLElement[];
    let angle = 0;
    let radius = 0;

    bubbles.forEach((bubble, idx) => {
      // Large skills go right in the center
      if (skills[idx].size === "large") {
        bubble.style.left = `${CENTER_X}px`;
        bubble.style.top = `${CENTER_Y}px`;
      } else {
        // Spiral outward for medium and small
        angle += ANGLE_STEP;
        radius += SPIRAL_SPACING / (skills[idx].size === "medium" ? 1.5 : 1);

        const x = CENTER_X + radius * Math.cos(angle);
        const y = CENTER_Y + radius * Math.sin(angle);

        bubble.style.left = `${x}px`;
        bubble.style.top = `${y}px`;
      }
    });
  }, []);

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6"
    >
      <h2 className="text-4xl font-bold mb-8">Skills</h2>

      {/* Absolute-positioned spiral container */}
      <div
        ref={containerRef}
        className="relative w-[800px] h-[600px] mx-auto"
      >
        {skills.map((skill, idx) => {
          const sizeClass =
            skill.size === "large"
              ? "w-40 h-40 text-xl"
              : skill.size === "medium"
              ? "w-28 h-28 text-lg"
              : "w-20 h-20 text-sm";

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
