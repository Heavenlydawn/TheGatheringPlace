import React from "react";
import Learn from "./Learn";
import Image from "next/image";
import GPImage from "../../../public/images/gp.png"
const LearnHero = () => {
  return (
    <>
      <div className="text-center gp-text-h1 font-sans mb-12">
        <h1>LEARN, INNOVATE, GROW!</h1>
      </div>
      <div className="flex items-center justify-center gap-12">
        <div>
          <Learn
            subTitle="RELATIONSHIP"
            title="BUILDING AN ETERNAL MARRIAGE"
            text="Through obedience to the gospel of Jesus Christ, we can be together forever with our families.- Ezra Taft Benson"
            instructor="Sis Ejiro Agiriga"
            dayOfTheWeek="Fridays, 4pm"
          />
          <hr className="bg-[#FFD0A0] h-4 w-[300px]" />
        </div>
        <div>
          <Learn
            subTitle="GET A SKILL"
            title="SKILL ACQUISITION & EMPOWERMENT"
            text="Unlock your potential and future-proof your journey with essential skills for success in today's dynamic world."
            instructor="Stake YSA"
            dayOfTheWeek="Monday - Saturday"
          />
          <hr className="bg-[#FFD0A0] h-4 w-[300px]" />
        </div>
        <div>
          <Learn
            subTitle="THE BOOK OF MORMON"
            title="ANOTHER TESTAMENT OF JESUS CHRIST"
            text="The Book of Mormon and the Bible testify of Jesus Christ and teach of God’s plan for our happiness."
            instructor="President Ifeanyi H Agiriga"
            dayOfTheWeek="Wednesdays 4pm"
          />
          <hr className="bg-[#FFD0A0] h-4 w-[300px]" />
        </div>
        <div>
          <Learn
            subTitle="FAMILY HISTORY"
            title="CREATE A BEAUTIFUL FAMILY TREE"
            text="Find your family. Discover yourself. Bring to life your family’s history by exploring the lives of those that came before you."
            instructor="Sis Blessing Obilor"
            dayOfTheWeek="Wednesdays 6pm"
          />
          <hr className="bg-[#FFD0A0] h-4 w-[300px]" />
        </div>
      </div>

      <div className="my-8">
        <Image src={GPImage} alt="The Gathering Place" />
      </div>
    </>
  );
};

export default LearnHero;