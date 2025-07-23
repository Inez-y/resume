import { useEffect, useRef } from "react";
import useScrollFadeIn from "./useScrollFadeIn";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Responsive React + Tailwind portfolio.",
    link: "#",
  },
  {
    title: "Task Manager App",
    desc: "Full-stack MERN task management app.",
    link: "#",
  },
];

const Projects: React.FC = () => {
  const ref = useScrollFadeIn();

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6"
    >
      <h2 className="text-4xl font-bold mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.desc}</p>
            <a
              href={project.link}
              className="text-blue-600 hover:underline mt-4 block"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
