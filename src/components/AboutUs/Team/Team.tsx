import React from "react";
import TeamCrumbs from "./TeamCrumbs";
import Ada from "../../../../public/images/Ada.png";
import Twitter from "../../../../public/images/twitter.png";
import LinkedIn from "../../../../public/images/linkedin.png";
import Facebook from "../../../../public/images/facebook.png";
const Team = () => {
  const teams = [
    {
      key: 1,
      name: "President Ifeanyi H. Agiriga",
      role: "Regional Director",
      image: Ada,
      socialIcon1: Facebook,
      socialIcon2: Twitter,
      socialIcon3: LinkedIn,
    },
    {
      key: 2,
      name: "Bro. Michael I. Okonkwo",
      role: "Seminary Coordinator",
      image: Ada,
      socialIcon1: Facebook,
      socialIcon2: Twitter,
      socialIcon3: LinkedIn,
    },
    {
      key: 3,
      name: "Sis Ezinne Hannah Adu",
      role: "Institute Coordinator",
      image: Ada,
      socialIcon1: Facebook,
      socialIcon2: Twitter,
      socialIcon3: LinkedIn,
    },
    {
      key: 4,
      name: `Sis Halima Priscilla Kane`,
      role: "Admin Assistant",
      image: Ada,
      socialIcon1: Facebook,
      socialIcon2: Twitter,
      socialIcon3: LinkedIn,
    },
  ];
  return (
    <div>
      <div className="text-center gp-text-h1 my-12 px-4 md:px-0">
        <h1>MEET OUR INSPIRATIONAL TEAM</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-center gap-10">
        {teams.map((teams, key) => (
          <TeamCrumbs
            index={key}
            image={teams.image}
            name={teams.name}
            role={teams.role}
            socialIcon1={teams.socialIcon1}
            socialIcon2={teams.socialIcon2}
            socialIcon3={teams.socialIcon3}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
