import React from "react";

const InputBox = (props) => {
  return (
    <div className=" mb-5">
      <h4 className=" placeholder:font-regular mb-2.5 font-dm text-base font-bold placeholder:font-dm placeholder:text-sm placeholder:text-[#767676]">
        {props.title}
      </h4>
      <props.as
        placeholder={props.placeholder}
        className=" w-full resize-none border-b border-solid border-[#f0f0f0] pb-2.5 outline-none"
      />
    </div>
  );
};

export default InputBox;
