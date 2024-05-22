import React from "react";
import TalksComp from "./TalksComp";
import {talks} from "./TalksData";

const TalksHero = () => {
  return (
    <div className="my-12">
      <h1 className="gp-text-h1 text-center my-8">DEVOTIONALS</h1>
      {talks.map((talks, index) => (
        <TalksComp
          key={index}
          src={talks.src}
          date={talks.date}
          brethren={talks.brethren}
          title={talks.title}
          description={talks.description}
        />
      ))}
    </div>
  );
};

export default TalksHero;