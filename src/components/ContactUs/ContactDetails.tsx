import React from "react";
import Link from "next/link";
import Image from "next/image";
import Twitter from "../../../public/images/twitter.png";
import LinkedIn from "../../../public/images/linkedin.png";
import Facebook from "../../../public/images/facebook.png";
const ContactDetails = () => {
  return (
    <section className="flex gap-8 flex-col">
      <div>
        <h6 className="gp-text-h6 mb-4">Address</h6>
        <h3 className="gp-text-h2">
          FIRST GLASS HOUSE, OPPOSITE FIRST GATE, <br />
          DUTSE ALHAJI, KUBWA, ABUJA, F.C.T
        </h3>
      </div>
      <div>
        <h6 className="gp-text-h6 mb-4">Contact Details</h6>
        <h5>+234 7088808842 - Heaven</h5>
        <h5>+234 8114734312 - James</h5>
        <Link href="mailto:rielheavenly@gmail.com">
          Heaven Gabriel@gamil.com
        </Link>
      </div>

      <div>
        <h6 className="gp-text-h6 mb-4">Find Us Here</h6>
        <div className="flex items-center gap-8">
          <Image src={Facebook} alt="Facebook" width={40} height={40} />
          <Image src={Twitter} alt="Twitter" width={40} height={40} />
          <Image src={LinkedIn} alt="LinkedIn" width={40} height={40} />
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
