import React from "react";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";
const ContactHeroForm = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 items-center justify-center gap-24 px-12 md:px-28 py-24 md:py-32">
      <ContactForm />
      <ContactDetails />
    </div>
  );
};

export default ContactHeroForm;
