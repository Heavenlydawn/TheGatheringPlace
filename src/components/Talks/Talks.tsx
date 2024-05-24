import React from "react";
import Header from "../Header/Header";
import TalksHero from "./TalksHero";
import LearnHero from "../Learn/LearnHero";
import Footer from "../Footer/Footer";
const Talks = () => {
  return (
    <div className="gp-light-grey">
      <Header />
      <div className="max-w-max m-auto">
        <div className="xl:max-w-7xl m-auto">
          <TalksHero />
        </div>
        <LearnHero />
      </div>
      <Footer />
    </div>
  );
};

export default Talks;
