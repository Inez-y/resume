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

    // Ensure body is scrollable (we'll just snap)
    document.body.style.overflow = "auto";
    document.body.style.height = `${sections.length * 100}vh`; // allow scrolling

    // Make each section fill screen
    sections.forEach((section) => {
      section.style.height = "100vh";
    });

    const snapTo = (index: number) => {
      if (isScrolling || index < 0 || index >= sections.length) return;
      isScrolling = true;
      current = index;

      gsap.to(window, {
        duration: 1, // smoother scroll
        scrollTo: { y: sections[index].offsetTop, autoKill: false },
        ease: "power2.inOut",
        onComplete: () => {
          isScrolling = false;
        },
      });
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling) return;

      const threshold = 10;
      if (e.deltaY > threshold) snapTo(current + 1);
      else if (e.deltaY < -threshold) snapTo(current - 1);
    };

    // Mobile swipe
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      const threshold = 50;

      if (Math.abs(deltaY) > threshold && !isScrolling) {
        if (deltaY > 0) snapTo(current + 1);
        else snapTo(current - 1);
      }
    };

    // Listeners
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      document.body.style.height = ""; // cleanup
    };
  }, []);

  return (
    <main className="w-full">
      {/* <section><Intro /></section> */}
      {/* <section><Education /></section> */}
      {/* <section><Work /></section> */}
      {/* <section><Skill /></section> */}
      <section><Project /></section>
    </main>
  );
};

export default Landing;
