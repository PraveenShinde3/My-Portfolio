import React from "react";
import CertificateCard from "./CertificateCard";
import "../style/certification.css";

const Certification = () => {
  return (
    <div className="certification-section">
      <div className="certification-wrapper">
        <div className="certificatio-header">
          <h2>CERTIFICATIONS</h2>
        </div>
        <div className="certification-card-wrapper">
          <CertificateCard
            name="Microsoft Certified - Associate"
            date="Jan 2022"
          />
          <CertificateCard
            name="Google Cloud Certified - Associate"
            date="Jan 2022"
          />
          <CertificateCard name="Docker Certified Associate" date="Jan 2022" />
          <CertificateCard name="Microsoft" date="Jan 2022" />
        </div>
      </div>
    </div>
  );
};

export default Certification;
