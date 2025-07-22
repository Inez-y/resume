import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div className="Main-Content">
      <Header />
      {/* <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact /> */}
    </div>
  );
};

export default App;
