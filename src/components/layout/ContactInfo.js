import React from "react";
import Container from "./Container";
import Flex from "./Flex";

const ContactInfo = () => {
  return (
    <div className="mt-3 flex w-[40%] justify-center md:mt-0">
      <div className=" ">
        <h5 className="mb-2 ml-10 font-dm text-base font-bold md:ml-0 md:mb-4">
          Contact Us
        </h5>

        <div className="ml-10 md:ml-0">
          <h4 className="mb-4 font-dm text-base font-medium text-[#6D6D6D]">
            (052) 611-5711 <br /> company@domain.com
          </h4>
          <p className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]">
            575 Crescent Ave. Quakertown, PA 18951
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
