import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const BreadCrumb = () => {
  return (
    <div className="my-28">
      <h1 className=" mb-3 font-dm text-5xl font-bold">
        {window.location.pathname.split("/")[1]}
      </h1>
      <p className="font-regular  flex items-center gap-x-2 font-dm text-xs text-[#767676]">
        <Link to="/">Home</Link> <FaAngleRight />
        {window.location.pathname.split("/")[1]}
      </p>
    </div>
  );
};

export default BreadCrumb;
