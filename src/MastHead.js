import React from "react";

const MastHead = ({ name = "Name", skills = "Skills" }) => {
  return (
    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        {/* Masthead Avatar Image */}
        <img
          className="masthead-avatar mb-5"
          src="img/avataaars.svg"
          alt="..."
        />
        {/* Masthead Heading */}
        <h1 className="masthead-heading text-uppercase mb-0">{name}</h1>
        {/* Icon Divider */}
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* Masthead Subheading */}
        <p className="masthead-subheading font-weight-light mb-0">{skills}</p>
      </div>
    </header>
  );
};

export default MastHead;
