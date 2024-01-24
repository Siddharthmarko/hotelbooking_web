import Link from "next/link";
import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto px-4 ">
        <Link href="/" className="font-black text-tertiary-dark">
          Hotels
        </Link>
        <h4 className="font-semibold text-[40px] py-6">Contect</h4>
        <div className="flex flex-wrap gap-16 items-center justify-between">
          <div className="flex-1">
            <p>Narmada Road</p>
            <div className="flex items-center py-4">
              <BsFillSendFill />
              <p className="ml-2">Code_mridul</p>
            </div>
            <div className="flex items-center ">
              <BsTelephoneOutbound />
              <p className="ml-2">4646-333-333</p>
            </div>
            <div className="flex items-center pt-4">
              <BiMessageDetail />
              <p className="ml-2">Code_mridul</p>
            </div>
          </div>
          <div className="flex-1 md:text-right">
            <p className="pb-4">Our Story</p>
            <p className="pb-4">Get in Touch</p>
            <p className="pb-4">OUr privacy Commitement</p>
            <p className="pb-4">Terms and Service</p>
            <p>Coustomer Assistant</p>
          </div>
          <div className="flex-1 md:text-right">
            <p className="pb-4">Dining Experince</p>
            <p className="pb-4">Wellness</p>
            <p className="pb-4">Fitness</p>
            <p className="pb-4">Sports</p>
            <p>Event</p>
          </div>
        </div>
      </div>

      <div className="bg-tertiary-light h-10 md:h-[70px] w-full bottom-0 left-0"></div>
    </footer>
  );
};

export default Footer;
