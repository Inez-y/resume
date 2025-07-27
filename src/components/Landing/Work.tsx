import { useEffect, useRef } from "react";
import useScrollFadeIn from "./useScrollFadeIn";

const Work: React.FC = () => {
  const ref = useScrollFadeIn();

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6"
    >
      <h2 className="flex flex-col text-4xl font-bold mb-4">Work Experience</h2>
      <p className="flex flex-row text-lg max-w-2xl">
        Campus Councillor at BCIT (Sep 2024 - June 2025).
      </p>

      <p className="flex flex-row text-lg max-w-2xl">
        Restaurant Manger at Kuma Restaurant Group Inc (Dec 2019 - May 2023)
      </p>

      <p className="flex flex-row text-lg max-w-2xl">
        Teacher as a self-employed (Mar 2013 - Dec 2019)
      </p>
    </section>
  );
};

export default Work;