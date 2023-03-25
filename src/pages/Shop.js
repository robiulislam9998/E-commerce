import React, { useState, useEffect } from "react";

import BreadCrumb from "../components/layout/BreadCrumb";
import Container from "../components/layout/Container";
import Flex from "../components/layout/Flex";
import LeftSideBar from "../components/layout/LeftSideBar";
import Pagination from "../components/layout/Pagination";
import { BsFilterCircleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
const Shop = () => {
  let [showNumber, setShowNumbe] = useState(12);
  let handlePagination = (e) => {
    setShowNumbe(+e.target.value);
  };
  let [show, setShow] = useState(true);

  useEffect(() => {
    function scrollWidth() {
      if (window.innerWidth < 470) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    scrollWidth();
    window.addEventListener("resize", scrollWidth);
  }, []);
  return (
    <Container>
      <BreadCrumb />
      <Flex className="relative flex gap-x-10">
        {show && (
          <div className=" absolute top-0 left-0 z-50 w-full bg-[#f6f6f6] p-5 sm:static sm:w-[24%] sm:bg-transparent sm:p-0">
            <AiFillCloseCircle
              onClick={() => setShow(!show)}
              className=" text-xl sm:hidden"
            />
            <LeftSideBar />
          </div>
        )}

        <div className="relative w-full sm:w-[76%]">
          <div className=" mb-14 flex justify-end gap-10">
            <div className="flex items-center">
              <BsFilterCircleFill
                onClick={() => setShow(!show)}
                className="  inline-block text-xl text-[#767676] sm:hidden"
              />
            </div>
            <div className="items-center gap-x-3 md:flex">
              <span className="font-regular font-dm text-base">Sort By:</span>
              <select
                class="  font-regular w-[100px] rounded-lg border border-[#f0f0f0] bg-gray-50 p-2.5 font-dm text-base text-gray-900 outline-none  dark:text-black md:w-[239px] 
          "
              >
                <option selected className="font-regular font-dm text-base">
                  Featured
                </option>
                <option value="US">hdh</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className=" items-center gap-x-3 md:flex">
              <span className="font-regular font-dm text-base">Show:</span>
              <select
                onChange={handlePagination}
                class="  font-regular w-14 rounded-lg border border-[#f0f0f0] bg-gray-50 p-2.5 font-dm text-base text-gray-900 outline-none  dark:text-black md:w-[239px] 
          "
              >
                <option value="12" className="font-regular font-dm text-base">
                  12
                </option>
                <option value="24" className="font-regular font-dm text-base">
                  24
                </option>
                <option value="48" className="font-regular font-dm text-base">
                  48
                </option>
              </select>
            </div>
          </div>

          <Pagination itemsPerPage={showNumber} />
        </div>
      </Flex>
    </Container>
  );
};

export default Shop;
