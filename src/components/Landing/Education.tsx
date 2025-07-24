import { useEffect, useRef } from "react";
import useScrollFadeIn from "./useScrollFadeIn";

const Education: React.FC = () => {
  const ref = useScrollFadeIn();

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-row items-center justify-center bg-gray-50 text-center px-6"
    >
      <h2 className="flex-row text-4xl font-bold mb-4">Education</h2>
      <div>
        <p className="flex-row text-lg max-w-2xl">
          Bachelor’s in Computer Science – Your University Here (2020)
        </p>
        <p className="flex-row text-lg max-w-2xl">
          Bachelor’s in Computer Science – Your University Here (2020)
        </p>
      </div>
    </section>
  );
};

export default Education;
