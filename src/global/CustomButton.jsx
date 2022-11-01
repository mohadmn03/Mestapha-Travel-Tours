import React from "react";

export default function CustomButton({ buttonTitle, action }) {
  return (
    <a
      href={action}
      className="py-2 px-8 rounded-md cursor-pointer
      bg-gradient-to-r from-[#FD4B0A] to-[#FE9F0D] hover:border
      "
    >
      {buttonTitle}
    </a>
  );
}
