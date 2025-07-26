import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import useScrollFadeIn from "./useScrollFadeIn";

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
      title: "Catculator",
      desc: "Responsive React + Tailwind portfolio.",
      link: "#",
      image: "https://via.placeholder.com/400x300?text=Catculator",
      bgColor: "bg-gray-900",
      glowColor: "rgba(156,163,175,0.5)",
    },
    {
      title: "Monopoly",
      desc: "MERN housing market simulation.",
      link: "#",
      image: "https://via.placeholder.com/400x300?text=Monopoly",
      bgColor: "bg-blue-900",
      glowColor: "rgba(59,130,246,0.5)",
    },
    {
      title: "Check-In Bot",
      desc: "Discord automation tool.",
      link: "#",
      image: "https://via.placeholder.com/400x300?text=Check-In+Bot",
      bgColor: "bg-green-900",
      glowColor: "rgba(34,197,94,0.5)",
    },
    {
      title: "Duolingo Clone",
      desc: "Language learning app.",
      link: "#",
      image: "https://via.placeholder.com/400x300?text=Duolingo",
      bgColor: "bg-yellow-900",
      glowColor: "rgba(250,204,21,0.5)",
    },
    {
      title: "Recipt",
      desc: "Receipt tracker app.",
      link: "#",
      image: "https://via.placeholder.com/400x300?text=Recipt",
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
      className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6 py-12 overflow-hidden"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

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
                className={`relative flex-shrink-0 h-[400px] mx-3 rounded-2xl overflow-hidden shadow-lg cursor-pointer ${project.bgColor}`}
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
