import React from "react";

interface TalksProp {
  date: string;
  brethren: string;
  title: string;
  description: string;
  src: any;
}

const TalksComp: React.FC<TalksProp> = ({
  src,
  date,
  brethren,
  title,
  description,
}) => {
  return (
    <div className="flex items-center justify-center gap-24 bg-white mb-12 p-12 w-[1281px]">
      <div>
        <iframe
          width="560"
          height="315"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="px-12">
        <div className="flex justify-between items-center my-4">
          <h5 className="gp-text-h5">{brethren}</h5>
          <h5 className="gp-text-h5">{date}</h5>
        </div>
        <h1 className="gp-text-h1 leading-10">{title}</h1>
        <p className="font-bold leading-7">{description}</p>
      </div>
    </div>
  );
};

export default TalksComp;