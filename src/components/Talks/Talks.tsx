import React from "react";
import Header from "../Header/Header";
import TalksHero from "./TalksHero";
import Footer from "../Footer/Footer";
const Talks = () => {
  return (
    <div className="gp-light-grey">
      <Header />
      <div className="max-w-max m-auto">
      <TalksHero />
      </div>
      <Footer />
    </div>
  );
};

export default Talks;
