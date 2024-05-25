import React from "react";
import Gallery from "./Gallery";
import { skills } from "./GalleryData";
const GalleryHero = () => {
  return (
    <div>
      <div className="container mx-auto py-8">
        <h1 className="gp-text-h3 text-center mb-8">SKILL ACQUISITION</h1>
        <Gallery skills={skills} />
      </div>
    </div>
  );
};

export default GalleryHero;
