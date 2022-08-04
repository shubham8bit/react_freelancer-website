import React from "react";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import CopyRight from "./CopyRight";
import Footer from "./Footer";
import MastHead from "./MastHead";
import NavBar from "./NavBar";
import PortfolioSection from "./PortfolioSection";
import PortfolioModalOne from "./PortfolioModalOne";
import PortfolioModalFive from "./PortfolioModalFive";
import PortfolioModalSix from "./PortfolioModalSix";
import PortfolioModalTwo from "./PortfolioModalTwo";
import PortfolioModalThree from "./PortfolioModalThree";
import PortfolioModalFour from "./PortfolioModalFour";

const App = () => {
  return (
    <div>
      <NavBar title="My Portfolio" />
      <MastHead
        name="Shubham Mangudkar"
        skills="Software Engineer - Web Dev - Rail Enthusiast"
      />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <Footer
        addline1="Sant Tukaram Nagar"
        addline2="Pimpri, Pune 411018"
        abouttext="This website is created with help of React and Bootstrap by"
        linkedInURL="https://www.linkedin.com/in/shubh-mangudkar"
      />
      <CopyRight name="Shubham Mangudkar 2022" />
      <PortfolioModalOne />
      <PortfolioModalTwo />
      <PortfolioModalThree />
      <PortfolioModalFour />
      <PortfolioModalFive />
      <PortfolioModalSix />
    </div>
  );
};

export default App;
