import React from "react";
// import { IoIosArrowBack } from "@react-icons/";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import CustomButton from "../global/CustomButton";

export default function Home() {
  return (
    <div className="px-14 flex items-center justify-between w-full ">
      <FaChevronLeft className="hover:animate-pulse text-6xl cursor-pointer" />
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-semibold text-3xl">
          TOURE TRAVELS AND TOURS LIMITED
        </h2>
        <p className="w-[400px] text-center my-10 font-medium leading-loose">
          We Are Proud To Offer Umrah And Hajj Services, Quality And Comfort For
          The Guests Of Allah.
        </p>
        <CustomButton buttonTitle={"Book Now"} />
      </div>
      <FaChevronRight className="hover:animate-pulse text-6xl cursor-pointer" />
    </div>
  );
}
