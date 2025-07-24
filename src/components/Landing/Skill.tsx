import { useEffect, useRef } from "react";
import useScrollFadeIn from "./useScrollFadeIn";
import gsap from "gsap";

// TODO - add brain image and make greed properly
const skills = [
  { name: "Python", size: "large" },
  { name: "Java", size: "large" },
  { name: "React", size: "large" },
  { name: "TypeScript", size: "medium" },
  { name: "JavaScript", size: "medium" },
  { name: "C", size: "medium" },
  { name: "SQL", size: "medium" },
  { name: "MySQL", size: "small" },
  { name: "HTML", size: "small" },
  { name: "CSS", size: "small" },
  { name: "Rust", size: "small" },
  { name: "Go", size: "small" },
  { name: "R", size: "small" },
];

const Skills: React.FC = () => {
  const ref = useScrollFadeIn();
  const bubbleRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Gentle floating animation (uniform speed for all)
    bubbleRefs.current.forEach((bubble) => {
      if (!bubble) return;

      const floatX = Math.random() * 30 - 15; // -15px to +15px
      const floatY = Math.random() * 30 - 15;
      const duration = 8; // same for all

      gsap.to(bubble, {
        x: `+=${floatX}`,
        y: `+=${floatY}`,
        duration,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6"
    >
      <h2 className="text-4xl font-bold mb-8">Skills</h2>

      <div className="relative grid grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl">
        {skills.map((skill, idx) => {
          const sizeClass =
            skill.size === "large"
              ? "w-40 h-40 text-xl z-30"
              : skill.size === "medium"
              ? "w-28 h-28 text-lg z-20"
              : "w-20 h-20 text-sm z-10";

          return (
            <div
              key={idx}
              ref={(el) => {
                if (el) bubbleRefs.current[idx] = el;
              }}
              className={`flex items-center justify-center rounded-lg bg-white shadow-md hover:shadow-2xl hover:scale-110 transition-transform duration-300 font-semibold text-center ${sizeClass}`}
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
