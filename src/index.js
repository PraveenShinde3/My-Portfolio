import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Certification from "./components/Certification";
import "./style/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
    <About />
    <Projects />
    <Certification />
  </React.StrictMode>
);
