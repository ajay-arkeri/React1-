/* eslint-disable no-unused-vars */
import React from "react";
import { Card } from "../components";
import Slider from "react-slick";
import { courses } from "../data/Courses";

const Courses = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  console.log(courses);

  return (
    <div className="w-full bg-[#E9F8F382] py-32">
      <div className="md:max-w-[1480px] m-auto   max-w-[600px] ">
        <h1 className="text-3xl py-3 font-bold ">
          Most Popular <span className="text-[#20B486]">Courses</span>
        </h1>
        <p className="text-[#6D737A]">
          Various versions have evolved over the years, sometimes by accident.
        </p>
        <Slider {...settings}>
          {courses.map((course) => {
            return <Card course={course} key={courses.id} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Courses;
