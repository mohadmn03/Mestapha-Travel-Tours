import React from "react";

export default function CustomButton({ buttonTitle, action, btnStyle }) {
  return (
    <a
      href={""}
      className={`py-2 px-8 rounded-md cursor-pointer w-fit
      ${
        btnStyle === "noBg"
          ? "bg-none  border-2 border-[#FD4B0A] text-[#FD4B0A]"
          : btnStyle === "black"
          ? "bg-none border-2 border-black text-black"
          : "bg-gradient-to-r from-[#FD4B0A] to-[#FE9F0D]"
      } 
      `}
      onClick={(event) => {
        event.preventDefault();
      }}
    >
      {buttonTitle}
    </a>
  );
}
