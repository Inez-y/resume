import useScrollFadeIn from "./useScrollFadeIn";

const Education2: React.FC = () => {
  const ref = useScrollFadeIn();

  return (
    <section
      id="Education2"
      ref={ref}
      className="flex flex-col md:flex-row items-center justify-center bg-gray-50 px-6 md:px-20 w-full overflow-hidden"
    >
      <div className="flex flex-col">
        <h2 className="text-5xl font-bold">Education</h2>
        <p className="text-2xl">
            Bachelor's in Arts
        </p>
        <p className="text-lg">
          English Language and Literature at Academic Credit Bank System for Bachelors (2021)
        </p>
        <p className="text-m text-gray-600">
          Developed critical thinking, analytical, and communication skills in English alongside with a board understanding of Enlighsh lliterature.
        </p>

        <br></br><br></br>

        <p className="text-lg text-sky-800 italic">
          It's such a joy to explore and expand knowledge!
        </p>
      </div>
    </section>
  );
};

export default Education2;
