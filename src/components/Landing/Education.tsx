import useScrollFadeIn from "./useScrollFadeIn";
import CardCarousel from "../Reusables/CardCarousel";

const Education: React.FC = () => {
  const ref = useScrollFadeIn();

  const cards = [
    {
      src: "src/assets/edu1.jpeg",
      caption: "Organized a pre-orientation meeting before the first semester started.",
    },
    {
      src: "src/assets/edu2.jpeg",
      caption: "As a set reprentative, hiked with class friends to releve stress after the first midterm.",
    },
    {
      src: "src/assets/edu3.jpeg",
      caption: "Happily graduated on June 2025.",
    },
    {
      src: "src/assets/edu4.jpeg",
      caption: "Presented the personal project, the Calculator to a class.",
    },
    {
      src: "src/assets/edu5.jpeg",
      caption: "As a vice-president of fitness club, launched the fitness club merch at the first time.",
    },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-50 px-6 md:px-20 gap-10 w-full"
    >
      <div className="flex flex-col">
        <h2 className="text-5xl font-bold">Education</h2>

        {/* First Education */}
        <div className="py-2">
          <p className="text-2xl">
            Diploma in Computer Science 
          </p>
          <p className="text-lg">
          Computer Systems Technology at British Columbia Institute Technology (2025)
          </p>
          <p className="text-m text-gray-600">
            Focused on full-stack development, project-based hadns-on learning, and team
            collaborations.
          </p>
          <CardCarousel cards={cards} />
        </div>

        {/* Second Education */}
        <div className="py-20">
          <p className="text-xl">
              Bachelor's in Arts
            </p>
            <p className="text-l">
            English Language and Literature at Academic Credit Bank System for Bachelors (2021)
            </p>
            <p className="text-m text-gray-600">
              Developed critical thinking, analytical, and communication skills in English alongside with a board understanding of Enlighsh lliterature.
            </p>
          </div>
      </div>
    </section>
  );
};

export default Education;
