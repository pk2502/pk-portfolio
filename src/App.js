import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Hero />
        <Project />
      </main>
    </React.Fragment>
  );
}

export default App;
