import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Intro: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !imageRef.current || !textRef.current) return;

    // Pin the section so it stays fixed during scroll
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=30%", 
      pin: true,
      scrub: true,
    });

    // Zoom the image as user scrolls
    gsap.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0.7 },
      {
        scale: 1.2,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=30%",
          scrub: true,
        },
      }
    );

    // Move the text upward slightly (parallax feel)
    gsap.fromTo(
      textRef.current,
      { y: 0 },
      {
        y: -100,
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=30%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* Parallax Text */}
      <div ref={textRef} className="z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Experience Innovation
        </h1>
        <p className="mt-4 text-xl md:text-2xl max-w-xl mx-auto text-gray-300">
          Sleek. Powerful. Future-ready.
        </p>
      </div>

      {/* Zooming Image */}
      {/* <img
        ref={imageRef}
        src="/src/assets/intro.png" 
        alt="intro"
        className="absolute bottom-0 w-80 md:w-[500px] object-contain"
      /> */}
    </section>
  );
};

export default Intro;
