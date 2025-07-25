import useScrollFadeIn from "./useScrollFadeIn";
import CardCarousel from "../Reusables/CardCarousel";

const Education: React.FC = () => {
  const ref = useScrollFadeIn();

  const cards = [
    {
      src: "data:image/png;base64,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",
      caption: "Final year project presentation at the tech showcase (2020).",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0kb7xYgIn7zIr4moMbONwFv5UMaPQi1OeZw&s",
      caption: "Collaborating on a full-stack application during coursework.",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVHJsyABNzdUAR8VcOY-T6mlgnlBEHSS9n4A&s",
      caption: "Winning hackathon project with my development team.",
    },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-50 px-6 md:px-20 gap-10 w-full"
    >
      <div className="flex-2 space-y-4">
        <h2 className="text-4xl font-bold">Education</h2>

        {/* First Education */}
        <div className="py-2">
          <p className="text-xlg">
            Bachelor’s in Computer Science – Your University Here (2020)
          </p>
          <p className="text-base text-gray-600">
            Focused on full-stack development, project-based hadns-on learning, and team
            collaborations.
          </p>
          <CardCarousel cards={cards} />
        </div>
      </div>
    </section>
  );
};

export default Education;
