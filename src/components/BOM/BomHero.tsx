import React from "react";
import Link from "next/link";
import Button from "../Button/Button";
const BomHero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/images/videos/BOM.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative xl:z-10 flex items-center h-full w-full bg-black bg-opacity-50 text-white ">
        <div className="flex flex-col items-start pl-10">
          <h3 className="gp-text-h4 leading-12">THE BOOK OF MORMON</h3>
          <h1 className="gp-text-h2">ANOTHER TESTAMENT OF JESUS CHRIST</h1>
          <Link href="https://wa.link/d3g8ow" className="mt-12">
            <Button text="Get a Free BOM" color="primary" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BomHero;