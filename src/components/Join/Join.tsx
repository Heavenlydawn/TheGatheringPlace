import React from "react";
import Image from "next/image";
import Link from "next/link";
import JoinImage from "../../../public/images/joinImg.svg";
import Time from "../../../public/images/time.svg";
import Location from "../../../public/images/location.svg";
import Button from "../Button/Button";
const Join = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <h1 className="gp-text-h1 font-sans py-12 text-center">
        JOIN US AND BECOME A PART <br /> OF SOMETHING GREAT
      </h1>
      <section className="flex justify-center items-center flex-col lg:flex-row">
        {/* Detail Section */}
        <div className="gp-cream py-8 xl:py-16 px-4 md:px-12 xl:px-24 relative">
          <div className="flex justify-between items-center mb-8">
            <h4 className="gp-text-h5 text-[#FFD2A4]">INSTITUTE CLASSES</h4>
            <h3 className="gp-text-h3 font-sans">{currentYear}</h3>
          </div>
          <h3 className="gp-text-h3 mb-8">ATTEND OUR CLASSES</h3>
          <p className="font-bold text-base leading-7">
            We are a group of young adults who are committed to applying Jesus
            Christ's <br />teachings to get a deeper knowledge of the world in which
            we live.
          </p>
          <div className="font-bold flex flex-col gap-[23px] mt-8">
            {/* Location */}
            <div className="flex items-center gap-8">
              <Image src={Location} alt="Location" />
              <div>
                <p>The Gathering Place, Dutse, Abuja, F.C.T</p>
              </div>
            </div>
            {/* Time */}
            <div className="flex items-center gap-8">
              <Image src={Time} alt="Time" />
              <div>
                <p>Mondays 16:00</p>
              </div>
            </div>
            {/* Time */}
            <div className="flex items-center gap-8">
              <Image src={Time} alt="Time" />
              <div>
                <p>Tuesdays 16:00</p>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-center gap-8">
              <Image src={Time} alt="Time" />
              <div>
                <p>Wednesdays 16:00</p>
              </div>
            </div>
            {/* Time */}
            <div className="flex items-center gap-8">
              <Image src={Time} alt="Time" />
              <div>
                <p>Thursdays 16:00</p>
              </div>
            </div>
            {/* Time */}
            <div className="flex items-center gap-8">
              <Image src={Time} alt="Time" />
              <div>
                <p>Fridays 16:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="">
          <Image src={JoinImage} alt="Join Image"/>
        </div>
      </section>
      <div className="my-12 absolute left-4 xl:left-[100px] 2xl:left-[300px]">
        <Link href="https://myinstitute.churchofjesuschrist.org/">
          <Button text="REGISTER" color="secondary" />
        </Link>
      </div>
    </div>
  );
};

export default Join;
