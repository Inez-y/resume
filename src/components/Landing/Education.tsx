import useScrollFadeIn from "./useScrollFadeIn";
import CardCarousel from "./Reusables/CardCarousel";
import edu1 from "assets/edu1.jpeg";
import edu2 from "assets/edu2.jpeg";
import edu3 from "assets/edu3.jpeg";
import edu4 from "assets/edu4.jpeg";
import edu5 from "assets/edu5.jpeg";

const Education: React.FC = () => {
  const ref = useScrollFadeIn();

  const cards = [
    {
      src: edu1,
      caption: "Organized a pre-orientation meeting \nbefore the first semester started.",
    },
    {
      src: edu2,
      caption: "As a set reprentative, \nhiked with class friends to releve stress after the first midterm.",
    },
    {
      src: edu3,
      caption: "Happily graduated on June 2025.",
    },
    {
      src: edu4,
      caption: "Presented the personal project, \nthe Calculator to a class.",
    },
    {
      src: edu5,
      caption: "As a vice-president of fitness club, \nlaunched the fitness club merch at the first time.",
    },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-50 px-6 md:px-20 w-full pt-20"
    >
      <div className="flex flex-col">
        <h2 className="text-5xl font-bold">Education</h2>

        {/* First Education */}
        <div className="flex flex-col py-2">
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
          <div className="flex items-center justify-center">
            <p className="flex rounded-lg"> <CardCarousel cards={cards}/> </p>
          </div>
        </div>
        
        {/* Second Education */}
        <div className="flex flex-col py-20">
          <p className="text-2xl">
              Bachelor's in Arts
            </p>
            <p className="text-lg">
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
