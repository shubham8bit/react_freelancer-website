import React from "react";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import CopyRight from "./CopyRight";
import Footer from "./Footer";
import MastHead from "./MastHead";
import NavBar from "./NavBar";
import PortfolioSection from "./PortfolioSection";

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
    </div>
  );
};

export default App;
