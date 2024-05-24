import React from "react";
import Image from "next/image";

interface BenefitProps {
  index: number;
  title: string;
  text: string;
  image: any;
}
const BenefitCrumbs: React.FC<BenefitProps> = ({
  index,
  title,
  text,
  image,
}) => {
  const flexDirection = index % 2 === 0 ? "flex-row" : "flex-row-reverse";
  return (
    <div
      className={`grid md:grid-cols-1 xl:grid-cols-2 md:flex items-center justify-center gap-12 md:gap-36 mb-8 ${flexDirection}`}
    >
      <div className="p-4 md:w-[400px]">
        <h2 className="gp-text-h4 mb-8">{title}</h2>
        <p className="font-bold text-base leading-7">{text}</p>
      </div>
      <div>
        <Image src={image} alt={title} />
      </div>
    </div>
  );
};

export default BenefitCrumbs;
