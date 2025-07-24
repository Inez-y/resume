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
    const sections = document.querySelectorAll<HTMLElement>("section");
    let current = 0;
    let isScrolling = false;

    // Make each section full-screen
    sections.forEach((section) => {
      section.style.height = "100vh";
      section.style.overflow = "hidden";
    });

    const snapTo = (index: number) => {
      if (isScrolling || index < 0 || index >= sections.length) return;
      isScrolling = true;
      current = index;
    
      gsap.to(window, {
        duration: 0.25,  // faster snap 
        scrollTo: { y: sections[index].offsetTop, autoKill: false },
        ease: "power2.out", // faster easing
        onComplete: () => {
          // Allow scrolling again quickly
          isScrolling = false;
        },
      });
    };    

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling) return; // block if still animating

      const threshold = 30; // minimum wheel delta
      if (e.deltaY > threshold) {
        snapTo(current + 1);
      } else if (e.deltaY < -threshold) {
        snapTo(current - 1);
      }
    };

    document.body.style.overflow = "hidden"; // disable native scroll
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      document.body.style.overflow = ""; // restore scroll
    };
  }, []);

  return (
    <main className="w-full">
      <section><Intro /></section>
      <section><Education /></section>
      <section><Work /></section>
      <section><Skill /></section>
      <section><Project /></section>
    </main>
  );
};

export default Landing;
