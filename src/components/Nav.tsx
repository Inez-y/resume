import React, { useState } from "react";

const Nav: React.FC = () => {
  return (
    <nav className="flex flex-row justify-center overflow-hidden">
      <a href="#Intro" className="hover:text-blue-600 mx-2">Home</a>
        <a href="#Education" className="hover:text-blue-600 mx-2">Education</a>
        <a href="#Skills" className="hover:text-blue-600 mx-2">Skills</a>
        <a href="#Projects" className="hover:text-blue-600 mx-2">Projects</a>
        <a href="#Contact" className="hover:text-blue-600 mx-2">Contact</a>
    </nav>
  );
};

export default Nav;