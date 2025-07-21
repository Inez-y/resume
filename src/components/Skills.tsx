import React from "react";

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Node.js",
  "Tailwind CSS",
  "SQL & NoSQL",
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-20 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, idx) => (
          <li
            key={idx}
            className="p-4 bg-white shadow rounded-lg text-center hover:shadow-lg transition"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
