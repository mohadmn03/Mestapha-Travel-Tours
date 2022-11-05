import React from "react";

export default function ServiceBox({
  imgPath,
  lieuPara,
  lieuName,
  lieuDesc,
  btnFunction,
}) {
  return (
    <div className="bg-white text-black rounded-xl overflow-hidden text-center w-full h-[530px]">
      <img src={imgPath} alt="" />
      <div className="p-6">
        <div className="p-6 rounded-t-xl relative -top-12 bg-white">
          <h2 className="text-2xl font-bold">{lieuName}</h2>
          <p
            className="text-gray-500"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            {lieuDesc}
          </p>
          <div className="w-10 h-px bg-black absolute top-[90%] left-[50%] translate-x-[-50%]"></div>
        </div>
        <p className="mt-[-40px]">{lieuPara}</p>
      </div>
      <a
        href={""}
        onClick={(event) => {
          event.preventDefault();
          btnFunction();
        }}
        className="
        px-3 py-1 border border-2 border-[#FF5414] text-[#FF5414] absolute bottom-4 left-[50%] translate-x-[-50%] rounded-md z-50
        after:content-[''] after:absolute after:top-0 hover:after:text-white after:left-0 after:h-full after:w-0 after:bg-[#FF5414] after:-z-20 after:duration-300
        hover:after:w-full hover:text-white
        "
      >
        learn more
      </a>
    </div>
  );
}
