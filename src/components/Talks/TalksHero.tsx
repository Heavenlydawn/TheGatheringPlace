// import React from "react";
// import TalksComp from "./TalksComp";
// import {talks} from "./TalksData";

// const TalksHero = () => {
//   return (
//     <div className="my-12">
//       <h1 className="gp-text-h1 text-center my-8">DEVOTIONALS</h1>
//       {talks.map((talks, index) => (
//         <TalksComp
//           key={index}
//           src={talks.src}
//           date={talks.date}
//           brethren={talks.brethren}
//           title={talks.title}
//           description={talks.description}
//         />
//       ))}
//     </div>
//   );
// };

// export default TalksHero;

"use client";
import React, { useState } from "react";
import TalksComp from "./TalksComp";
import { talks } from "./TalksData";
import Button from "../Button/Button";

const TalksHero = () => {
  const [showAll, setShowAll] = useState(false);

  const handleViewMore = () => {
    setShowAll(true);
  };

  return (
    <div className="my-12">
      <h1 className="gp-text-h1 text-center my-8">DEVOTIONALS</h1>
      {showAll
        ? talks.map((talk, index) => (
            <TalksComp
              key={index}
              src={talk.src}
              date={talk.date}
              brethren={talk.brethren}
              title={talk.title}
              description={talk.description}
            />
          ))
        : talks
            .slice(0, 4)
            .map((talk, index) => (
              <TalksComp
                key={index}
                src={talk.src}
                date={talk.date}
                brethren={talk.brethren}
                title={talk.title}
                description={talk.description}
              />
            ))}
      {!showAll && talks.length > 4 && (
        <div className="text-center mt-8 ">
          <Button text="View More" color="secondary" onClick={handleViewMore} />
        </div>
      )}
    </div>
  );
};

export default TalksHero;
