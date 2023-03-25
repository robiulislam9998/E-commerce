import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const LeftSideBarItem = (props) => {
  let [drop, setDrop] = useState(props.SubDropDown);
  let [show, setShow] = useState(false);
  let handleShowSideBar = () => {
    setShow(!show);
  };
  return (
    <div>
      {drop ? (
        <div
          onClick={handleShowSideBar}
          className="flex cursor-pointer items-center justify-between border-b border-solid border-[#767676] py-5"
        >
          <h3 className="text-regular cursor-pointer font-dm text-base text-[#767676] ">
            {props.title}
          </h3>
          <AiOutlinePlus className="text-regular cursor-pointer font-dm text-base text-[#767676]" />
        </div>
      ) : props.color ? (
        <div
          onClick={handleShowSideBar}
          className="flex cursor-pointer items-center justify-between border-b border-solid border-[#767676] py-5"
        >
          <h3 className="text-regular cursor-pointer font-dm text-base text-[#767676] ">
            <span
              className="mr-2 inline-block h-[11px] w-[11px] rounded-full "
              style={{ background: props.color }}
            ></span>
            {props.title}
          </h3>
        </div>
      ) : (
        <div
          onClick={handleShowSideBar}
          className="flex cursor-pointer items-center justify-between border-b border-solid border-[#767676] py-5"
        >
          <h3 className="text-regular cursor-pointer font-dm text-base text-[#767676] ">
            {props.title}
          </h3>
        </div>
      )}
      {show && <div>{props.children}</div>}
    </div>
  );
};

export default LeftSideBarItem;
