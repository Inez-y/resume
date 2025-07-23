import Intro from "./Intro";
import Education from "./Education";
import Work from "./Work";
import Skill from "./Skill";
import Project from "./Project";

const Landing: React.FC = () => {
  return (
    <main className="overflow-hidden">
      <Intro />
      <Education />
      <Work />
      <Skill />
      <Project />
    </main>
  );
};

export default Landing;
