import React from "react";
import Button from "../Button/Button";
import Image from "next/image";
import LCImage1 from "../../../public/images/LC-img1.svg";
import LCImage2 from "../../../public/images/LC-img2.svg";
import LCImage3 from "../../../public/images/LC-img3.svg";
import Link from "next/link";

const LoveCrumbs = () => {
  return (
    <>
      <div className="text-left md:text-center mt-24 px-4">
        <h3 className="gp-text-h6 my-4">GATHERING PLACE</h3>
        <h1 className="gp-text-h2">LOVE SHARE AND INVITE</h1>
        <p className="font-bold mb-8">
          Love knows no clock, no end in sight. With hearts brimming, we share
          and
          <br />
          invite, in patience, in trust, in the Lord&apos;s guiding light. Let&apos;s
          spread joy, include all in our good fight. No fear, no pressure, just
          love in flight!
        </p>
      </div>

      <div className="flex items-center justify-center flex-col md:flex-row gap-8">
        <Image src={LCImage1} alt="Love share and invite image" />
        <div className="mt-2 md:mt-44 text-center">
          <Link href="https://newsroom.churchofjesuschrist.org/article/latter-day-saints-encouraged-love-share-invite" className="hidden md:block">
            <Button text="READ MORE" color="primary"/>
          </Link>
          <Image
            src={LCImage2}
            alt="Love share and invite image"
            className="pt-12"
          />
        </div>
        <Image src={LCImage3} alt="Love share and invite image" />
      </div>
      <div className="text-left md:text-center my-14 px-4">
        <div className="flex items-center justify-center flex-col md:flex-row gap-8">
          <div>
            <h3 className="gp-text-h3">OUR MISSION</h3>
            <p className="text-base font-bold">
              Empowering young single adults and their friends to thrive
              <br />
              spiritually and socially through diverse religious education,
              service
              <br />
              opportunities, and community outreach initiatives within a
              welcoming gathering place.
            </p>
          </div>
          <div>
            <h3 className="gp-text-h3">OUR VISION</h3>
            <p className="text-base font-bold">
              To cultivate a vibrant and inclusive community where young single
              <br />
              adults discover, grow, and serve together, guided by gospel
              <br />
              principles, fostering lifelong connections and meaningful
              contributions to the Church and society.
            </p>
          </div>
        </div>
        <div className="mt-12 text-xl font-bold">
          <Link href="https://africawest.churchofjesuschrist.org/ysas-gathering-place-initiative-begins-in-africa-west-area.?lang=eng-afwx">
            Read More &rarr;
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoveCrumbs;
