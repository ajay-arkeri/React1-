/* eslint-disable no-unused-vars */
import React from "react";
import { heroImg } from "../assets";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] m-auto  grid md:grid-cols-2 max-w-[600px] ">
        <div className="flex flex-col justify-start gap-4">
          <p className="py-2 text-2xl text-[#20B486] font-medium">
            START TO SUCCESS
          </p>
          <h1 className="md:leading-[72px] md:text-6xl text-5xl font-semibold py-2">
            Access To <span className="text-[#20B486]">5000+</span> Courses from
            <span className="text-[#20B486]"> 300</span> Instructors &
            Insititutions
          </h1>
          <p className="py-2 text-lg text-gray-900 ">
            Various versions have evolved over the years, sometimes by accident.
          </p>
          <form className="max-w-[700px] p-4 input-bx-shadow border bg-white rounded-md flex justify-between">
            <input
              className="bg-white w-2/3"
              type="text"
              placeholder="What do you want to learn?"
            />
            <button>
              <AiOutlineSearch
                size={20}
                className="icon"
                style={{ color: "#000" }}
              />
            </button>
          </form>
        </div>

        <img className="md:order-last order-first" src={heroImg} />
      </div>
    </div>
  );
};

export default Hero;
