import React from "react";
import Header from "../Header/Header";
import BomHero from "./BomHero";
import Join from "../Join/Join";
import Learn from "../Learn/LearnHero";
import Footer from "../Footer/Footer";
const BOM = () => {
  return (
    <div>
      <Header />
      <BomHero />
      <div className="max-w-max m-auto">
        <Join />
        <div className="mt-44">
          <Learn />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BOM;
