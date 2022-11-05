import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaGlobe,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:gap-0 items-center justify-between py-3 px-8 bg-[#38210eb0] border-t border-t-white">
      <p className="text-sm sm:text-base">
        Made By
        <a
          href="https://mohadmnportfolio.netlify.app/"
          className="text-orange-600 mx-1"
          target="_blank"
        >
          Moha Dmn 🦊
        </a>
        &
        <a
          href="https://linkedin.com/in/mohamed-touami-a7703b244/"
          className="text-orange-600 mx-1"
          target="_blank"
        >
          Zinou Med 🦊
        </a>
        © 2022
      </p>
      <div className="social flex gap-2 items-center">
        <a href="https://web3pros.dev/" target="_blank">
          <FaGlobe className="hover:text-orange-600 cursor-pointer text-xl sm:text-2xl" />
        </a>
        <a href="https://linkedin.com/in/mohadmn03/" target="_blank">
          <FaLinkedin className="hover:text-[#1DA1F2] cursor-pointer text-2xl" />
        </a>
        <a href="https://facebook.com/mohadmn03" target="_blank">
          <FaFacebook className="hover:text-[#4267B2] cursor-pointer text-xl sm:text-2xl" />
        </a>
        <a href="https://instagram.com/mohadmn03/" target="_blank">
          <FaInstagram className="hover:text-[#fb3958] cursor-pointer text-xl sm:text-2xl" />
        </a>
        <a href="https://github.com/mohadmn03" target="_blank">
          <FaGithub className="hover:text-gray-500 cursor-pointer text-xl sm:text-2xl" />
        </a>
        <a href="https://twitter.com/web3pros" target="_blank">
          <FaTwitter
            className="hover:text-[#1DA1F2] cursor-pointer text-xl sm:text-2xl"
            size={25}
          />
        </a>
      </div>
    </div>
  );
}
