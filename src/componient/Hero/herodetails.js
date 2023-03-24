import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SearchIcon from '@mui/icons-material/Search';
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Grid } from "@mui/material";
import { Box } from "@mui/system";



export default function Herocard({ data }) {
  let Image = data.image;
  return (
    <>
      <Grid item xs={12} md={4}>
        <Card sx={{
          marginTop:'50px',
          height:'250px',
          width:'250px',
          textAlign:'center',
        }}>
 
      <img
                src={Image}
                style={{
             
                  height: "130px",
                  width: "130px",
                }}
              />
      
      <Typography
                variant="h4"
                
                sx={{
                  color: "grey",
                  fontSize: "12px",
              fontFamily:'sans-serif',
                  textAlign: "center",
                fontWeight:'bold',
                padding:'0px 10px',
                lineHeight:'18px'
                }}
              >
                {data.text}
              </Typography>
            
          

    
            <CardActionArea 
  
            >
              <Button
                variant="outlined"
                style={{
                  border: "2px solid #04c8f5",
                  borderRadius:'20px',
           textTransform:'capitalize',
           marginTop:'10px',
                  padding: "5px 30px",
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "#04c8f5",
                }}
                
              >
                <SearchIcon/>
              Ask a question
              </Button>
            
          </CardActionArea>


          
        </Card>
      </Grid>
    </>
  );
}

