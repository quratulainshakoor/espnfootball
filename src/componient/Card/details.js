import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import CardActions from '@mui/material/CardActions';
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";

export default function DetailCard({ data }) {
  return (
    <>
      <Grid
        container
        sx={{
          background: "#0569ff",
        }}
      >
        <Grid item xs={12} md={3}>
          <Card
            sx={{
              width: "300px",
              height: "200px",
              margin: "30px",
              border: "1px solid black",
              borderRadius: "20px",
            }}
          >
            <CardContent>
              <Typography
                variant="h3"
                component="div"
                sx={{
                  color: "grey",
                  fontFamily: "sans-serif",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                {data.date}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  fontFamily: "sans-serif",
                  color:'grey'
                }}
              >
                <img
                  src={data.images}
                  alt="flag"
                  style={{
                    height: "30px",
                    width: "30px",
                  }}
                />
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                    margin: "5px",
                   
                  }}
                >
                  {data.name}   560D
                </span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  fontFamily: "sans-serif",
                  color:'grey'
                }}
              >
                <img
                  src={data.image}
                  alt="flag"
                  style={{
                    height: "30px",
                    width: "30px",
                  }}
                />
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                    margin: "5px",
                  }}
                >
                  {data.names}     et0D
                </span>
                <br/>
              </Box>
              <Typography
                variant="h3"
                component="div"
                sx={{
                  marginTop:'20px',
                  color: "grey",
                  fontSize: "12px",
                  fontWeight: "bold",
                  marginBottom:'10px'
                }}
              >
                {data.match}
              </Typography>
              <hr />
        
          
                
              <CardActions>


              <Button
                  sx={{
                    fontSize:'10px',
                    color: "#2B2C2D",
                    fontWeight: "bold",
                    
                  }}
                >
                  {data.btn}
                </Button>

                <Button
                  sx={{
                    fontSize:'10px',
                    color: "#2B2C2D",
                    fontWeight: "bold",
                   
                  }}
                >
                  {data.btn1}
                </Button>

                <Button
                  sx={{
                    fontSize:'10px',
                    color: "#2B2C2D",
                    fontWeight: "bold",
                    
                  }}
                >
                  {data.btn2}
                </Button>
                <Button
                  sx={{
                    fontSize:'10px',
                    color: "#2B2C2D",
                    fontWeight: "bold",
                 
                  }}
                >
                  {data.btn3}
                </Button>
              
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}