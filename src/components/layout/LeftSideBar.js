import React from "react";
import SideBarContent from "./SideBarContent";
import { Category, Color, Brand, Prices } from "../../data/data";
const LeftSideBar = () => {
  return (
    <>
      <SideBarContent
        DropDown={false}
        DropTitle="Shop By Catagory"
        data={Category}
      />
      <SideBarContent DropDown={true} DropTitle="Shop colure" data={Color} />
      <SideBarContent DropDown={true} DropTitle="Shop Brands" data={Brand} />
      <SideBarContent DropDown={true} DropTitle="Shop price" data={Prices} />
    </>
  );
};

export default LeftSideBar;
