import React from "react";
// import { IoIosArrowBack } from "@react-icons/";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import CustomButton from "../global/CustomButton";

export default function Home() {
  return (
    <div className="px-14 flex items-center justify-center sm:justify-between w-full ">
      <FaChevronLeft className="hover:animate-pulse text-4xl lg:text-6xl cursor-pointer absolute top-3/4 left-1/4 sm:relative sm:left-0 sm:top-0" />
      <div className="flex flex-col items-center justify-center sm:px-6 lg:py-0">
        <h2 className="font-semibold sm:text-3xl text-center">
          TOURE TRAVELS AND TOURS LIMITED
        </h2>
        <p className="w-[300px] sm:w-[400px] text-center my-10 text-xs sm:text-base font-medium leading-loose">
          We Are Proud To Offer Umrah And Hajj Services, Quality And Comfort For
          The Guests Of Allah.
        </p>
        <CustomButton buttonTitle={"Book Now"} />
      </div>
      <FaChevronRight className="hover:animate-pulse text-4xl lg:text-6xl cursor-pointer absolute top-3/4 right-1/4 sm:relative sm:left-0 sm:top-0" />
    </div>
  );
}
