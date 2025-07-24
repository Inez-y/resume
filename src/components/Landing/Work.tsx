import { useEffect, useRef } from "react";
import useScrollFadeIn from "./useScrollFadeIn";

const Work: React.FC = () => {
  const ref = useScrollFadeIn();

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-row items-center justify-center bg-white text-center px-6"
    >
      <h2 className="flex flex-row text-4xl font-bold mb-4">Work Experience</h2>
      <p className="flex flex-row text-lg max-w-2xl">
        Software Engineer at [Company], building scalable web apps (2021–Present).
      </p>

      <p className="flex flex-row text-lg max-w-2xl">
        Software Engineer at [Company], building scalable web apps (2021–Present).
      </p>

    </section>
  );
};

export default Work;
