import React from "react";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";
const ContactHeroForm = () => {
  return (
    <div className="flex items-center justify-center flex-col md:flex-row gap-24 px-12 md:px-28 py-24 md:py-32">
      <ContactForm />
      <ContactDetails />
    </div>
  );
};

export default ContactHeroForm;
