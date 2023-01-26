import React from "react";
import "../style/projectCard.css";
import CardImg from "../image/RandomPasswordGenerator.jpg";
import "aos/dist/aos.css";

const ProjectCard = (props) => {
  return (
    <div data-aos="fade-right" className="project-card-wrapper">
      <div className="project-card">
        <div className="left">
          {/* <img className="card-bg" src={CardBg} alt="" /> */}
          <img className="card-img" src={CardImg} alt="" />
        </div>
        <div className="right">
          <h3>{props.title}</h3>
          <p>
            Our process includes 3 levels of internal QA + unlimited rounds of
            UI revisions. Combine that with predictable timelines and consistent
            budgets and your designs are executed to your (and your clients’)
            highest standards.
          </p>
          <button>Demo</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
