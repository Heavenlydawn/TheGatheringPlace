"use client";
import React from "react";
import { useState } from 'react';
import InputComponent from "./InputComp";
import Button from "../Button/Button";

const ContactForm = () => {
  const [status, setStatus] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const formId = process.env.NEXT_PUBLIC_THEGATHERINGPLACE;
        const url = `https://formspree.io/f/${formId}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: formData,
        });

        if (response.ok) {
            setStatus('Form submitted successfully!');
            form.reset();
        } else {
            setStatus('Form submission failed.');
        }
    };

  const inputs = [
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
      <form
        action="https://formspree.io/f/xkndadpl"
        method="POST"
        onSubmit={handleSubmit}
      >
        <h2 className="gp-text-h4 mb-8">CONTACT FORM:</h2>
        {inputs.map((input) => (
          <InputComponent key={input.key} placeholder={input.placeholder} />
        ))}
        <label htmlFor="message">
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            className="w-[280px] md:w-[600px] outline-none border-none bg-gray-100 mb-6 px-4 py-8 rounded gp-text-h5"
          >
            Message
          </textarea>

        </label>
        <br />
        <Button
          text="SEND MESSAGE"
          color="primary"
          type="submit"
        />
      </form>
       {status && <p>{status}</p>}
    </div>
  );
};

export default ContactForm;
