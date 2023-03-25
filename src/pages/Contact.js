import React from "react";
import BreadCrumb from "../components/layout/BreadCrumb";
import Button from "../components/layout/Button";
import Container from "../components/layout/Container";
import InputBox from "../components/layout/InputBox";

const Contact = () => {
  return (
    <Container>
      <BreadCrumb />
      <div className=" mt-[-50px] md:mt-0 md:w-2/4">
        <h2 className=" mb-10 font-dm text-4xl font-bold">Fill up a From</h2>
        <InputBox as="input" placeholder="Your name here" title="Name" />
        <InputBox as="input" placeholder="Your email here" title="Email" />
        <InputBox as="textarea" placeholder="Your message here" title="Email" />
        <Button title="Send" />
      </div>
    </Container>
  );
};

export default Contact;
