import React from "react";
import "../style/certificateCard.css";

const CertificateCard = (props) => {
  return (
    <div className="certificate-card">
      <div className="cert-card">
        <h2>{props.name}</h2>
        <p>{props.date}</p>
      </div>
    </div>
  );
};

export default CertificateCard;
