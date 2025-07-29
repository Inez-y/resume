import React, { useState } from "react";
import Nav from "./Nav";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col p-4 shadow-md sticky top-0 z-50 justify-center rounded-lg overflow-hidden bg-white">
      <a href="/" className="flex sticky font-extrabold text-4xl justify-center"> Inez's Playground </a>
      <Nav />
    </header>
  );
};

export default Header;
