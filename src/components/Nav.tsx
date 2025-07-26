import React, { useState } from "react";

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
    //<nav className={`${isOpen ? "block" : "hidden"} md:flex justify-between`}>
  return (
    <nav className="flex flex-row justify-center">
        <a href="https://github.com/Inez-y" className="hover:text-blue-600 mx-2">Github</a>
        <a href="https://www.linkedin.com/in/inez-y/" className="hover:text-blue-600 mx-2">Linked-In</a>
        <a href="mailto:inez3cs@gmail.com" className="hover:text-blue-600 mx-2">Email</a>
        <a href="tel:+16047791223" className="hover:text-blue-600 mx-2">Call</a>
    </nav>
  );
};

export default Nav;