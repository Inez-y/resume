import React, { useState } from "react";

const Header: React.FC = () => {
  return (
    <header className="flex p-4 shadow-md sticky top-0 z-50 justify-center">
      <h1 className="flex font-extrabold text-4xl"> Inez's Playground </h1>
    </header>
  );
};

export default Header;
