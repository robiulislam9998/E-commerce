import React from "react";
import Badge from "./Badge";
import Flex from "./Flex";
import Image from "./Image";
import { AiFillHeart } from "react-icons/ai";
import { RxReload } from "react-icons/rx";
import { HiShoppingCart } from "react-icons/hi";

const Product = ({ src, badge }) => {
  return (
    <div>
      <div className=" group relative overflow-y-hidden">
        <Image className=" w-full" imgsrc={src} />
        {badge && <Badge title="New" />}
        <div className="absolute bottom-[-44%] left-0 h-40 w-full bg-white py-6 px-7 duration-300 ease-in group-hover:bottom-0 lg:max-xl:bottom-[-75%]">
          <Flex className="flex items-center justify-end gap-x-1 sm:gap-x-4">
            <p className="font-regular font-dm text-base text-[#d6d6d6] sm:text-base lg:max-xl:text-sm">
              Add to Wish List
            </p>
            <AiFillHeart className="text-base" />
          </Flex>
          <Flex className="my-5 flex items-center justify-end gap-x-1 sm:gap-x-4">
            <p className="font-regular font-dm text-base text-[#d6d6d6] sm:text-base lg:max-xl:text-sm">
              Compare
            </p>
            <RxReload className="text-base" />
          </Flex>
          <Flex className="flex items-center justify-end gap-x-1 sm:gap-x-4">
            <p className="font-regular font-dm text-base text-[#d6d6d6] sm:text-base lg:max-xl:text-sm">
              Add to Cart
            </p>
            <HiShoppingCart className="text-base" />
          </Flex>
        </div>
      </div>
      <div className="mb-10 md:mb-0">
        <Flex className="mt-6 flex items-center justify-between md:mt-6">
          {" "}
          <h3 className="font-xl font-dm font-bold lg:max-xl:text-sm">
            Basic Crew Neck Tee
          </h3>
          <p className="font-base font-regular font-dm text-[#767676] lg:max-xl:text-sm">
            $44.00
          </p>
        </Flex>
        <h3 className="font-base font-regular mt-4 font-dm text-[#767676] lg:max-xl:text-sm">
          Black
        </h3>
      </div>
    </div>
  );
};

export default Product;
