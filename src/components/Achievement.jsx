/* eslint-disable no-unused-vars */
import React from "react";
import { achievement } from "../assets";
import { SlGraduation } from "react-icons/sl";

const Achievement = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] m-auto  grid md:grid-cols-2 max-w-[600px] ">
        <div className="flex flex-col justify-start ">
          <h1 className="md:leading-[72px] text-3xl font-bold ">
            Our <span className="text-[#20B486]">Achivement</span>
          </h1>
          <p className=" text-lg text-gray-900 ">
            Various versions have evolved over the years, sometimes by accident.
          </p>
          <div className="grid grid-cols-2">
            <div className="border py-6 flex">
              <div className="border p-4 bg-[#E9F8F3] rounded-xl">
                <SlGraduation size={30} style={{ color: "#1A906B" }} />
              </div>
              <div>
                <h1 className="">300</h1>
                <p>Instructor</p>
              </div>
            </div>
          </div>
        </div>

        <img src={achievement} className="m-auto md:order-last order-first" />
      </div>
    </div>
  );
};

export default Achievement;
