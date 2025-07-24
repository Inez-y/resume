import React, { useState } from "react";

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
    //<nav className={`${isOpen ? "block" : "hidden"} md:flex justify-between`}>
  return (
    <nav className="flex justify-center">
        <a href="#about" className="hover:text-blue-600 m-2">About</a>
        <a href="#skills" className="hover:text-blue-600 m-2">Skills</a>
        <a href="#projects" className="hover:text-blue-600 m-2">Projects</a>
        <a href="#contact" className="hover:text-blue-600 m-2">Contact</a>
    </nav>
  );
};

export default Nav;