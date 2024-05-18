import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import HeroCrumb from "../HeroCrumb/HeroCrumb";
import AboutUsIcon from "../../../public/images/aboutUsIcon.svg";
import GetSkillsIcon from "../../../public/images/getSkillsIcon.svg";
import LearningIcon from "../../../public/images/learningIcon.svg";
import LoveCrumbs from "../LoveCrumbs/LoveCrumbs";
import Benefits from "../Benefits/Benefits";
import Join from "../Join/Join";
import Serve from "../Serve/Serve";
const Home = () => {
  return (
    <div id="home">
      <Header />
      <Hero />
      <div className="max-w-max m-auto">
        <div className="my-12 text-center">
          <h3 className="gp-text-h5">GATHERING PLACE</h3>
          <h1 className="gp-text-h2">A COMMUNITY THAT IS RELEVANT</h1>
        </div>

        <div className="flex items-center justify-around">
          <HeroCrumb
            icon={AboutUsIcon}
            title="ABOUT US"
            text="A community of innovative young adults coming together to learn of and
          feel the Love of the Savior, Jesus Christ."
          />
          <HeroCrumb
            icon={GetSkillsIcon}
            title="GET SKILLS"
            text="Unlock your potential and future-proof your journey with essential skills for success in today's dynamic world."
          />
          <HeroCrumb
            icon={LearningIcon}
            title="LEARNING"
            text="Embark on a journey of spiritual exploration, guiding you to deepen your understanding, and cultivate a meaningful connection to your faith."
          />
        </div>
        <LoveCrumbs />
        <Benefits />
        <Join />
        <Serve />
      </div>
    </div>
  );
};

export default Home;
