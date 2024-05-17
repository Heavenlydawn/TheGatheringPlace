import React from "react";
import Button from "../Button/Button";
import Image from "next/image";
import QuoteIcon from "../../../public/images/QuoteIcon.svg";
const Serve = () => {
  return (
    <section id="serve" className="my-36 px-96 pt-24 pb-56">
     <div>
     <div className="flex items-center justify-center">
     <div className="w-[900px] py-12 gp-light-grey flex justify-center items-center gap-12">
      <div>
        <h2 className="gp-text-h3 font-sans">
          WE WANT TO <br />
          SERVE THE WORLD <br />
          AROUND US
        </h2>
        <p className="font-bold my-6">
          Lorem ipsum dolor sit, amet consectetur <br />adipisicing elit. Laudantium,
          atque.
        </p>
        <Button text="VISIT" color="primary" />
      </div>

      <div>
        <Image src={QuoteIcon} alt="QuoteIcon" />
      </div>
      </div>
     </div>
      <hr className="h-4 gp-brown w-full" />
     </div>
    </section>
  );
};

export default Serve;
