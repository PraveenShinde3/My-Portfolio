import React from "react";

import "../style/iconCard.css";
import "aos/dist/aos.css";

const IconCard = (props) => {
  return (
    <div data-aos="flip-left" className="icon-card-wrapper">
      <div className="card">
        <div className="icon-img">
          <img src={props.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default IconCard;
