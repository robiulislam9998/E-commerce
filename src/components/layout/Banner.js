import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "./Image";

const Banner = () => {
  let [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "8%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px solid #262626",
                padding: "10px 0",
              }
            : {
                width: "30px",
                color: "#262626",
                borderRight: "3px solid white",
                padding: "10px 0",
                color: "transparent",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "30px",
                      color: "#262626",
                      borderRight: "3px solid #262626",
                      fontSize: "12px",
                    }
                  : {
                      width: "30px",
                      color: "#262626",
                      borderRight: "3px solid white",
                      fontSize: "12px",
                      color: "transparent",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <Link to="#">
        {" "}
        <div>
          <Image className="block" imgsrc="assets/banner.png" />
        </div>
      </Link>
      <Link to="#">
        {" "}
        <div>
          <Image className="block" imgsrc="assets/banner.png" />
        </div>
      </Link>{" "}
      <Link to="#">
        {" "}
        <div>
          <Image className="block" imgsrc="assets/banner.png" />
        </div>
      </Link>
    </Slider>
  );
};

export default Banner;
