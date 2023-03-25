import React from "react";
import AdditionalInfo from "../components/layout/AdditionalInfo";
import Advertise from "../components/layout/Advertise";
import Banner from "../components/layout/Banner";
import BestSellar from "../components/layout/BestSellar";
import MiddleAdvertisement from "../components/layout/MiddleAdvertisement";
import NewArrivals from "../components/layout/NewArrivals";
import Offers from "../components/layout/Offers";

const Home = () => {
  return (
    <>
      <Banner />
      <AdditionalInfo />
      <Advertise />
      <NewArrivals />
      <BestSellar />
      <MiddleAdvertisement />
      <Offers />
    </>
  );
};

export default Home;
