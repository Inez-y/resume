import React from "react";
import Header from "./components/Header";
import Landing from "./components/Landing/Main";

const App: React.FC = () => {
  return (
    <div className="Main-Content">
      <Header />
      <Landing />
    </div>
  );
};

export default App;
