import React from "react";
import Image from "next/image";
import AboutUsIcon from "../../../public/images/aboutUsIcon.svg";
import GetSkillsIcon from "../../../public/images/getSkillsIcon.svg";
import LearningIcon from "../../../public/images/learningIcon.svg";

const HeroCrumb = () => {
  return (
    <>
   <div className="my-12 text-center">
   <h3 className="gp-text-h5">GATHERING PLACE</h3>
    <h1 className="gp-text-h2">A COMMUNITY THAT IS RELEVANT</h1>
   </div>
    <div className="bg-[#FFF5EB] p-12 w-[411px] ">
      <Image src={AboutUsIcon} alt="About Us Icon" />
      <h1 className="gp-text-h3">ABOUT US</h1>
      <p>
        A community of innovative young adults coming together to learn of and
        feel the Love of the Savior, Jesus Christ.
      </p>
    </div>
    </>
  );
};

export default HeroCrumb;
