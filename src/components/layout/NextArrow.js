import React from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <span
      className="absolute left-0 top-[30%] z-50 md:top-[38%]"
      style={{ ...style }}
      onClick={onClick}
    >
      <BsFillArrowLeftCircleFill className=" text-6xl text-[#979797]" />
    </span>
  );
};

export default NextArrow;
