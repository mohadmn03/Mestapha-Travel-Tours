import React from "react";
import CustomButton from "../global/CustomButton";
import CustomHeading from "../global/CustomHeading";
import stepsImagrs from "../assets/steps.png";

export default function Steps() {
  return (
    <div className="w-full px-14 pt-8 pb-24 flex flex-col items-center">
      <CustomHeading headerTitle={"Steps"} />
      <img className="w-1/2 py-20" src={stepsImagrs} alt="" />
      <CustomButton buttonTitle={"Book now"} />
    </div>
  );
}
