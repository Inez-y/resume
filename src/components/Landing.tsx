import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Landing: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%", // animation starts when 80% into viewport
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 text-center px-6"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Hi, I’m Jane Doe
      </h1>
      <p className="text-lg md:text-2xl max-w-2xl">
        Software Engineer | Crafting Interactive Web Experiences
      </p>

    </section>
  );
};

export default Landing;
