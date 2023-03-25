import Container from "./Container";
import React, { useEffect, useRef, useState } from "react";
import Flex from "./Flex";
import Dropdown from "./Dropdown";
import { CgMenuLeftAlt } from "react-icons/cg";
import List from "./List";
import ListItem from "./ListItem";
import Search from "./Search";
import Image from "./Image";

import { FaSearch, FaUserAlt } from "react-icons/fa";
import { RxTriangleDown } from "react-icons/rx";
import { HiShoppingCart } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Header = () => {
  let [categoryShow, setCategoryshow] = useState(false);
  let [usershow, setUsershow] = useState(false);
  let [cartshow, setCartshow] = useState(false);

  let categoryRef = useRef();
  let userRef = useRef();
  let cartRef = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (categoryRef.current.contains(e.target)) {
        setCategoryshow(true);
      } else {
        setCategoryshow(false);
      }
      if (userRef.current.contains(e.target)) {
        setUsershow(true);
      } else {
        setUsershow(false);
      }
      if (cartRef.current.contains(e.target)) {
        setCartshow(true);
      } else {
        setCartshow(false);
      }
    });
  }, []);
  return (
    <div className="bg-[#F5F5F3] py-5">
      <Container>
        <Flex className="flex justify-between">
          <div className="flex items-center">
            <Dropdown className="relative z-50" dropref={categoryRef}>
              <p className="font-regular flex items-center gap-x-2.5 font-dm text-sm">
                <CgMenuLeftAlt className="text-3xl lg:text-2xl" />
                <span className=" hidden lg:inline-block">
                  {" "}
                  Shop by Category
                </span>
              </p>
              {categoryShow && (
                <List className="font-regular absolute  top-10  w-[263px] bg-primary font-dm text-sm text-[#B7B5B5]">
                  <ListItem
                    className="py-4 px-5 hover:px-7 hover:text-white"
                    itemname="Accesories"
                  />
                  <ListItem
                    className="border border-solid border-[#2D2D2D] py-4 px-5 hover:px-7 hover:text-white"
                    itemname="Furniture"
                  />
                  <ListItem
                    className="border border-solid border-[#2D2D2D] py-4 px-5 hover:px-7 hover:text-white"
                    itemname="Electronics"
                  />
                  <ListItem
                    className="py-4 px-5 hover:px-7 hover:text-white"
                    itemname="Clothes"
                  />
                  <ListItem
                    className="border border-solid border-[#2D2D2D] py-4 px-5 hover:px-7 hover:text-white"
                    itemname="Bags"
                  />
                  <ListItem
                    className="py-4 px-5 hover:px-7 hover:text-white"
                    itemname="Home appliances"
                  />
                </List>
              )}
            </Dropdown>
          </div>
          <div className="relative w-auto lg:w-[600px]">
            <Search
              className="font-regular w-full py-4 px-5  font-dm text-sm placeholder:text-[#c4c4c4]"
              placeholder="Search Products"
            />
            <FaSearch className="absolute top-4 right-4" />
          </div>
          <div className="flex items-center">
            <Flex className="flex gap-x-10">
              <Dropdown className="relative z-50" dropref={userRef}>
                <div className="flex items-center">
                  <FaUserAlt />
                  <RxTriangleDown />
                </div>
                {usershow && (
                  <List className="font-regular absolute  top-8 right-0 w-[200px] border border-solid border-[#F0F0F0] bg-white font-dm text-sm text-primary">
                    <ListItem
                      className="border-b border-solid border-[#F0F0F0] py-4 px-5 ease-in hover:bg-primary hover:text-white"
                      itemname="My Account"
                    />
                    <ListItem
                      className="border-b border-solid border-[#F0F0F0] py-4 px-5 ease-in hover:bg-primary hover:text-white"
                      itemname="Log Out"
                    />
                  </List>
                )}
              </Dropdown>
              <div>
                <Dropdown className="relative z-50" dropref={cartRef}>
                  <div className="flex items-center">
                    <HiShoppingCart className="text-xl" />
                  </div>
                  {cartshow && (
                    <div className="absolute top-8  right-0 w-[360px] border border-solid border-[#c7b9b9] ">
                      <div className=" bg-[#f8f8ea] p-5">
                        <Flex className="flex justify-between">
                          <div>
                            <Image imgsrc="assets/cartimg.png" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h3 className="font-dm text-sm font-bold text-primary">
                              Black Smart Watch
                            </h3>
                            <p className="mt-3 font-dm text-sm font-bold text-primary">
                              $44.00
                            </p>
                          </div>
                          <div className="flex items-center justify-end">
                            <ImCross className=" text-sm" />
                          </div>
                        </Flex>
                      </div>
                      <div className="bg-white p-5">
                        <h4 className=" font-regular font-dm text-base text-[#767676]">
                          Subtotal:{" "}
                          <span className=" font-bold text-primary">
                            $44.00
                          </span>
                        </h4>
                        <Link
                          to="#"
                          className=" inline-block border border-solid border-primary py-4 px-10 font-dm text-sm font-bold text-primary"
                        >
                          View Cart
                        </Link>
                        <Link
                          to="#"
                          className=" text-White ml-5 inline-block border border-solid border-primary bg-primary py-4 px-10 font-dm text-sm font-bold text-white"
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                  )}
                </Dropdown>
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
