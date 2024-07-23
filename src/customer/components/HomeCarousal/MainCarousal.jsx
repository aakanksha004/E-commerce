import React from "react";
import { MainCarousalData } from "./MainCarousalData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const MainCarousal = () => {
  const items = MainCarousalData.map((item) => (
    <img
      className="cursor-pointer h-[30rem] w-full"
      role="presentation "
      src={item.image}
    />
  ));

  return (
    <div>
      {" "}
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
      />
    </div>
  );
};

export default MainCarousal;
