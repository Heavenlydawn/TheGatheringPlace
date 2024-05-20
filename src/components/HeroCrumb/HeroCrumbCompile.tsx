import React from 'react'
import HeroCrumb from './HeroCrumb'
import AboutUsIcon from "../../../public/images/aboutUsIcon.svg";
import GetSkillsIcon from "../../../public/images/getSkillsIcon.svg";
import LearningIcon from "../../../public/images/learningIcon.svg";
const HeroCrumbCompile = () => {
  return (
    <div>
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
    </div>
  )
}

export default HeroCrumbCompile