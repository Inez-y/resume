import { useEffect, useRef } from "react";
import useScrollFadeIn from "./useScrollFadeIn";

const Education: React.FC = () => {
  const ref = useScrollFadeIn();

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6"
    >
      <h2 className="text-4xl font-bold mb-4">Education</h2>
      <p className="text-lg max-w-2xl">
        Bachelor’s in Computer Science – Your University Here (2020)
      </p>
    </section>
  );
};

export default Education;
