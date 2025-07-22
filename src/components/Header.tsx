import React, { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex p-4 shadow-md sticky top-0 z-50">
      <h1 className="">Inez's Playground</h1>
      <nav className={`${isOpen ? "block" : "hidden"} md:flex`}>
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#skills" className="hover:text-blue-600">Skills</a>
        <a href="#projects" className="hover:text-blue-600">Projects</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
