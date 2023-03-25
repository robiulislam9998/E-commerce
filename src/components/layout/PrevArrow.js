import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <span
      className=" absolute  top-[30%] right-1 z-50 md:top-[38%] lg:right-5 "
      style={{ ...style }}
      onClick={onClick}
    >
      <BsFillArrowRightCircleFill className="text-6xl text-[#979797]" />
    </span>
  );
};

export default PrevArrow;
