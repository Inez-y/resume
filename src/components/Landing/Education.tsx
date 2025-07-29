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
      id="Education"
      ref={ref}
      className="flex flex-col md:flex-row items-center justify-center bg-gray-50 px-6 md:px-20 w-full overflow-hidden"
    >
      <div className="flex flex-row">
        <div className="flex flex-col py-2 text-right p-2">
          <h2 className="text-5xl font-bold text-right">Education</h2>
          <p className="text-2xl p-2">
            Bachelor's in Applied Science (2027)
            <br></br>
            Diploma in Computer Science Technology (2025)
          </p>
          <p className="text-xl p-2">
            British Columbia Institute Technology
          </p>

          <p className="text-lg text-gray-600 p-2">
            Focused on full-stack development, project-based hadns-on learning, and team
            collaborations.
          </p>

          <p className="text-lg text-gray-600 p-2">
            Have been taking leadership roles such as a set representative, a campus councillor and a vice-president of fitness club.
          </p>
        </div>

        {/* First Education */}
        <div className="flex flex-col py-2">
          <div className="flex">
            <p className="flex rounded-lg"> <CardCarousel cards={cards}/> </p>
          </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default Education;
