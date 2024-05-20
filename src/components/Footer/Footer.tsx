"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RightArrow from "../../../public/images/rightarrow.svg";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message);
        setEmail("");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="gp-dark text-white flex justify-between pt-8 pb-36 px-10 gap-8">
      <div>
        <h1 className="gp-text-h3 ">Gathering Place.</h1>
        <p>
          We empower, encourage, fortify, uplift, and emancipate Young Single
          Adults (YSA's) <br /> to enhance their readiness for the future across
          all facets of life.
        </p>
        <p>&copy; Stake YSA</p>
      </div>

      <div>
        <h1 className="gp-text-h3">Institute</h1>
        <div className="leading-7">
          <p>Dating Courtship and Marriage</p>
          <p> The Book Of Mormon</p>
          <p>Family History</p>
          <p>The Gospel and Productive Life</p>
          <p>Foundation of the Restoration</p>
          <p>Teachings and Doctrines of the Book Of Mormon</p>
          <p>Building an Eternal Marriage</p>
        </div>
      </div>

      <div>
        <h1 className="gp-text-h3">Skill Acquisition</h1>
        <div className="leading-7">
          <p>Computer Training</p>
          <p>Videography and Photography</p>
          <p>Dance Class</p>
          <p>Culinary Arts</p>
          <p>Hair and Wig Making</p>
          <p>Tailoring</p>
          <p>Barbing</p>
          <p>Building Design</p>
          <p>Electrical Engineering</p>
        </div>
      </div>

      <div className="leading-7">
        <h1 className="gp-text-h3">Contact Us</h1>
        <Link href="mailto:gabrielheavenlydawn@gmail.com">
          GabrielHeavenlydawn
        </Link>
        <p>Phone Number: +234 7088808842 - Heaven</p>
        <p>Phone Number: +234 8114734312 - James</p>
        <p>
          First Glass house Beside Disney Chicken, First Gate Dutse Alhaji,
          Abuja, F.C.T
        </p>
      </div>

      <div>
        <h1 className="gp-text-h3">Stay Up To Date</h1>
        <p>Subscribe to our newsletter</p>
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            autoComplete="on"
            className="w-[278px] h-[31px] px-4 py-2 rounded outline-none border-none bg-gray-500 text-white"
          />
          <button type="submit">
            <Image
              src={RightArrow}
              alt="RightArrow"
              className="absolute right-1 top-3"
            />
          </button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Footer;
