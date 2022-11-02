import React from "react";
import Navbar from "./Navbar";
import ServicesImg from "../assets/services.png";
import CustomHeading from "../global/CustomHeading";
import CustomButton from "../global/CustomButton";
import ServiceBox from "./ServiceBox";

export default function Services() {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="pt-8 pb-24 px-14">
        <div className="one flex justify-between items-center">
          <div className="oneTwo flex flex-col items-center justify-center justify-between">
            <CustomHeading headerTitle={"Services"} />
            <p className="w-2/3 py-10 text-center">
              We Are Proud To Offer Umrah And Hajj Services, Quality And Comfort
              For The Guests Of Allah.
            </p>
            <CustomButton buttonTitle={"some ketba"} />
          </div>
          <img className="w-1/3" src={ServicesImg} alt="" />
        </div>
      </div>
      {/*  */}
      <div className="two bg-[#FE9F0D] w-full h-[600px] px-14 py-16">
        <ServiceBox />
      </div>
    </div>
  );
}
