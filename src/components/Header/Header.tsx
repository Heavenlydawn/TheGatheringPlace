import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <header className="flex gp-dark text-white items-center justify-around py-4">
      <h1 className="gp-text-h3 font-sans ">
        Gathering Place.
      </h1>
      <div className="flex gap-8 gp-text-h6">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/mormon">The Book Of Mormon</Link>
        <Link href="/article">Articles</Link>
      </div>
      <button className="gp-text-h6">Contact Us</button>
    </header>
  );
};

export default Header;
