import React from "react";
import "../style/about.css";
import Img from "../image/ProfilePicture.png";
import IconCard from "./IconCard";
import Html from "../image/icons/html.svg";
import Java from "../image/icons/java.svg";
import Css from "../image/icons/css.svg";
import Javascript from "../image/icons/javascript.svg";
import Nodejs from "../image/icons/nodeJs.svg";
import ReactIcon from "../image/icons/react.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="about-section" id="about">
      <div className="about-wrapper">
        <div className="about-text-img-wrapper">
          <div className="text-img-box">
            <p data-aos="fade-up">
              Hi my name is <span>Praveen Shinde</span> currently working as a
              developer in <span>TCS</span> (Tata Consultuncy Service) in
              Mumbai. I have an <span>1+ years</span> of experience in the IT
              indsutry. Love to work on the Frontend side as well as sometime on
              the backend....
            </p>
            <img data-aos="fade-up" src={Img} alt="Profile" />
          </div>
        </div>
        <div className="icon-wrapper">
          <IconCard img={Html} />
          <IconCard img={Css} />
          <IconCard img={Javascript} />
          <IconCard img={ReactIcon} />
          <IconCard img={Nodejs} />
          <IconCard img={Java} />
          <IconCard img={Html} />
        </div>
      </div>
    </section>
  );
};

export default About;
