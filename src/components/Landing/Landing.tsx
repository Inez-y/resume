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

    // Set all sections to full height & hidden initially
    sections.forEach((section) => {
      section.style.height = "100vh";
      section.style.overflow = "hidden";
      gsap.set(section, { opacity: 0, y: 50 }); // start hidden and slightly down
    });

    const animateSection = (index: number) => {
      sections.forEach((section, i) => {
        if (i === index) {
          gsap.to(section, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
        } else {
          gsap.to(section, { opacity: 0, y: 50, duration: 0.4, ease: "power2.in" });
        }
      });
    };

    const snapTo = (index: number) => {
      if (isScrolling || index < 0 || index >= sections.length) return;
      isScrolling = true;
      current = index;

      gsap.to(window, {
        duration: 0.5,
        scrollTo: { y: sections[index].offsetTop, autoKill: false },
        ease: "power2.out",
        onComplete: () => {
          animateSection(index); // trigger fade-in for active section
          isScrolling = false;
        },
      });
    };

    // Trigger animation for first section on load
    animateSection(0);

    // ----- Desktop (wheel) -----
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling) return;

      const threshold = 10; // minimum scroll distance
      if (e.deltaY > threshold) snapTo(current + 1);
      else if (e.deltaY < -threshold) snapTo(current - 1);
    };

    // ----- Mobile (swipe) -----
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      const threshold = 50; // must swipe at least 50px

      if (Math.abs(deltaY) > threshold && !isScrolling) {
        if (deltaY > 0) snapTo(current + 1);
        else snapTo(current - 1);
      }
    };

    // Disable native scroll (we control all scrolling)
    document.body.style.overflow = "hidden";

    // Event listeners
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      document.body.style.overflow = ""; // restore on unmount
    };
  }, []);

  return (
    <main className="w-full">
      {/* <section><Intro /></section>
      <section><Education /></section>
      <section><Work /></section> */}
      <section><Skill /></section>
      {/* <section><Project /></section> */}
    </main>
  );
};

export default Landing;
