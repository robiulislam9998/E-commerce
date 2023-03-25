import React from "react";
import BreadCrumb from "../components/layout/BreadCrumb";
import Container from "../components/layout/Container";
import Flex from "../components/layout/Flex";
import Image from "../components/layout/Image";
const About = () => {
  return (
    <Container>
      <BreadCrumb />
      <Flex className="flex">
        <div className="w-2/4">
          <Image imgsrc="assets/p1.png" />
        </div>
        <div className="w-2/4">
          <Image imgsrc="assets/p1.png" />
        </div>
      </Flex>
    </Container>
  );
};

export default About;
