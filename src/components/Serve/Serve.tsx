import React from "react";
import Button from "../Button/Button";
import Image from "next/image";
import Link from "next/link";
import QuoteIcon from "../../../public/images/QuoteIcon.svg";
const Serve = () => {
  return (
    <section id="serve" className="my-36 md:px-96 md:pt-24 md:pb-56">
     <div>
     <div className="flex items-center justify-center ">
     <div className="py-12 gp-light-grey flex justify-center items-center gap-12 px-8">
      <div>
        <h2 className="gp-text-h3 font-sans">
          WE WANT TO <br />
          SERVE THE WORLD <br />
          AROUND US
        </h2>
        <p className="font-bold my-6">
        "As we lose ourselves in the service of others, we discover our own lives and our own happiness." <br />- Dieter F. Uchtdorf
        </p>
        <Link href="churchofjesuschrist.org">

        <Button text="VISIT" color="primary" />
        </Link>
      </div>

      <div>
        <Image src={QuoteIcon} alt="QuoteIcon" />
      </div>
      </div>
     </div>
     </div>
      <hr className="h-4 gp-brown" />
    </section>
  );
};

export default Serve;
