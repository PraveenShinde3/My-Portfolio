import React from "react";
import "../style/project.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="project-section" id="projects">
      <div className="project-wrapper">
        <div className="project-header">
          <h2>PROJECTS</h2>
        </div>
        <div className="card-wrapper">
          <ProjectCard title="Password Generator" />
          <ProjectCard title="Calculator Web Application" />
          <ProjectCard title="Password Generator" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
