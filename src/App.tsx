import "./App.css";
import Hero from "./components/hero/hero.component";
import About from "./components/about/about.component";
import React from "react";

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Hero />
      <About />
    </div>
  );
};

export default App;
