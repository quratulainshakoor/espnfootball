import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import Slider from "react-slick";

import DetailCard from "./details";
import { data } from "./data";

// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";



const Card = () => {



 const settings  = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll:3,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Box sx={{
        marginTop:'100px'
      }}>
    

     
      
        {/* <Button>
            <ArrowBackIosIcon />
          </Button>
          <Button style={{float:'right'}}>
            <ArrowForwardIosIcon />
          </Button> */}

          <Slider {...settings}>
                

          {data.map((val, i) => (
            <DetailCard key={i} data={val} />
          ))}
        </Slider>
        
     
      </Box>
    </>
  );
};

export default Card;
