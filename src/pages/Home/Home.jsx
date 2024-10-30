import React from "react";
import AnimationCar from "../../components/HomeComponents/AnimationCar/AnimationCar";
import Approach from "../../components/HomeComponents/Approach/Approach";
import Banner from "../../components/HomeComponents/Banner/Banner";
import CarImage from "../../components/HomeComponents/CarImage/CarImage";
import CarParkImageSlider from "../../components/HomeComponents/CarParkImageSlider/CarParkImageSlider";
import CaseStudy from "../../components/HomeComponents/CaseStudy/CaseStudy";
import ServicesSection from "../../components/HomeComponents/ServicesSection/ServicesSection";
import BusinessClient from "./../../components/HomeComponents/BusinessClient/BusinessClient";

const Home = () => {
  return (
    <div className="space-y-[50px]">
      <Banner />
      <CarImage />
      <CarParkImageSlider />
      <Approach />
      <BusinessClient />
      <AnimationCar />
      <ServicesSection />
      <CaseStudy />
    </div>
  );
};

export default Home;
