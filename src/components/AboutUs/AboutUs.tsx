import React from "react";
import Image from "next/image";
import Header from "../Header/Header";
import LoveCrumbs from "../LoveCrumbs/LoveCrumbs";
import AboutBenefit from "./AboutBenefit";
import Team from "./Team/Team";
import Footer from "../Footer/Footer";
const AboutUs = () => {
  return (
    <div>
      <Header />
      <div id="aboutUs" className="flex items-center justify-start h-screen">
        <h1 className="gp-text-h1 pl-24 text-white">
          THE ABA NIGERIA
          <br /> <br /> TEMPLE
        </h1>
      </div>
      <div className="max-w-max m-auto">
        <LoveCrumbs />
        <AboutBenefit />
        <Team />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
