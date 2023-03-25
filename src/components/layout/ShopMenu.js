import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
const ShopMenu = () => {
  return (
    <div className="mt-3 w-[22%] md:mt-0 md:w-[10%]">
      <h4 className="mb-2 font-dm text-base font-bold md:mb-4">SHOP</h4>
      <List>
        <ListItem
          className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D] duration-300 ease-in hover:font-bold"
          itemname="Category 1"
          href="#"
        />
        <ListItem
          className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D] duration-300 ease-in hover:font-bold"
          itemname="Category 2"
          href="#"
        />
        <ListItem
          className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D] duration-300 ease-in hover:font-bold"
          itemname="Category 3"
          href="#"
        />
        <ListItem
          className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D] duration-300 ease-in hover:font-bold"
          itemname="Category 4"
          href="#"
        />
        <ListItem
          className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D] duration-300 ease-in hover:font-bold"
          itemname="Category 5"
          href="#"
        />
      </List>
    </div>
  );
};

export default ShopMenu;
