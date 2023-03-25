import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
const Menu = () => {
  return (
    <div className="w-[10%]">
      <h4 className="mb-2 font-dm text-base font-bold md:mb-4">MENU</h4>
      <List>
        <ListItem
          className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D] duration-300 ease-in hover:font-bold"
          itemname="Home"
          href="#"
        />
        <ListItem
          className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D] duration-300 ease-in hover:font-bold"
          itemname="Shop"
          href="#"
        />
        <ListItem
          className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D] duration-300 ease-in hover:font-bold"
          itemname="About"
          href="#"
        />
        <ListItem
          className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D] duration-300 ease-in hover:font-bold"
          itemname="Contact"
          href="#"
        />
        <ListItem
          className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D] duration-300 ease-in hover:font-bold"
          itemname="Journal1"
          href="#"
        />
      </List>
    </div>
  );
};

export default Menu;
