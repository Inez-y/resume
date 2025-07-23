import Intro from "./Intro";
import Education from "./Education";
import Work from "./Work";
import Skill from "./Skill";
import Project from "./Project";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Landing: React.FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    let current = 0;
    let isScrolling = false;

    const snapTo = (index: number) => {
      if (isScrolling || index < 0 || index >= sections.length) return;
      isScrolling = true;
      current = index;

      gsap.to(window, {
        duration: 1,
        scrollTo: { y: sections[index], offsetY: 0 },
        ease: "power2.inOut",
        onComplete: () => {
          isScrolling = false;
        }        
      });
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) snapTo(current + 1);
      else snapTo(current - 1);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <main className="h-screen w-full">
      <section><Intro /></section>
      <section><Education /></section>
      <section><Work /></section>
      <section><Skill /></section>
      <section><Project /></section>
    </main>
  );
};

export default Landing;
