

import React,{useState} from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import Grid from "@mui/material/Grid";


import { Container } from "@mui/system";
import DetailCard from "./details";
import { data } from "./data";
import { navData } from "./headerdata";

const Card = () => {


  return (
    <>
      <Box>

        
        <Typography
          variant="h6"
          style={{
      
            marginTop: "150px",
            marginBottom: "50px",
            color: "#001433",
            fontWeight: "bold",
     
          }}
        >
 
    
        </Typography> 
        <Container>
          <Grid container spacing={2}>
            {data.map((val, i) => (
              <DetailCard key={i} data={val}  />
            ))}
          </Grid>
        </Container>
      
      </Box>
    </>
  )
}

export default Card
