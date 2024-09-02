import React from "react";
import "./hero.sass";
import { FaHome } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Apple } from "../../components/icons/apple";
const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-[2vh] p-[50px]">
      <h1 className="text-red-600 font-bold text-3xl">
        hello from hero section
      </h1>
      <FaHome className="text-5xl" />
      <FaFacebook className="text-blue-600 text-5xl" />
      <Apple color="red" size={50} />
    </div>
  );
};

export default Hero;
