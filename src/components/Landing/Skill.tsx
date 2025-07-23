import { useEffect, useRef } from "react";
import useScrollFadeIn from "./useScrollFadeIn";

const skills = ["React", "TypeScript", "Node.js", "Tailwind CSS", "GSAP"];

const Skills: React.FC = () => {
  const ref = useScrollFadeIn();

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6"
    >
      <h2 className="text-4xl font-bold mb-6">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-xl">
        {skills.map((skill, idx) => (
          <li
            key={idx}
            className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
