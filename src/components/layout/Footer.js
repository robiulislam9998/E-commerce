import Container from "./Container";
import React from "react";
import Flex from "./Flex";
import Image from "./Image";
import Menu from "./Menu";
import ShopMenu from "./ShopMenu";
import HelpMenu from "./HelpMenu";
import ContactInfo from "./ContactInfo";
import { FaInstagram } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#F5F5F3] md:mt-36 md:py-14">
      <Container>
        <Flex className="md:flex ">
          <Menu />

          <ShopMenu />

          <HelpMenu />
          <ContactInfo />

          <div className=" ml-36 mt-12 w-[40%] md:mt-0 md:ml-0">
            <Image className="" imgsrc="assets/logo.png" />
          </div>
        </Flex>
        <div className=" justify-between md:flex">
          <diV className=" ml-[134px] mt-6  flex w-[40%]  gap-x-4 text-base md:ml-0 md:mt-16 md:gap-x-6">
            <Link className="#">
              <GrFacebookOption />
            </Link>
            <Link className="#">
              <AiFillLinkedin />
            </Link>
            <Link className="#">
              <FaInstagram />
            </Link>
          </diV>
          <diV className="mt-6 md:mt-16">
            <p className="text-[13px] text-[#6d6d6d] md:text-sm">
              2020 Orebi Minimal eCommerce Figma Template by Adveits
            </p>
          </diV>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
