import React from "react";
import Image from "next/image";

interface HeroCrumbProps {
  icon: any;
  title: string;
  text: string;
}

const HeroCrumb: React.FC<HeroCrumbProps> = ({ icon, title, text }) => {
  return (
    <>
      <div className="bg-[#FFF5EB] p-12 w-[411px] ">
        <Image src={icon} alt={title + " Icon"} />
        <h1 className="gp-text-h3">{title}</h1>
        <p>{text}</p>
      </div>
    </>
  );
};

export default HeroCrumb;
