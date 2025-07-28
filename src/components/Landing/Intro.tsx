import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import picture from "assets/001.jpeg";

const Intro: React.FC = () => {
  const roles = ["full-stack programmer", "new grad", "team player", "game developer", "dancer"];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(120); // typing speed

  useEffect(() => {
    const currentFull = roles[currentRole];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      setDisplayText(currentFull.substring(0, displayText.length + 1));
      setSpeed(120);
      if (displayText.length + 1 === currentFull.length) {
        timer = setTimeout(() => setIsDeleting(true), 1500);
      }
    } else {
      setDisplayText(currentFull.substring(0, displayText.length - 1));
      setSpeed(60);
      if (displayText.length === 0) {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }

    timer = setTimeout(() => {}, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole]);

  return (
    <div className="text-center px-6">
      {/* Title */}
      <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8">
        Hello!
      </h1>

      {/* Two-column section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Left side: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={picture}
            alt="Profile"
            className="rounded-full shadow-lg max-w-40 max-h-40 md:max-w-sm"
          />
        </div>

        {/* Right side: Typing text */}
        <div className="w-full md:w-1/2 text-left">
        <p className="text-xl md:text-2xl mb-4"> My name is Inez, I'm a </p>

          <p className="text-xl md:text-2xl mb-4">
            {" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={displayText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="font-semibold text-blue-500"
              >
                {displayText}
              </motion.span>
            </AnimatePresence>
            <span className="blinking-cursor">|</span>
          </p>
          <p className="text-lg md:text-xl text-gray-600">
            Scroll down to explore my projects, experience, and more.
          </p>
        </div>
      </div>

      {/* Blinking cursor animation */}
      <style>
        {`
          .blinking-cursor {
            display: inline-block;
            animation: blink 1s steps(2, start) infinite;
          }
          @keyframes blink {
            to {
              visibility: hidden;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Intro;
