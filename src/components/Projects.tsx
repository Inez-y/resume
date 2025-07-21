import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal website showcasing my skills and projects.",
    link: "#",
  },
  {
    title: "Task Manager App",
    description: "A full-stack MERN app to manage tasks and productivity.",
    link: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="p-6 bg-gray-50 shadow rounded-lg hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
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
