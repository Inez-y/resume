import React from "react";
import Header from "./components/Header";
import Landing from "./components/Landing/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import Nav from "./components/Nav";

const App: React.FC = () => {
  return (
    <div className="Main-Content">
      <Header />
      <Nav />
      <Landing />
      {/* <About />
      <Skills />
      <Projects />
      <Contact /> */}
    </div>
  );
};

export default App;
