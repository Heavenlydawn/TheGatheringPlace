import React from "react";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";
const ContactHeroForm = () => {
  return (
    <div className="flex items-center justify-center gap-12 px-28 py-32">
      <ContactForm />
      <ContactDetails />
    </div>
  );
};

export default ContactHeroForm;
