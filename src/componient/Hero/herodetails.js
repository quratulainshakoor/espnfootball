import React from "react";
import Card from "@mui/material/Card";

import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardMedia, Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CardContent from "@mui/material/CardContent";

import { Box } from "@mui/system";

export default function Herocard({ data }) {
  let Image = data.image;
  let Flag1 = data.flag1;
  let Flag2 = data.flag2;

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs>
          <Card
            sx={{
              marginTop: "100px",
              height: "250px",
              width: "250px",
              textAlign: "center",
            }}
          >
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
                fontFamily: "sans-serif",
                textAlign: "center",
                fontWeight: "bold",
                padding: "0px 10px",
                lineHeight: "18px",
              }}
            >
              {data.text}
            </Typography>

            <CardActionArea>
              <Button
                variant="outlined"
                style={{
                  border: "2px solid #04c8f5",
                  borderRadius: "20px",
                  textTransform: "capitalize",
                  marginTop: "10px",
                  padding: "5px 30px",
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "#04c8f5",
                }}
              >
                <SearchIcon />
                Ask a question
              </Button>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card
            sx={{
              marginTop: "100px",
              height: "680px",
              width: "560px",
            }}
          >
            <CardContent>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "13px",
                  fontWeight: "bold",
                }}
              >
                BANGLADESH VS IRELAND
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "10px",
                  color: "grey",
                }}
              >
                1ST MEN'S T20I, CHATTOGRAM
              </Typography>
              <hr />
              <br />
              <Typography
                variant="h4"
                component="div"
                sx={{
                  color: "grey",
                  fontFamily: "sans-serif",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                {data.date}
              </Typography>
            </CardContent>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  fontFamily: "sans-serif",
                  color: "grey",
                }}
              >
                <img
                  src={Flag1}
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
                  {data.name}
                </span>
                <p
                  style={{
                    marginLeft: "320px",
                    fontWeight: "bold",
                    fontSize: "15px",
                    color: "black",
                  }}
                >
                  <span
                    style={{
                      color: "grey",
                    }}
                  >
                    (4.2/20 ov)
                  </span>{" "}
                  52/0
                </p>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  fontFamily: "sans-serif",
                  color: "grey",
                }}
              >
                <img
                  src={Flag2}
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
                  {data.names}
                </span>
                <br />
              </Box>
              <Typography
                variant="h3"
                component="div"
                sx={{
                  marginTop: "10px",
                  color: "grey",
                  fontSize: "12px",
                  fontWeight: "bold",
                  // marginBottom:'10px'
                }}
              >
                {data.match}
              </Typography>
              <hr />

              <CardMedia
                sx={{
                  height: "350px",

                  borderRadius: "20px",
                  marginTop: "20px",
                }}
                component="img"
                alt="match"
                image="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/356900/356984.6.jpg"
              />

              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                {data.detail}
              </Typography>
              <br />
              <hr />

              <Box
                sx={{
                  marginTop: "20px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                }}
              >
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: "12px",
                    color: "#8CCEF8",
                    marginRight: "10px",
                  }}
                />
                <span
                  style={{
                    fontSize: "15px",

                    color: "grey",
                  }}
                >
                  Toss - Ireland bowl; Tanvir out
                </span>
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: "12px",
                    color: "#8CCEF8",
                    marginRight: "10px",
                    marginLeft: "20px",
                  }}
                />
                <span
                  style={{
                    fontSize: "15px",

                    color: "grey",
                  }}
                >
                  Toss - Ireland bowl; Tanvir out
                </span>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs>
          <Card
            sx={{
              marginTop: "100px",
              height: "250px",
              width: "280px",
              textAlign: "center",
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                sx={{
                  color: "grey",
                  fontSize: "13px",
                  fontFamily: "sans-serif",
                  textAlign: "left",
                  fontWeight: "bold",

                  margin: "10px 20px",
                }}
              >
                News Headlines
              </Typography>
              <hr />
              <Box
                sx={{
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                }}
              >
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: "15px",
                    color: "#8CCEF8",
                  }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    color: "grey",
                  }}
                >
                  Toss - Ireland bowl; Tanvir out
                </span>
                <br />
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: "15px",
                    color: "#8CCEF8",
                  }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    color: "grey",
                  }}
                >
                  ICC changes Indore pitch rating
                </span>
                <br />
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: "15px",
                    color: "#8CCEF8",
                  }}
                />
                <span
                  style={{
                    fontSize: "12px",

                    color: "grey",
                  }}
                >
                  Harmanpreet breaks knockouts jinx
                </span>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
