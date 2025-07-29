import { useEffect, useRef } from "react";
import useScrollFadeIn from "./useScrollFadeIn";
import gsap from "gsap"; // Add GSAP import

// Colour Adjustment Needed
const skills = [
  { name: "Python", size: "large", color: "bg-pink-100" },
  { name: "Java", size: "large", color: "bg-blue-100" },
  { name: "React", size: "large", color: "bg-green-100" },
  { name: "TypeScript", size: "medium", color: "bg-yellow-100" },
  { name: "JavaScript", size: "large", color: "bg-purple-100" },
  { name: "C", size: "medium", color: "bg-red-100" },
  { name: "C++", size: "small", color: "bg-orange-100"},
  { name: "SQL", size: "medium", color: "bg-indigo-100" },
  { name: "OOP", size: "large", color: "bg-gray-100" },
  { name: "Agile", size: "small", color: "bg-gray-100" },
  { name: "MySQL", size: "small", color: "bg-pink-100" },
  { name: "HTML", size: "medium", color: "bg-green-100" },
  { name: "CSS", size: "medium", color: "bg-green-100" },
  { name: "Rust", size: "small", color: "bg-yellow-100" },
  { name: "Go", size: "small", color: "bg-purple-100" },
  { name: "R", size: "small", color: "bg-indigo-100" },
  { name: "Ocaml", size: "small", color: "bg-red-100" },
  { name: "Kotlin", size: "small", color: "bg-orange-100"},
  { name: "UX/UI", size: "small", color: "bg-gray-100"},
  { name: "Node.js", size: "medium", color: "bg-indigo-100" },
];

const Skills: React.FC = () => {
  const ref = useScrollFadeIn();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const positionBubbles = () => {
      const container = containerRef.current;
      if (!container) return;
     
      const { offsetWidth , offsetHeight } = container;
      const bubbles = Array.from(container.children) as HTMLElement[];

      const centerX = offsetWidth / 2;
      const centerY = offsetHeight / 6;
      let angle = 0;
      let radius = 0;

      const angleStep = 15; // Lower value → spiral wraps tighter (more loops)
      const baseSpacing = Math.min(offsetWidth * 0.3, offsetHeight * 0.3) / 100; // Smaller divisor → spiral is tighter

      bubbles.forEach((bubble, idx) => {
        const size = bubble.offsetWidth; // dynamic bubble size
        const gap = size * 0.25; // Increase multiplier to space out bubbles more

        angle += angleStep;
        radius += gap; // increment radius by each bubble’s size

        const x = centerX + radius * Math.cos(angle) - size /4;
        const y = centerY + radius * Math.sin(angle) - size /5;

        bubble.style.left = `${x}px`;
        bubble.style.top = `${y}px`;

        // Floating animation
        const floatDistance = 20 + Math.random() * 10; // 10-20px movement
        const floatDuration = 4 + Math.random() * 2;   // 4-6 seconds loop

        gsap.to(bubble, {
          y: `+=${floatDistance}`,
          duration: floatDuration,
          yoyo: true,
          repeat: -1,
          ease: "bounce.inOut",
          delay: Math.random() * 10, // random delay so they don't move together
        });
        
      });
    };

    positionBubbles();
    window.addEventListener("resize", positionBubbles);
    return () => window.removeEventListener("resize", positionBubbles);
  }, []);

  return (
    <section
      id="Skills"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 w-full overflow-auto pt-20"
    >
      <h2 className="absolute inset-0 text-9xl text-gray-500 font-bold pt-40">Skills </h2>
      

      {/* Responsive spiral container */}
      <div
        ref={containerRef}
        className="relative w-full max-w-[70%] md:max-w-[1200px] max-h-[55%] sm:h-[600px] md:h-[700px]"
      >
        {skills.map((skill, idx) => {
        const sizeClass =
        skill.size === "large"
          ? "w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 text-lg md:text-lg"
          : skill.size === "medium"
          ? "w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 text-m md:text-sm"
          : "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-[10px] sm:text-xs";

          return (
            <div
              key={idx}
              className={`opacity-80 absolute flex items-center justify-center rounded-full ${skill.color} shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 font-bold ${sizeClass}`}
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
