import React from "react";
import Image from "next/image";

interface TeamCrumbs {
  index: number;
  name: string;
  role: string;
  image: any;
  socialIcon1: any;
  socialIcon2: any;
  socialIcon3: any;
}
const TeamCrumbs: React.FC<TeamCrumbs> = ({
  name,
  role,
  image,
  socialIcon1,
  socialIcon2,
  socialIcon3,
}) => {
  return (
    <div>
      <div className="py-12 px-20 gp-light-grey  my-12">
        <div> 
          <Image
            src={image}
            width={150}
            height={150}
            alt={name}
            className="rounded-full border-4 border-gray-200"
          />
        </div>
        <div>
          <h3 className="gp-text-h4 my-4">{name}</h3>
          <p className="text-base leading-7 gp-text-h5">{role}</p>
        </div>
        <div className="flex items-center gap-8 mt-6">
          <Image src={socialIcon1} alt={socialIcon1} width={30} height={30} />
          <Image src={socialIcon2} alt={socialIcon2} width={30} height={30} />
          <Image src={socialIcon3} alt={socialIcon3} width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default TeamCrumbs;
