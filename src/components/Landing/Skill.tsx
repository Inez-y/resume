import useScrollFadeIn from "./useScrollFadeIn";

// Make bubbles
const skills = ["Python", "Java", "JavaScript", "C", "Rust", "Go", "R", "SQL", "MySQL", "React Native", "React", "TypeScript", "HTML", "CSS"];
const techTools = ["Node.js", "Tailwind CSS", "Bootstrap", "GSAP", "AWS Clouds", "Phoenix Framework", "Obejct Oriented Programming", "Figma", "Slack", "Agile Methodology"];
const interpersonalSkills = ["Leadership", "Effective Communication", ""];

const Skills: React.FC = () => {
  const ref = useScrollFadeIn();

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6"
    >
      {/* Left Column */}
      <div> 
        <h2 className="flex-col text-4xl font-bold mb-6">Skills</h2>
        <p className="text-right"> Programming Languages </p>
        <p className="text-right"> Tech Tools </p>
      </div>

      {/* Right Column */}
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
