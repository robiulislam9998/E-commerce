import React from "react";
import List from "./List";
import ListItem from "./ListItem";

const HelpMenu = () => {
  return (
    <div className="mt-3 w-[38%] md:mt-0 md:w-[10%]">
      <h4 className="mb-2 font-dm text-base font-bold md:mb-4">HELP</h4>
      <List>
        <ListItem
          className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D] duration-300 ease-in hover:font-bold"
          itemname="Privacy Policy"
          href="#"
        />
        <ListItem
          className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D] duration-300 ease-in hover:font-bold"
          itemname="Terms & Conditions"
          href="#"
        />
        <ListItem
          className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D] duration-300 ease-in hover:font-bold"
          itemname="Special E-shop"
          href="#"
        />
        <ListItem
          className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D] duration-300 ease-in hover:font-bold"
          itemname="Shipping"
          href="#"
        />
        <ListItem
          className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D] duration-300 ease-in hover:font-bold"
          itemname="Secure Payments"
          href="#"
        />
      </List>
    </div>
  );
};

export default HelpMenu;
