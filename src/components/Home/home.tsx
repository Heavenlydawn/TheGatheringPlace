import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import HeroCrumbCompile from "../HeroCrumb/HeroCrumbCompile";
import LoveCrumbs from "../LoveCrumbs/LoveCrumbs";
import Benefits from "../Benefits/Benefits";
import Join from "../Join/Join";
import Serve from "../Serve/Serve";
import LearnHero from "../Learn/LearnHero";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div id="home">
      <Header />
      <Hero />
      <div className="max-w-max m-auto">
        <div className="my-12 text-center">
          <h3 className="gp-text-h5">GATHERING PLACE</h3>
          <h1 className="gp-text-h2">A COMMUNITY THAT IS RELEVANT</h1>
        </div>
        <HeroCrumbCompile />
        <LoveCrumbs />
        <Benefits />
        <Join />
        <Serve />
        <LearnHero />
      </div>
        <Footer />
    </div>
  );
};

export default Home;
