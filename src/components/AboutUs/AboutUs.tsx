import React from "react";
import Image from "next/image";
import Header from "../Header/Header";
import LoveCrumbs from "../LoveCrumbs/LoveCrumbs";
import AboutBenefit from "./AboutBenefit";
import Footer from "../Footer/Footer";
const AboutUs = () => {
  return (
    <div>
      <Header />
      <div id="aboutUs"></div>
      <div className="max-w-max m-auto">
        <LoveCrumbs />
        <AboutBenefit />
      </div>
        <Footer />
    </div>
  );
};

export default AboutUs;
