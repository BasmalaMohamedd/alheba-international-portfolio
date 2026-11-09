
import React from "react";
import Image from "next/image";
import ContactForm from "@/app/sections/ContactForm";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-brand-navy-secondary text-white">

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Company Information */}
          <div className="flex flex-col gap-6">

            <div className="flex items-center gap-3">
              <Image
                src="/logo-en.png"
                alt="AlHeba Logo"
                width={65}
                height={65}
                className="bg-brand-gray-primary rounded-sm"
              />
              <h2 className="text-2xl font-bold">
                AlHeba International
              </h2>
            </div>

            <p className="max-w-md text-gray-300 leading-8">
              Connecting markets through quality steel and medical
              equipment. Delivering trusted products and reliable
              solutions across Egypt and the Middle East.
            </p>
            <div>
              <div className="flex items-center gap-2 text-gray-300">
                <MdLocationOn size={20} />
                <span className="ml-1">
                  18 El Rashidy St., Kasr El Ainy, Cairo, Egypt
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 mt-2">
                <MdEmail size={20} />
                <a href="mailto:Alhebagroup36@gmail.com" className="text-gray-300 hover:text-white transition-colors ml-1">
                  Alhebagroup36@gmail.com
                </a>    
              </div>
              <div className="flex items-center gap-2 text-gray-300 mt-2">
                <BsFillTelephoneFill size={20} />
                <a href="tel:+20223626622" className="text-gray-300 hover:text-white transition-colors ml-1">
                  +20 223 626 622
                </a>
                <span> / </span>
                <a href="tel:+20223688442" className="text-gray-300 hover:text-white transition-colors">
                  +20 223 688 442
                </a>
              </div>

            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-4">
                Our Sectors
              </h3>

              <ul className="flex flex-col gap-3 text-gray-300">
                <li>
                  <a href="/steel" className="hover:text-white transition-colors">
                    Steel Sector
                  </a>
                </li>
                <li>
                  <a href="/medical-equipment" className="hover:text-white transition-colors">
                    Medical Equipment Sector
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6
          flex flex-col sm:flex-row justify-between items-center gap-3">

          <p className="text-sm text-gray-400">
            © 2026 AlHeba International. All rights reserved.
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
