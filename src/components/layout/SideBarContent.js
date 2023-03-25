import React, { useState } from "react";
import Flex from "./Flex";
import { GoTriangleDown } from "react-icons/go";
import LeftSideBarItem from "./LeftSideBarItem";
import { Category } from "../../data/data";
import { data } from "autoprefixer";

const SideBarContent = ({ DropDown, DropTitle, data }) => {
  let [drop, setDrop] = useState(DropDown);
  let [show, setShow] = useState(DropDown);
  let handleShowSideBar = () => {
    setShow(!show);
  };
  return (
    <div className=" mb-12">
      {drop ? (
        <div
          onClick={handleShowSideBar}
          className="flex cursor-pointer items-center justify-between"
        >
          <h3 className="cursor-pointer font-dm text-xl font-bold ">
            {DropTitle}
          </h3>
          <GoTriangleDown />
        </div>
      ) : (
        <h3 className="mb-9 cursor-pointer font-dm text-xl font-bold">
          {DropTitle}
        </h3>
      )}
      {show && (
        <>
          {data.map((item) => (
            <LeftSideBarItem
              title={item.name}
              SubDropDown={false}
              color={item.code}
            ></LeftSideBarItem>
          ))}
        </>
      )}
      {!drop && (
        <>
          {data.map((item) => (
            <LeftSideBarItem SubDropDown={true} title={item.name}>
              {item.subCategory.map((sitem) => (
                <h1 className="text-regular cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base text-[#767676]">
                  {sitem.name}
                </h1>
              ))}
            </LeftSideBarItem>
          ))}
        </>
      )}
    </div>
  );
};

export default SideBarContent;
