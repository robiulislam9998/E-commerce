import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Heading from "./Heading";
import Product from "./Product";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 576,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 770,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 2,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 2,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
    ],
  };
  return (
    <div className="mt-5 md:mt-32">
      {" "}
      <Container>
        <Heading title="New Arrivals" />
        {/* <Flex className="sm:flex sm:max-lg:flex-wrap sm:max-md:justify-between md:gap-x-10"> */}
        <Slider {...settings}>
          <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px] ">
            <Product src="assets/p1.png" badge={false} />
          </div>
          <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
            <Product src="assets/p1.png" badge={true} />
          </div>
          <div className="sm:max-w-[300px] md:max-lg:max-w-[345px]  lg:max-w-[370px]">
            <Product src="assets/p1.png" badge={false} />
          </div>
          <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
            <Product src="assets/p1.png" badge={true} />
          </div>
          <div className="sm:max-w-[300px] md:max-lg:max-w-[345px]  lg:max-w-[370px]">
            <Product src="assets/p1.png" badge={true} />
          </div>
        </Slider>

        {/* </Flex> */}
      </Container>
    </div>
  );
};

export default NewArrivals;
