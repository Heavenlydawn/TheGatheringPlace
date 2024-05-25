import React from "react";
interface LearnProps {
  subTitle: string;
  title: string;
  text: string;
  instructor: string;
  dayOfTheWeek: string;
}
const Learn: React.FC<LearnProps> = ({
  subTitle,
  title,
  text,
  instructor,
  dayOfTheWeek,
}) => {
  // Making the year dynamic
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="gp-cream  px-12 py-12 hover:opacity-100">
        <div className="font-sans">
          <h2
            className="gp-text-h6 my-6 bg-clip-text text-transparent font-bold"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #A54E2B 0%, #DC9853 100%)",
            }}
          >
            {subTitle}
          </h2>
          <h1 className="gp-text-h5 my-6">{title}</h1>
          <p className="text-slate-500 text-base leading-7">{text}</p>

          <div className="mt-8 font-bold">
            <p>{instructor}</p>
            <p>
              {dayOfTheWeek}, {currentYear}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Learn;
