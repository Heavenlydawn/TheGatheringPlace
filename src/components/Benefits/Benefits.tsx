import React from "react";
import Image from "next/image";
import Institute from "../../../public/images/institute.svg";
import SkillAcquisition from "../../../public/images/skillAcquisition.svg";
import BYUPathway from "../../../public/images/pathway.svg";
import EternalMarriage from "../../../public/images/eternalMarriage.svg";

const Benefits = () => {
  return (
    <div className="gp-light-grey">
      <h2 className="text-center font-sans gp-text-h1 py-12">
        BENEFITS OF BEING PART OF <br /> THE GATHERING PLACE
      </h2>
      <div className="flex items-center justify-around">
      <div className="flex items-center justify-around">
        <div className="relative group">
          <Image src={Institute} alt="Institute" width={302} height={384} />
          <div className=" flex items-start justify-center flex-col absolute top-0 h-0 left-0 bg-black opacity-0 group-hover:h-full group-hover:opacity-60 duration-500 transition ease-in-out text-white">
            <h3 className="gp-text-h3 font-sans text-start px-8">INSTITUTE</h3>
            <p className="font-bold text-xl w-[280px] px-8">
              Come be a part of a spiritual enlightening experience as we embark
              on a soulful, faith strengthening, and fun journey to learn and
              fulfill our eternal goals.
            </p>
          </div>
        </div>
        </div>
      <div className="flex items-center justify-around">
        <div className="relative group">
          <Image src={SkillAcquisition} alt="SkillAcquisition" width={302} height={384} />
          <div className=" flex items-start justify-center flex-col absolute top-0 h-0 left-0 bg-black opacity-0 group-hover:h-full group-hover:opacity-60 duration-500 transition ease-in-out text-white">
            <h3 className="gp-text-h3 font-sans text-start px-8">SKILL ACQUISITION</h3>
            <p className="font-bold text-xl w-[280px] px-8">
              Come be a part of a spiritual enlightening experience as we embark
              on a soulful, faith strengthening, and fun journey to learn and
              fulfill our eternal goals.
            </p>
          </div>
        </div>
        </div>
      <div className="flex items-center justify-around">
        <div className="relative group">
          <Image src={BYUPathway} alt="BYUPathway" width={302} height={384} />
          <div className=" flex items-start justify-center flex-col absolute top-0 h-0 left-0 bg-black opacity-0 group-hover:h-full group-hover:opacity-60 duration-500 transition ease-in-out text-white">
            <h3 className="gp-text-h3 font-sans text-start px-8">BYU PATHWAY</h3>
            <p className="font-bold text-xl w-[280px] px-8">
              Come be a part of a spiritual enlightening experience as we embark
              on a soulful, faith strengthening, and fun journey to learn and
              fulfill our eternal goals.
            </p>
          </div>
        </div>
        </div>
      <div className="flex items-center justify-around">
        <div className="relative group">
          <Image src={EternalMarriage} alt="EternalMarriage" width={302} height={384} />
          <div className=" flex items-start justify-center flex-col absolute top-0 h-0 left-0 bg-black opacity-0 group-hover:h-full group-hover:opacity-60 duration-500 transition ease-in-out text-white">
            <h3 className="gp-text-h3 font-sans text-start px-8">ETERNAL MARRIAGE</h3>
            <p className="font-bold text-xl w-[280px] px-8">
              Come be a part of a spiritual enlightening experience as we embark
              on a soulful, faith strengthening, and fun journey to learn and
              fulfill our eternal goals.
            </p>
          </div>
        </div>
        </div>
      </div>

      </div> 
  );
};

export default Benefits;
