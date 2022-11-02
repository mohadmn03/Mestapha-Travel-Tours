import React from "react";
import Navbar from "./Navbar";
import contactUsImg from "../assets/contactUs.png";
import call from "../assets/call.png";
import location from "../assets/location.png";
import time from "../assets/time.png";
import CustomHeading from "../global/CustomHeading";
import CustomButton from "../global/CustomButton";
import Form from "./Form";

export default function Contact() {
  const numbers = [
    "+234 806 333 0016",
    "+234 806 545 4866",
    "+97155 4 09 7 713",
    "+23480337 50 5 00",
    "+234 7 06 2621281",
    "+2348069 2 2 4848",
  ];
  const theLocation = [
    "Come see us",
    "BRANCH OFFICE:",
    "No 1 Maje Plaza Katsina Road Airport Kano",
  ];
  const theTime = ["Availability", "24 / 7", "SUPPORT"];
  return (
    <div className="bg-gradient-to-r from-[#000000] to-[#FD6D0B]">
      <Navbar />
      <div className="pt-8 pb-24 px-14">
        <div className="one flex justify-between items-center">
          <img className="w-1/2" src={contactUsImg} alt="" />
          <div className="oneTwo flex flex-col items-center justify-center justify-between">
            <CustomHeading headerTitle={"Contact Us"} />
            <p className="w-2/3 py-10 text-center">
              We Are Proud To Offer Umrah And Hajj Services, Quality And Comfort
              For The Guests Of Allah.
            </p>
            <CustomButton buttonTitle={"some ketba"} />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="two bg-[#FE9F0D] w-full h-100 px-14 py-16 flex justify-evenly items-start">
        <div className="boxOne flex flex-col items-center justify-center">
          <img className="mb-2 w-14 h-14" src={call} alt="" />
          <div className="phoneNumbers">
            {numbers.map((number, i) => {
              return (
                <p className="text-center py-1" key={i}>
                  {number}
                </p>
              );
            })}
          </div>
        </div>
        <div className="boxTwo flex flex-col items-center justify-center">
          <img className="mb-2 w-14 h-14" src={location} alt="" />
          <div className="locationDetails">
            {theLocation.map((info, i) => {
              return (
                <p key={i} className="py-1 text-center">
                  {info}
                </p>
              );
            })}
          </div>
        </div>
        <div className="boxThree flex flex-col items-center justify-center">
          <img className="mb-2 w-14 h-14" src={time} alt="" />
          <div className="timeDetails">
            {theTime.map((info, i) => {
              return (
                <p key={i} className="py-1 text-center">
                  {info}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      {/*  */}
      <div className="emailUs flex flex-col items-center py-16 px-14">
        <CustomHeading headerTitle={"Email Us"} />
        <p className="w-2/3 py-10 text-center w-[500px]">
          We Are Proud To Offer Umrah And Hajj Services, Quality And Comfort For
          The Guests Of Allah.
        </p>
        <Form />
      </div>
    </div>
  );
}
