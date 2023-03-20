import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Grid } from "@mui/material";
import { Box } from "@mui/system";



export default function DetailCard({ data }) {
  let Image = data.image;
  let Images =data.images
  return (
    <>

{/* <Box>
    <Typography>
        {navData.head}
        <span>
            {navData.num}
        </span>
    </Typography>
</Box> */}

      <Grid item xs={12} md={4}>
        <Card 
            sx={{
           width:'250px',
              padding: "10px",
              border: "3px solid #eee",
              borderRadius:'20px'
            }}>
       

            
<CardContent>
              <Typography
                variant="h3"
                component="div"
                sx={{
                  color: "#001433",
                  fontFamily:'cursive',
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                {data.date}
              </Typography>
            </CardContent>
          
            <Box>
              <img
                src={Image}
                style={{
          
                  height: "30px",
                  width: "30px",
                }}
                />
                <span style={{
                  margin:'20px',
           fontWeight:'bold',
           fontSize:'15px'

                }}>

                {data.name}
                </span>
                <br/>
                <img
                src={Images}
                style={{
              
                  height: "30px",
                  width: "30px",
                }}
              />
            </Box>

            <CardContent>
              <Typography
                variant="h3"
                component="div"
                sx={{
                  color: "#001433",
                  fontSize: "15px",
               fontWeight:'normal'
                
                }}
              >
                {data.match}
              </Typography>
            </CardContent>
 <hr/>
          <Button>
            {data.btn}

          </Button>
          
          <Button>
            {data.btn1}

          </Button>
       
          <Button>
            {data.btn2}

          </Button>
  


            
            
        </Card>
      </Grid>
    </>
  );
}
