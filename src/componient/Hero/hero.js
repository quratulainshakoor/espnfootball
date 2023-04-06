
import React ,{useState} from "react";
import { Box } from "@mui/material";

import Grid from "@mui/material/Grid";


import { Container } from "@mui/system";

import { data } from "./datahero";
import Herocard from "./herodetails";





const Hero = () => {

  return (
    <>
 <Box>
  
        <Container>
          <Grid container spacing={2}>
            
            {data.map((val, i) => (
              <Herocard key={i} data={val}  />
            ))}
            
            
           

          </Grid>
        </Container>
       
      </Box>
    </>
  )
}

export default Hero