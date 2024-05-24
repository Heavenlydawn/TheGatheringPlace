"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "../Button/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    console.log("I was clicked");
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="flex gp-dark text-white items-center justify-around py-4 relative">
      <h1 className="gp-text-h3 font-sans ">Kubwa Gathering Place.</h1>

      <div className="hidden md:flex gap-8 text-base md:gp-text-h6">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/bom">The Book Of Mormon</Link>
        <Link href="/talks">Devotionals</Link>
      </div>
      <div className="hidden md:block">
        <Link href="/contact">
          <Button text="Contact Us" color="primary" />
        </Link>
      </div>

      <button
        className="md:hidden flex items-center px-3 py-2 text-white border-white"
        onClick={toggleMenu}
      >
        <svg
          className="fill-current h-12 w-12"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full gp-dark text-white font-sans transform py-64 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button className="absolute top-4 right-4" onClick={toggleMenu}>
          <svg
            className="fill-current h-6 w-6"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Close</title>
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav className="flex flex-col items-start p-6 gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/bom">The Book Of Mormon</Link>
          <Link href="/talks">Devotionals</Link>
          <Link href="/contact">
            <Button text="Contact Us" color="primary" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
