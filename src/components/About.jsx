import React, { useState } from "react";
import CustomButton from "../global/CustomButton";
import CustomHeading from "../global/CustomHeading";
import Navbar from "./Navbar";
import aboutUsPic from "../assets/talegKlawih.png";
import lazher from "../assets/lazherTa3Nommi.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import one from "../assets/gallery1.jpg";
import two from "../assets/gallery2.jpg";
import three from "../assets/gallery3.jpg";
import four from "../assets/gallery4.jpg";
import five from "../assets/gallery5.jpg";
import six from "../assets/gallery6.jpg";
import Footer from "./Footer";

export default function About() {
  const [showGallery, setShowGallery] = useState(false);
  const [galleryPic, setGalleryPic] = useState(one);
  return (
    <div className="bg-black min-h-[100vh]">
      <Navbar />
      {showGallery && (
        <div
          className="bg-black w-full fixed"
          style={{ height: "calc(100vh - 56px)" }}
        >
          <span
            onClick={() => setShowGallery(false)}
            className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center border-2 text-xl cursor-pointer"
          >
            X
          </span>
          <img
            src={galleryPic}
            alt=""
            className="w-52 h-[500px] absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 border border-l-indigo-50 rounded-sm"
          />
        </div>
      )}
      <div className="pt-8 pb-24 px-14">
        <div className="one flex justify-between items-center">
          <div className="oneTwo flex flex-col items-center lg:items-start xl:items-center  justify-between">
            <CustomHeading headerTitle={"About Us"} />
            <p className="w-full sm:w-2/3 py-10 text-center">
              We Are Proud To Offer Umrah And Hajj Services, Quality And Comfort
              For The Guests Of Allah.
            </p>
            <CustomButton buttonTitle={"some ketba"} />
          </div>
          <img className="w-1/3 hidden lg:block" src={aboutUsPic} alt="" />
        </div>
      </div>
      {/*  */}
      <div className="two bg-[#FE9F0D] w-full px-14 py-16 flex flex-col items-start lg:items-center lg:flex-row">
        <img className="w-full lg:h-80 rounded-sm" src={lazher} alt="" />
        <div className="py-10 lg:p-10">
          <h2 className="font-bold text-3xl">Lazhar Nakch</h2>
          <h3 className="text-black font-bold">PRESEDANT O RUSSIAN REPUBLIC</h3>
          <p className="py-10">
            Lorem ki nemi moha lezhar jacob ki nemi zino 3atay fi ageria Lorem
            ki nemi moha lezhar jacob ki nemi zino 3atay fi ageria Lorem ki nemi
            moha lezhar jacob ki nemi zino 3atay fi ageria Lorem ki nemi moha
            lezhar jacob ki nemi zino 3atay fi ageria .
          </p>
          <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row sm:justify-between sm:items-center">
            <div className="social flex gap-10">
              <FaFacebook
                size={30}
                className="hover:text-[#4267B2] cursor-pointer"
              />
              <FaInstagram
                className="hover:text-[#fb3958] cursor-pointer"
                size={30}
              />
              <FaTwitter
                className="hover:text-[#1DA1F2] cursor-pointer"
                size={30}
              />
            </div>
            <CustomButton buttonTitle={"some ketba"} btnStyle={"black"} />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="px-14 py-16 flex items-center justify-center">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3 , 1fr)",
            gap: 40,
          }}
        >
          <img
            className="h-60 w-40 shadow-sm hover:shadow-orange-200 shadow-white cursor-pointer"
            onClick={() => {
              setShowGallery(true);
              setGalleryPic(one);
            }}
            src={one}
            alt=""
          />
          <img
            className="h-60 w-40 shadow-sm hover:shadow-orange-200 shadow-white cursor-pointer"
            onClick={() => {
              setShowGallery(true);
              setGalleryPic(two);
            }}
            src={two}
            alt=""
          />
          <img
            className="h-60 w-40 shadow-sm hover:shadow-orange-200 shadow-white cursor-pointer"
            onClick={() => {
              setShowGallery(true);
              setGalleryPic(three);
            }}
            src={three}
            alt=""
          />
          <img
            className="h-60 w-40 shadow-sm hover:shadow-orange-200 shadow-white cursor-pointer"
            onClick={() => {
              setShowGallery(true);
              setGalleryPic(four);
            }}
            src={four}
            alt=""
          />
          <img
            className="h-60 w-40 shadow-sm hover:shadow-orange-200 shadow-white cursor-pointer"
            onClick={() => {
              setShowGallery(true);
              setGalleryPic(five);
            }}
            src={five}
            alt=""
          />
          <img
            className="h-60 w-40 shadow-sm hover:shadow-orange-200 shadow-white cursor-pointer"
            onClick={() => {
              setShowGallery(true);
              setGalleryPic(six);
            }}
            src={six}
            alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
