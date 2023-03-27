import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SearchIcon from '@mui/icons-material/Search';
import Typography from "@mui/material/Typography";
import { Accordion, Button, CardActionArea, Grid } from "@mui/material";
import { Box } from "@mui/system";

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
//import MuiAccordionDetails from '@mui/material/AccordionDetails';


// const Accordion = styled((props) => (
//   <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
//   '&:not(:last-child)': {
//     borderBottom: 0,
//   },
//   '&:before': {
//     display: 'none',
//   },
// }));

// const AccordionSummary = styled((props) => (
//   <MuiAccordionSummary
//     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '12px' }} />}
//     {...props}
//   />
// ))(({ theme }) => ({
//   backgroundColor:'white',
  
//   flexDirection: 'row-reverse',
//   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
//     transform: 'rotate(90deg)',
//   },
//   '& .MuiAccordionSummary-content': {
//     marginLeft: theme.spacing(1),
//   },
// }));

export default function Herocard({ data }) {
  let Image = data.image;
 const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Grid container>
        <Grid item >
        <Card sx={{
          marginTop:'100px',
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
      
        <Grid item>
        <Card sx={{
          marginTop:'100px',
          height:'250px',
          width:'250px',
          textAlign:'center',
        }}>
 
    
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
                Headline
              </Typography>
            
          

    
            <CardActionArea 
  
            >
             
             <Accordion>
        <AccordionSummary>
          <ArrowForwardIosSharpIcon/>
          <Typography>WPL opens a whole new world in India</Typography>
        </AccordionSummary>
    
      </Accordion>
      {/* <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Bairstow ruled out of IPL 2023</Typography>
        </AccordionSummary>
    
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>WA on cusp of back-to-back Shield titles</Typography>
        </AccordionSummary>
    
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>NZ dismantle SL for 76 to go 1-0 up</Typography>
        </AccordionSummary>
    
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Cross shocked on being signed by NSC</Typography>
        </AccordionSummary>
    
      </Accordion> */}

          </CardActionArea>


         

          
        </Card>
        </Grid>
      </Grid>


    </>
  );
}

