import React from "react";
import Portfolio from "./Portfolio";

const PortfolioSection = () => {
  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        {/* <!-- Portfolio Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Portfolio
        </h2>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* <!-- Portfolio Grid Items--> */}
        <div className="row justify-content-center">
          {/* <!-- Portfolio Item 1--> */}
          <Portfolio imgUrl="img/portfolio/cabin.png" />

          {/* <!-- Portfolio Item 2--> */}
          <Portfolio imgUrl="img/portfolio/cake.png" />

          {/* <!-- Portfolio Item 3--> */}
          <Portfolio imgUrl="img/portfolio/circus.png" />

          {/* <!-- Portfolio Item 4--> */}
          <Portfolio imgUrl="img/portfolio/game.png" />

          {/* <!-- Portfolio Item 5--> */}
          <Portfolio imgUrl="img/portfolio/safe.png" />

          {/* <!-- Portfolio Item 6--> */}
          <Portfolio imgUrl="img/portfolio/submarine.png" />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
