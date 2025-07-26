import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import useScrollFadeIn from "./useScrollFadeIn";

import project1 from "assets/project1.jpeg";
import project2 from "assets/project2.jpeg";
import project3 from "assets/project3.jpg";
import project4 from "assets/project4.png";
import project5 from "assets/project5.jpeg";
import project6 from "assets/project6.png";

interface ProjectCard {
  title: string;
  desc: string;
  link: string;
  image: string;
  bgColor?: string;
  glowColor: string;
}

const Projects: React.FC = () => {
  const ref = useScrollFadeIn();
  const [index, setIndex] = useState(0); 
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const controls = useAnimation();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const projects: ProjectCard[] = [
    {
      title: "Inez's Playground",
      desc: "Responsive React + Tailwind portfolio.",
      link: "https://github.com/Inez-y/resume",
      image: project1,
      bgColor: "bg-gray-900",
      glowColor: "rgba(156,163,175,0.5)",
    },
    {
      title: "Catculator",
      desc: "Binary Tree Language Model Logic with Ocaml.",
      link: "https://github.com/Inez-y/ocaml_catculator",
      image: project2,
      bgColor: "bg-gray-900",
      glowColor: "rgba(156,163,175,0.5)",
    },
    {
      title: "Vancouvr Housing Market",
      desc: "Elixir and Phoenix implementation of bordgame Monopoly.",
      link: "https://github.com/Inez-y/COMP4959_Project",
      image: project3,
      bgColor: "bg-blue-900",
      glowColor: "rgba(59,130,246,0.5)",
    },
    {
      title: "Daily Check-In Bot for Discord",
      desc: "Python and discord extension for fitness club check-in.",
      link: "https://github.com/Inez-y/dailyCheckInBot",
      image: project4,
      bgColor: "bg-green-900",
      glowColor: "rgba(34,197,94,0.5)",
    },
    {
      title: "Duolingo Clone",
      desc: "A group LLM project with huggingface.",
      link: "https://github.com/Inez-y/LLM-Storyteller",
      image: project5,
      bgColor: "bg-yellow-900",
      glowColor: "rgba(250,204,21,0.5)",
    },
    {
      title: "Recipt",
      desc: "A group web project with OpenAI API and Clariai API.",
      link: "https://github.com/Inez-y/2800-2024410-DTC08",
      image: project6,
      bgColor: "bg-purple-900",
      glowColor: "rgba(192,132,252,0.5)",
    },
  ];

  const CARD_WIDTH = 300;
  const GAP = 24;
  const AUTOPLAY_INTERVAL = 4000;

  const updateCardsPerView = () => {
    if (window.innerWidth < 640) setCardsPerView(1);
    else if (window.innerWidth < 1024) setCardsPerView(2);
    else setCardsPerView(3);
  };

  useEffect(() => {
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const goToIndex = (newIndex: number) => {
    setIndex(newIndex);
    controls.start({
      x: 0, // Always reset X to 0 because we rebuild visible slides each time
      transition: { type: "spring", stiffness: 300, damping: 30 },
    });
  };

  const nextSlide = () => goToIndex(index + 1);
  const prevSlide = () => goToIndex(index - 1);

  const handleDragEnd = (_: any, info: any) => {
    setIsDragging(false);
    const offset = info.offset.x;
    const threshold = 100;
    if (offset < -threshold) nextSlide();
    else if (offset > threshold) prevSlide();
  };

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [index]);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => nextSlide(), AUTOPLAY_INTERVAL);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Get N cards starting from `index`
  const getVisibleCards = () => {
    const result: ProjectCard[] = [];
    for (let i = 0; i < cardsPerView; i++) {
      const wrappedIndex = (index + i + projects.length) % projects.length;
      result.push(projects[wrappedIndex]);
    }
    return result;
  };

  const visibleCards = getVisibleCards();

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6 overflow-hidden"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <h2 className="text-6xl font-bold mb-20">Projects</h2>

      <div className="relative w-full max-w-6xl">
        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-3 shadow hover:bg-white z-10"
          onClick={prevSlide}
        >
          ◀
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-3 shadow hover:bg-white z-10"
          onClick={nextSlide}
        >
          ▶
        </button>

        {/* Carousel Track */}
        <motion.div
          className="flex items-center justify-center"
          animate={controls}
          drag="x"
          dragConstraints={{ left: -Infinity, right: Infinity }}
          onDragStart={() => {
            setIsDragging(true);
            stopAutoPlay();
          }}
          onDragEnd={handleDragEnd}
        >
          {visibleCards.map((project, idx) => {
            const centerIndex = Math.floor(cardsPerView / 2);
            const isActive = idx === centerIndex;

            return (
              <motion.div
                key={idx}
                className={`relative flex-shrink-0 h-[400px] mx-3 mb-60 rounded-2xl overflow-hidden shadow-lg cursor-pointer ${project.bgColor}`}
                style={{ width: CARD_WIDTH }}
                animate={{
                  scale: isActive ? 1.15 : 0.9,
                  opacity: isActive ? 1 : 0.6,
                }}
                transition={{ duration: 0.3 }}
                onClick={() => window.open(project.link, "_blank")}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="relative z-10 p-4 bg-black/50 text-white">
                  <h3 className="text-sm">{project.desc}</h3>
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
