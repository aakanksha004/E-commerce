import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button } from "@mui/material";
import { mens_kurta } from "../../../Data/Mens_Kurta";

    const HomeSectionCarousel = ({data,sectionName}) => {
    const [activeIndex, setActiveIndex]= useState(0);
  const responsive = {
    0: {
      items: 1,
    },
    720: {
      items: 3,
    },
    1024: {
      items: 5.5,
      itemsFit: "contain",
    },
  };

  const slidePrev=()=>setActiveIndex(activeIndex-1);
  const slideNext=()=>setActiveIndex(activeIndex+1);
  const syncActiveIndex=({item})=>setActiveIndex(item)

  const items = data.slice(0,10).map((item) => <HomeSectionCard product={item}/>);
  return (
    <div className=" border">
        <h2 className="text-2xl font-extrabold text-gray-800 py-5" >{sectionName}</h2>
      <div className="relative p-4">
        <AliceCarousel

          items={items}
          // disableButtonsControls
          responsive={responsive}
          disableDotsControls
          // infinite
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        { activeIndex!==items.length-5 && <Button
          variant="contained "
          className="z-50"
          onClick={slideNext}
          sx={{
            position: 'absolute',
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
          }}
          aria-label="next"
        >
        
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
        </Button>
        }

       { activeIndex!==0 && <Button
          variant="contained "
          className="z-50"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(90deg)",
          }}
          aria-label="next"
        >
          {" "}
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)" }} />
        </Button> }
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
