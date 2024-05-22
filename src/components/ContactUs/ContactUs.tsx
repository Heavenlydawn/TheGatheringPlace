import React from "react";
import Header from "../Header/Header";
import ContactHero from "./ContactHero";
import ContactHeroForm from "./ContactHeroForm";
import Footer from "../Footer/Footer";
const ContactUs = () => {
  return (
    <div>
      <Header />
      <ContactHero />
      <div className="max-w-max m-auto">
      <ContactHeroForm />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
