import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ServicesImg from "../assets/services.png";
import CustomHeading from "../global/CustomHeading";
import CustomButton from "../global/CustomButton";
import ServiceBox from "./ServiceBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import kaaba from "../assets/kaaba.png";
import mecca from "../assets/mecca.png";
import uae from "../assets/uae.png";
import mosque from "../assets/mosque.png";
import Footer from "./Footer";
import "./someR.css";

export default function Services() {
  const lieu = [
    {
      lieuPic: kaaba,
      lieuName: "OMRAH",
      lieuDesc: "Best Omrah Ever",
      lieuPara:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore expedita rem quas magnam qui officiis totam, consectetur, eum veniam facilis fugiat dolorum! Facilis autem, id consequuntur fugiat illum explicabo ab!",
    },
    {
      lieuPic: mecca,
      lieuName: "HADJ",
      lieuDesc: "Best Hadj Services",
      lieuPara:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore expedita rem quas magnam qui officiis totam, consectetur, eum veniam facilis fugiat dolorum! Facilis autem, id consequuntur fugiat illum explicabo ab!",
    },
    {
      lieuPic: uae,
      lieuName: "U.A.E",
      lieuDesc: "All Type Of Visa’s & Resendency",
      lieuPara:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore expedita rem quas magnam qui officiis totam, consectetur, eum veniam facilis fugiat dolorum! Facilis autem, id consequuntur fugiat illum explicabo ab!",
    },
    {
      lieuPic: mosque,
      lieuName: "OMAN",
      lieuDesc: "Best Oman Ever",
      lieuPara:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore expedita rem quas magnam qui officiis totam, consectetur, eum veniam facilis fugiat dolorum! Facilis autem, id consequuntur fugiat illum explicabo ab!",
    },
  ];
  //
  const [contentNumber, setContentNumber] = useState(0);
  const contentHandler = (number) => {
    setContentNumber(number);
  };
  return (
    <div className="bg-black">
      <Navbar />
      <div className="pt-8 pb-24 px-14">
        <div className="one flex justify-between items-center">
          <div className="oneTwo flex flex-col items-center lg:items-start xl:items-center  justify-between">
            <CustomHeading headerTitle={"Services"} />
            <p className="w-full sm:w-2/3 py-10 text-center">
              We Are Proud To Offer Umrah And Hajj Services, Quality And Comfort
              For The Guests Of Allah.
            </p>
            <CustomButton buttonTitle={"some ketba"} />
          </div>
          <img className="w-1/3 hidden lg:block" src={ServicesImg} alt="" />
        </div>
      </div>
      {/*  */}
      <div className="two bg-[#FE9F0D] w-full px-14 py-16 ">
        <Swiper slidesPerView={"auto"} spaceBetween={40} className=" fle">
          {lieu.map(({ lieuPic, lieuName, lieuDesc, lieuPara }, i) => {
            return (
              <SwiperSlide className="swSl">
                <ServiceBox
                  imgPath={lieuPic}
                  lieuName={lieuName}
                  lieuDesc={lieuDesc}
                  lieuPara={lieuPara}
                  btnFunction={() => contentHandler(i)}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/*  */}
      <div className="px-14 py-16 flex items-center justify-center">
        <div className="flex flex-col lg:flex-row border p-10 w-full lg:w-2/3 rounded-[16px]">
          <div className="flex-1 p-2 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                {lieu[contentNumber].lieuName}
              </h2>
              <p
                className="text-gray-500"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                {lieu[contentNumber].lieuDesc}
              </p>
            </div>
            <img
              src={lieu[contentNumber].lieuPic}
              alt=""
              className="py-4 lg:py-0"
            />
          </div>
          <div className="flex-1 p-2 flex flex-col justify-between ml-0 lg:ml-4">
            <p className="">{lieu[contentNumber].lieuPara}</p>
            <div className="w-20 my-8 h-px bg-[#FD4B0A]"></div>
            <CustomButton buttonTitle={"Book Now"} btnStyle={"noBg"} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
