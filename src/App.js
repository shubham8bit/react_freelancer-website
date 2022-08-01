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
      <NavBar />
      <MastHead />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <CopyRight />
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
