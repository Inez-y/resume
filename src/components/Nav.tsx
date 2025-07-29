import React, { useState } from "react";

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
    //<nav className={`${isOpen ? "block" : "hidden"} md:flex justify-between`}>
  return (
    <nav className="flex flex-row justify-center">
        <a href="#Education" className="hover:text-blue-600 mx-2">Educatioin</a>
        <a href="#Skills" className="hover:text-blue-600 mx-2">Skills</a>
        <a href="#Projects" className="hover:text-blue-600 mx-2">Projects</a>
        <a href="#Contact" className="hover:text-blue-600 mx-2">Contact</a>
    </nav>
  );
};

export default Nav;