import React from "react";

const Footer = ({
  addline1 = "Address Line 1",
  addline2 = "Address Line 2",
  abouttext = "About text",
  linkedInURL = "LinkedIn URL",
}) => {
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          {/* <!-- Footer Location--> */}
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Location</h4>
            <p className="lead mb-0">
              {addline1}
              <br />
              {addline2}
            </p>
          </div>
          {/* <!-- Footer Social Icons--> */}
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Around the Web</h4>
            <a className="btn btn-outline-light btn-social mx-1" href="#!">
              <i className="fab fa-fw fa-facebook-f"></i>
            </a>
            <a className="btn btn-outline-light btn-social mx-1" href="#!">
              <i className="fab fa-fw fa-twitter"></i>
            </a>
            <a
              className="btn btn-outline-light btn-social mx-1"
              href={linkedInURL}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-fw fa-linkedin-in"></i>
            </a>
            <a className="btn btn-outline-light btn-social mx-1" href="#!">
              <i className="fab fa-fw fa-dribbble"></i>
            </a>
          </div>
          {/* <!-- Footer About Text--> */}
          <div className="col-lg-4">
            <h4 className="text-uppercase mb-4">About Freelancer</h4>
            <p className="lead mb-0">
              {abouttext}
              <a href="http://startbootstrap.com"> Start Bootstrap</a> .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
