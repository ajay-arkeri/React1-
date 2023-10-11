/* eslint-disable react/no-unescaped-entities */
import { cta } from "../assets";

const CTA = () => {
  return (
    <div className="w-full bg-[#E9F8F3] py-24">
      <div className="md:max-w-[1480px] m-auto  grid md:grid-cols-2 max-w-[600px] gap-8  items-center">
        <img className="w-[650px] mx-auto" src={cta} />

        <div className="justify-start gap-4">
          <h1 className=" text-3xl font-semibold py-2">
            Join the <span className="text-[#20B486]">World's Largest </span>
            learning platform today
          </h1>
          <p className="py-2 text-lg text-gray-900 ">
            Start learning by registering for free
          </p>
          <button className="bg-[#20B486] px-8 py-5 my-4 rounded-md text-white font-bold max-[780px]:w-full ">
            Sign up for Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
