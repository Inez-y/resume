import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !imageRef.current || !textRef.current) return;

    // Pin the section, but fade it out as we scroll past
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=70%",  
      pin: true,
      scrub: true,
    });

    // Zoom the image
    gsap.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0.8 },
      {
        scale: 1.5,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=70%",
          // scrub: true,
          scrub: 0.2,
        },
      }
    );

    // Move the text
    gsap.fromTo(
      textRef.current,
      { y: 0 },
      {
        y: -120,
        ease: "power1.in",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=70%",
          // scrub: true,
          scrub: 0.2,
        },
      }
    );

    // Fade OUT the whole section so it disappears smoothly
    gsap.to(sectionRef.current, {
      opacity: 5,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "bottom center",
        end: "bottom top",
        // scrub: true,
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center bg-white text-black overflow-hidden"
    >
      <div className="Restaurant">
        <h1 className="flex-col text-4xl md:text-7xl font-bold tracking-tight">
          Work Expereience
        </h1>

        {/* Text */}
        <div ref={textRef} className="flex-col z-10 text-left px-6">
          <p className="mt-4 text-3xl md:text-2xl max-w-xl mx-auto">
            Restaurant.
          </p>
          <p className="mt-4 text-xl md:text-2xl max-w-xl mx-auto">
            Too. Fun.
          </p>
        </div>

        {/* Product Image (absolute, doesn't affect flow) */}
        {/* <img
          ref={imageRef}
          src="https://images.squarespace-cdn.com/content/v1/56a2785c69a91af45e06a188/1543426453160-KSUDLXTCD7AL1LB67OQW/Restaurant-Leadership-BetterManager.png?format=1500w"  
          alt="Work"
          className="flex-col absolute bottom-0 w-80 md:w-[500px] max-w-screen-xl object-contain"
        /> */}
      </div>

    </section>
  );
};

export default Work;

