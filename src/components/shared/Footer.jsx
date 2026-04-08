import React from "react";
import logoImg from "../../assets/images/logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="py-9 bg-[#001931]">
      <div className=" container mx-auto px-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="Footer" className="w-8" />
            <h2 className="font-bold text-white text-[16px] uppercase">
              HERO.IO
            </h2>
          </div>
          <div className="flex  flex-col gap-2">
            <h2 className="text-xl text-white">Social Links</h2>
            <ul className="flex gap-3">
              <li className="h-8 w-8 p-2 bg-white rounded-full">
                <FaXTwitter />
              </li>
              <li className="h-8 w-8 p-2 bg-white rounded-full">
                <FaLinkedinIn />
              </li>
              <li className="h-8 w-8 p-2 bg-white rounded-full">
                <FaFacebookF />
              </li>
            </ul>
          </div>
        </div>
        <div className="divider bg-gray-600 h-0.5"></div>
        <p className="text-white text-center pt-4">
          Copyright &copy; 2025 - All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
