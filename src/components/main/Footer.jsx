import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

import { FooterData } from "./Data/FooterData";
import MobileFooterMenu from "./MobileFooterMenu";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(true);

  const date = new Date();
  const yil = date.getFullYear();
  return (
    <div className="font-Montserrat flex flex-col gap-4">
      {/* Mobile Social Bar */}
      <div className="flex flex-col items-center md:hidden mt-8 gap-2 text-textColor">
        <h1 className="font-semibold underline underline-offset-2">Social</h1>
        <div className="flex gap-4">
          <a target="_blank" href="https://instagram.com/randevumapp">
            <FaInstagram size={26} />
          </a>
          <a target="_blank" href="https://twitter.com/randevumapp">
            <FaTwitter size={26} />
          </a>
          <a target="_blank" href="https://linkedin.com/company/randevum">
            <FaLinkedin size={26} />
          </a>
        </div>
      </div>
      {/* Footer */}
      <footer className="flex w-full md:h-96 px-4 md:px-24 py-4 flex-col justify-between items-center md:mt-10 md:pt-16  bg-boxColor font-Montserrat">
        {/* Desktop */}
        <div className="md:grid grid-cols-12 w-full hidden">
          <div className="col-span-3 flex flex-col items-center justify-center gap-2">
            <img
              className="w-48"
              src="https://firebasestorage.googleapis.com/v0/b/randevum-5d873.appspot.com/o/logo-hakan.png?alt=media&token=5a4a56b9-9243-4fb2-8d49-d04ce69f94e4"
              alt="footerLogo"
            />
            <h1 className="text-textColor w-48 text-left font-semibold text-sm">
              Tek Uygulama <br /> Milyonlarca Randevu
            </h1>
          </div>
          {FooterData.map((data, index) => {
            return (
              <div
                key={index}
                className="col-span-2 pl-28 flex flex-col items-center justify-start mt-10 gap-2"
              >
                <h1 className="text-textColor font-bold underline underline-offset-2">
                  {data.title}
                </h1>
                <div className="flex flex-col items-center gap-y-2">
                  {data.items.map((item) => (
                    <Link
                      to={item.to}
                      className="text-textColor font-semibold text-sm"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
          <div className="col-span-3 flex flex-col items-center pr-24 justify-center gap-2">
            <h1 className="text-textColor font-bold underline underline-offset-2">
              Social
            </h1>
            <div className="flex flex-col gap-y-2">
              <a
                target="_blank"
                href="https://instagram.com/randevumapp"
                className="transition-all hover:scale-125 duration-200"
              >
                <FaInstagram size={28} color="#F0FFFF" />
              </a>
              <a
                target="_blank"
                href="https://twitter.com/randevumapp"
                className="transition-all hover:scale-125 duration-200"
              >
                <FaTwitter size={28} color="#F0FFFF" />
              </a>

              <a
                target="_blank"
                href="https://linkedin.com/company/randevum"
                className="transition-all hover:scale-125 duration-200"
              >
                <FaLinkedin size={28} color="#F0FFFF" />
              </a>
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className="md:hidden grid w-full h-full py-6 gap-10">
          {FooterData.map((menu, index) => (
            <MobileFooterMenu key={index} {...menu} />
          ))}
        </div>
        <h1 className="text-textColor font-medium text-xs opacity-30">
          Randevum © {yil} || All Rights Reserved
        </h1>
      </footer>
    </div>
  );
};

export default Footer;
