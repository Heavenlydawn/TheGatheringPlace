import React from "react";
import Link from "next/link";
import Button from "../Button/Button";
const Header = () => {
  return (
    <header className="flex gp-dark text-white items-center justify-around py-4">
      <h1 className="gp-text-h3 font-sans ">Kubwa Gathering Place.</h1>
      <div className="flex gap-8 gp-text-h6">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/bom">The Book Of Mormon</Link>
        <Link href="/talks">Devotionals</Link>
      </div>
      <Link href="/contact">
        <Button text="Contact Us" color="primary" />
      </Link>
    </header>
  );
};

export default Header;
