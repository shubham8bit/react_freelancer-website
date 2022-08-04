import React from "react";

const AboutSection = () => {
  return (
    <section className="page-section bg-primary text-white mb-0" id="about">
      <div className="container">
        {/* <!-- About Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-white">
          About
        </h2>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* <!-- About Section Content--> */}
        <div className="row">
          <div className="col-lg-4 ms-auto">
            <p className="lead">
              I am a software engineer who is passionate about learning and
              building web apps using React.
            </p>
          </div>
          <div className="col-lg-4 me-auto">
            <p className="lead">
              Along with Web development I also love coding in Java and also
              learning it's framework like Spring Boot.
            </p>
          </div>
        </div>
        {/* <!-- About Section Button--> */}
        <div className="text-center mt-4">
          <a
            className="btn btn-xl btn-outline-light"
            href="https://startbootstrap.com/theme/freelancer/"
          >
            <i className="fas fa-download me-2"></i>
            Free Download!
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
