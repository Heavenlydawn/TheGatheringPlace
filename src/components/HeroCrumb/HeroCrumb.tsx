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
      <div className="bg-[#FFF5EB]  w-[411px]">
        <div className="p-12">
        <Image src={icon} alt={title + " Icon"} />
        <h1 className="gp-text-h3 my-4">{title}</h1>
        <p className="font-bold text-base my-4">{text}</p>
        </div>
        <hr className="gp-brown h-4 w-full -mb-12" />
      </div>
    </>
  );
};

export default HeroCrumb;
