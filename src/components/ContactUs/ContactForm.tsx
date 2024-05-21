import React from "react";
import InputComponent from "./InputComp";
import Button from "../Button/Button";
const ContactForm = () => {
  const input = [
    {
      key: 1,
      placeholder: "First Name",
    },
    {
      key: 2,
      placeholder: "Last Name",
    },
    {
      key: 3,
      placeholder: "Email Address",
    },
  ];
  return (
    <div>
      <form action="">
        <h2 className="gp-text-h4 mb-8">CONTACT FORM:</h2>
        {input.map((input, key) => (
          <InputComponent key={key} placeholder={input.placeholder} />
        ))}
        <label htmlFor="message">
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            className="w-[600px] outline-none border-none bg-gray-100 mb-6 px-4 py-8 rounded"
          >
            Message
          </textarea>
        </label>
      </form>
        <Button text="SEND MESSAGE" color="primary" />
    </div>
  );
};

export default ContactForm;
