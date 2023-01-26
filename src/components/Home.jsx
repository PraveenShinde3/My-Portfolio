import React from "react";
import "../style/home.css";
import "aos/dist/aos.css";

const Home = () => {
  return (
    <section className="home-section ">
      <header data-aos="fade-down">
        <nav>
          <div className="logo"></div>
          <div className="navItems">
            <ul>
              <li>
                <a href="#about">
                  <span>01.</span> About
                </a>
              </li>
              <li>
                <a href="#projects">
                  <span>02.</span> Projects
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <div data-aos="fade-up" className="content">
          <h1>Praveen Shinde</h1>
          <h3>SOFTWARE DEVELOPER</h3>
          <button>Download CV</button>
        </div>
        <div className="scroll">
          <p>Scroll</p>
          <div className="scroll-line"></div>
        </div>
      </main>
    </section>
  );
};

export default Home;
