import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

// import Slider from "react-slick";
import Carousel from 'react-elastic-carousel'
import DetailCard from "./details";
import { data } from "./data";



const Card = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  

  return (
    <>
    
      <Box
        sx={{
         
          background: "#0569ff",
  
            width:'100% auto',
            height:'40vh'
        
        }}
      >
  <Typography sx={{

    marginLeft:'100px',
    color:'white',
    fontWeight:'bold',
    fontFamily:'sans-serif',
fontSize:'15px',

  }}>
    <span style={{

      marginRight:'30px'
    }}>
    Match(5)
    </span>

    <span
    style={{
      marginRight:'20px'
    }}>
    Ind vs Pak(1) 
    </span>
    <span style={{
      marginRight:'20px'
    }}>
 SA vs WI(1)  
    </span>
    <span style={{
      marginRight:'20px'
    }} >
 WPL (2) 
    </span>
    <span style={{
      marginRight:'20px'
    }}>
    <span style={{
      marginRight:'20px'
    }}>
    ZIM vs NL(1) 
    </span>
    </span>
  </Typography>


     

              <Carousel breakPoints={breakPoints}>
            {data.map((val, i) => (
            <DetailCard key={i} data={val} />
          ))}
              </Carousel>
         
       
      </Box>
    </>
  );
};

export default Card;
