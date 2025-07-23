import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Intro: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (sectionRef.current && textRef.current) {
      // Pinning effect (like Apple’s fixed hero)
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: true,
      });

      // Parallax effect for text
      gsap.fromTo(
        textRef.current,
        { y: 0 },
        {
          y: -100,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=200%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 text-center"
    >
      <h1
        ref={textRef}
        className="text-6xl md:text-7xl font-bold tracking-tight"
      >
        Welcome to My Portfolio
      </h1>
      <p className="text-xl md:text-2xl mt-6 max-w-2xl">
        Creating interactive, elegant web experiences.
      </p>
    </section>
  );
};

export default Intro;
