import React from "react";
import BenefitCrumbs from "./BenefitCrumbs";
import Benefit1 from "../../../public/images/Benefit1.svg";
import Benefit2 from "../../../public/images/Benefit2.svg";
import Benefit3 from "../../../public/images/Benefit3.svg";
import Benefit4 from "../../../public/images/Benefit4.svg";
const AboutBenefit = () => {
  const benefits = [
    {
      index: 1,
      title: "SPIRITUAL GROWTH AND GUIDANCE",
      text: "Happiness and peace and eternal progression await all who are willing to follow the teachings of the Savior. Gordon B. Hinckley",
      image: Benefit1,
    },
    {
      index: 2,
      title: "COMMUNITY AND SUPPORT",
      text: "When you go into the Church, you enter as an individual, but you come out as a member of a family, a community, a brotherhood, and sisterhood. Thomas S. Monson",
      image: Benefit2,
    },
    {
      index: 3,
      title: "ETERNAL FAMILIES",
      text: "Through obedience to the gospel of Jesus Christ, we can be together forever with our families. Ezra Taft Benson",
      image: Benefit3,
    },
    {
      index: 4,
      title: "PURPOSE AND DIRECTION IN  LIFE",
      text: "When you choose to follow Christ, you choose to be changed. Elaine S. Dalton",
      image: Benefit4,
    },
  ];
  return (
    <div>
      <div className="text-center gp-text-h1 my-12">
        <h1>
          THE BENEFITS OF
          <br />
          JOINING OUR CHURCH
        </h1>
      </div>

      <div className="mb-8">
        {benefits.map((benefit, index) => (
          <BenefitCrumbs
            key={index}
            index={index}
            title={benefit.title}
            text={benefit.text}
            image={benefit.image}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutBenefit;
