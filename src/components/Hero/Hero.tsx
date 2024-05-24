import React from "react";
import Image from "next/image";
import Link from "next/link";
import Line from "../../../public/images/Line.png";
import Button from "../Button/Button";
const Hero = () => {
  return (
    <div id="hero" className="text-white px-8 py-12 md:px-40 md:py-80">
      <h3 className="gp-text-h5 mb-4">
        WELCOME TO THE <br />
        GATHERING PLACE
      </h3>
      <h1 className="gp-text-h1">
        BECOME A PART OF <br />
        OUR COMMUNITY
      </h1>
      <Link href="/mormon">
        <Button text="Learn More" color="primary" />
      </Link>

      <div className="flex my-12 items-center gap-4">
        <Image src={Line} alt="Line" />
        <p className="gp-text-h6">
          A community that is valued and relevant to <br />
          development and growth at all Levels.
        </p>
      </div>
    </div>
  );
};

export default Hero;
