import React, { useState } from "react";
import Card from "@mui/material/Card";

import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardMedia, Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CardContent from "@mui/material/CardContent";
import Popper from "@mui/material/Popper";
import { Box } from "@mui/system";

export default function Herocard({ data }) {
  let Image = data.image;
  let Flag1 = data.flag1;
  let Flag2 = data.flag2;
  let Box1 = data.box1;
  let Box2 = data.box2;
  let Box3 = data.box3;
  let Box4 = data.box4;
  let Box5 = data.box5;
  let Box6 = data.box6;
  let Box7 = data.box7;
  let Box8 = data.box8;
  let Box9 = data.box9;

  let Box10 = data.box10;

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  return (
    <>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box
          sx={{
            backgroundColor: "white",
            padding: "2px 20px",
            border: "2px solid #04c8f5",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            color: "grey",
          }}
        >
          Coming Soon
        </Box>
      </Popper>
      <Grid container spacing={2}>
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
          <Grid item xs>
            <Card
              sx={{
                marginTop: "20px",
                height: "350px",
                width: "250px",
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
                  Key Series
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
                      marginRight: "20px",
                      marginTop: "10px",
                    }}
                  />
                  <span
                    onClick={handleClick}
                    style={{
                      fontSize: "14px",
                      color: "grey",
                    }}
                  >
                    Afghanistan v Pakistan
                  </span>
                  <br />

                  <ArrowForwardIosIcon
                    sx={{
                      fontSize: "15px",
                      color: "#8CCEF8",
                      marginRight: "10px",
                      marginTop: "10px",
                    }}
                  />
                  <span
                     onClick={handleClick}
                    style={{
                      fontSize: "14px",
                      color: "grey",
                      marginRight: "20px",
                    }}
                  >
                    Western South v India
                  </span>
                  <br />
                  <ArrowForwardIosIcon
                    sx={{
                      fontSize: "15px",
                      color: "#8CCEF8",
                      marginRight: "20px",
                      marginTop: "10px",
                    }}
                  />
                  <span
                     onClick={handleClick}
                    style={{
                      fontSize: "14px",
                      color: "grey",
                      marginRight: "50px",
                    }}
                  >
                    Australia v India
                  </span>
                  <br />
                  <ArrowForwardIosIcon
                    sx={{
                      fontSize: "15px",
                      color: "#8CCEF8",
                      marginRight: "20px",
                      marginTop: "10px",
                    }}
                  />
                  <span
                     onClick={handleClick}
                    style={{
                      fontSize: "14px",
                      color: "grey",
                      marginRight: "5px",
                    }}
                  >
                    New Zealand v Srilanka
                  </span>
                  <br />
                  <ArrowForwardIosIcon
                    sx={{
                      fontSize: "15px",
                      color: "#8CCEF8",
                      marginRight: "20px",
                      marginTop: "10px",
                    }}
                  />
                  <span
                     onClick={handleClick}
                    style={{
                      fontSize: "14px",
                      color: "grey",
                      marginRight: "25px",
                    }}
                  >
                    Bangladesh v Ireland
                  </span>
                  <br />
                  <ArrowForwardIosIcon
                    sx={{
                      fontSize: "15px",
                      color: "#8CCEF8",
                      marginRight: "10px",
                      marginTop: "10px",
                    }}
                  />
                  <span
                     onClick={handleClick}
                    style={{
                      fontSize: "14px",
                      color: "grey",
                      marginRight: "5px",
                    }}
                  >
                    Women's Championship
                  </span>
                  <br />
                  <ArrowForwardIosIcon
                    sx={{
                      fontSize: "15px",
                      color: "#8CCEF8",
                      marginRight: "10px",
                      marginTop: "10px",
                    }}
                  />
                  <span
                     onClick={handleClick}
                    style={{
                      fontSize: "14px",
                      color: "grey",
                    }}
                  >
                    World Test Championship
                  </span>
                  <br />
                  <ArrowForwardIosIcon
                    sx={{
                      fontSize: "15px",
                      color: "#8CCEF8",
                      marginRight: "10px",
                      marginTop: "10px",
                    }}
                  />
                  <span
                     onClick={handleClick}
                    style={{
                      fontSize: "14px",
                      color: "grey",
                    }}
                  >
                    World Cup Super League
                  </span>
                  <br />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs>
            <Card
              sx={{
                marginTop: "20px",
                height: "200px",
                width: "250px",
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
                  ESPNcricinfo Apps
                </Typography>
                <hr />
                <Box
                  sx={{
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  <ArrowForwardIosIcon
                    sx={{
                      fontSize: "15px",
                      color: "#8CCEF8",
                      marginRight: "10px",
                      marginTop: "10px",
                    }}
                  />
                  <span
                     onClick={handleClick}
                    style={{
                      fontSize: "14px",
                      color: "grey",
                    }}
                  >
                    T20 Time Out
                  </span>
                  <br />
                  <ArrowForwardIosIcon
                    sx={{
                      fontSize: "15px",
                      color: "#8CCEF8",
                      marginRight: "10px",
                      marginTop: "10px",
                    }}
                  />
                  <span
                     onClick={handleClick}
                    style={{
                      fontSize: "14px",
                      color: "grey",
                      marginRight: "5px",
                    }}
                  >
                    T20 Timeout
                  </span>
                  <br />
                  <ArrowForwardIosIcon
                    sx={{
                      fontSize: "15px",
                      color: "#8CCEF8",
                      marginRight: "10px",
                      marginTop: "10px",
                    }}
                  />
                  <span
                     onClick={handleClick}
                    style={{
                      fontSize: "14px",
                      color: "grey",
                    }}
                  >
                    Fantasy Pick
                  </span>
                  <br />
                  <ArrowForwardIosIcon
                    sx={{
                      fontSize: "15px",
                      color: "#8CCEF8",
                      marginRight: "10px",
                      marginTop: "10px",
                    }}
                  />
                  <span
                     onClick={handleClick}
                    style={{
                      fontSize: "14px",
                      color: "grey",
                    }}
                  >
                    ICC Ranking
                  </span>
                  <br />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs>
            <Card
              sx={{
                marginTop: "20px",
                height: "150px",
                width: "250px",
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
                  Quick Links
                </Typography>
                <hr />
                <Box
                  sx={{
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  <ArrowForwardIosIcon
                    sx={{
                      fontSize: "15px",
                      color: "#8CCEF8",
                      marginRight: "10px",
                      marginTop: "10px",
                    }}
                  />
                  <span
                     onClick={handleClick}
                    style={{
                      fontSize: "14px",
                      color: "grey",
                    }}
                  >
                    Andriod App
                  </span>
                  <br />
                  <ArrowForwardIosIcon
                    sx={{
                      fontSize: "15px",
                      color: "#8CCEF8",
                      marginRight: "10px",
                      marginTop: "10px",
                    }}
                  />
                  <span
                     onClick={handleClick}
                    style={{
                      fontSize: "14px",
                      color: "grey",
                      marginRight: "5px",
                    }}
                  >
                    IOS App
                  </span>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs>
            <Card
              sx={{
                marginTop: "20px",
                height: "200px",
                width: "250px",
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
                  Follow ESPNcricinfo
                </Typography>
                <hr />
                <Box
                  sx={{
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  <ArrowForwardIosIcon
                    sx={{
                      fontSize: "15px",
                      color: "#8CCEF8",
                      marginRight: "10px",
                      marginTop: "10px",
                    }}
                  />
                  <span
                     onClick={handleClick}
                    style={{
                      fontSize: "14px",
                      color: "grey",
                    }}
                  >
                    Instagram
                  </span>
                  <br />
                  <ArrowForwardIosIcon
                    sx={{
                      fontSize: "15px",
                      color: "#8CCEF8",
                      marginRight: "10px",
                      marginTop: "10px",
                    }}
                  />
                  <span
                     onClick={handleClick}
                    style={{
                      fontSize: "14px",
                      color: "grey",
                      marginRight: "5px",
                    }}
                  >
                    Twitter
                  </span>
                  <br />
                  <ArrowForwardIosIcon
                    sx={{
                      fontSize: "15px",
                      color: "#8CCEF8",
                      marginRight: "10px",
                      marginTop: "10px",
                    }}
                  />
                  <span
                     onClick={handleClick}
                    style={{
                      fontSize: "14px",
                      color: "grey",
                    }}
                  >
                    Facebook
                  </span>
                  <br />
                  <ArrowForwardIosIcon
                    sx={{
                      fontSize: "15px",
                      color: "#8CCEF8",
                      marginRight: "10px",
                      marginTop: "10px",
                    }}
                  />
                  <span
                     onClick={handleClick}
                    style={{
                      fontSize: "14px",
                      color: "grey",
                    }}
                  >
                    Youtube
                  </span>
                  <br />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs>
            <Card
              sx={{
                marginTop: "20px",
                height: "150px",
                width: "250px",
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
                  ESPN Sites
                </Typography>
                <hr />
                <Box
                  sx={{
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  <ArrowForwardIosIcon
                    sx={{
                      fontSize: "15px",
                      color: "#8CCEF8",
                      marginRight: "10px",
                      marginTop: "10px",
                    }}
                  />
                  <span
                     onClick={handleClick}
                    style={{
                      fontSize: "14px",
                      color: "grey",
                    }}
                  >
                    The Cricket Monthly
                  </span>
                  <br />
                  <ArrowForwardIosIcon
                    sx={{
                      fontSize: "15px",
                      color: "#8CCEF8",
                      marginRight: "10px",
                      marginTop: "10px",
                    }}
                  />
                  <span
                     onClick={handleClick}
                    style={{
                      fontSize: "14px",
                      color: "grey",
                      marginRight: "5px",
                    }}
                  >
                    ESPN
                  </span>
                </Box>
              </CardContent>
            </Card>
          </Grid>
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

          <Grid item xs={6}>
            <Card
              sx={{
                marginTop: "30px",
                height: "530px",
                width: "560px",
              }}
            >
              <CardContent>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{
                    marginTop: "10px",
                    color: "black",
                    fontSize: "20px",

                    // marginBottom:'10px'
                  }}
                >
                  NZ IN Pakistan
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
                  image="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/357100/357165.6.jpg"
                />

                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    fontSize: " 18px",
                    textAlign: "center",
                    marginTop: "20px",
                  }}
                >
                  {data.details}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "sans-serif",
                    color: "grey",
                    fontSize: "15px",
                    margin: "10px",
                  }}
                >
                  He has suffered a ruptured anterior cruciate ligament and will
                  undergo surgery in around three weeks
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card
              sx={{
                marginTop: "30px",
                height: "530px",
                width: "560px",
              }}
            >
              <CardContent>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{
                    marginTop: "10px",
                    color: "black",
                    fontSize: "20px",

                    // marginBottom:'10px'
                  }}
                >
                  Ireland Match
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
                  image="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/357500/357565.6.jpg"
                />

                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    fontSize: " 18px",
                    textAlign: "center",
                    marginTop: "20px",
                  }}
                >
                  {data.details}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "sans-serif",
                    color: "grey",
                    fontSize: "15px",
                    margin: "10px",
                  }}
                >
                  He has suffered a ruptured anterior cruciate ligament and will
                  undergo surgery in around three weeks
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid item xs>
          <Card
            sx={{
              marginTop: "100px",
              height: "250px",
              width: "300px",
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
                    marginRight: "20px",
                    marginTop: "10px",
                  }}
                />
                <span
                   onClick={handleClick}
                  style={{
                    fontSize: "14px",
                    color: "grey",
                  }}
                >
                  Harmanpreet breaks knockouts
                </span>
                <br />
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: "15px",
                    color: "#8CCEF8",
                    marginRight: "20px",
                    marginTop: "10px",
                  }}
                />
                <span
                   onClick={handleClick}
                  style={{
                    fontSize: "14px",
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
                    marginRight: "20px",
                    marginTop: "10px",
                  }}
                />
                <span
                   onClick={handleClick}
                  style={{
                    fontSize: "14px",
                    color: "grey",
                  }}
                >
                  Buzz: The Dhoni effect the free
                </span>
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: "15px",
                    color: "#8CCEF8",
                    marginRight: "20px",
                    marginTop: "10px",
                  }}
                />
                <span
                   onClick={handleClick}
                  style={{
                    fontSize: "14px",
                    color: "grey",
                  }}
                >
                  Harmanpreet breaks knockouts
                </span>
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: "15px",
                    color: "#8CCEF8",
                    marginRight: "20px",
                    marginTop: "10px",
                  }}
                />
                <span
                   onClick={handleClick}
                  style={{
                    fontSize: "14px",
                    color: "grey",
                  }}
                >
                  Buzz: The Dhoni effect the free
                </span>
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: "15px",
                    color: "#8CCEF8",
                    marginRight: "20px",
                    marginTop: "10px",
                  }}
                />
                <span
                   onClick={handleClick}
                  style={{
                    fontSize: "14px",
                    color: "grey",
                  }}
                >
                  Garth in Australia Ashes squad
                </span>
              </Box>
            </CardContent>
          </Card>
          <Grid item xs>
            <Card
              sx={{
                marginTop: "20px",
                height: "100%",
                width: "300px",
                textAlign: "center",
              }}
            >
              <img
                src={Box1}
                style={{
                  margin: " 20px",
                  borderRadius: "15px",
                  height: "150px",
                  width: "260px",
                }}
              />

              <Typography
                variant="h4"
                sx={{
                  color: "grey",
                  fontSize: "15px",
                  fontFamily: "sans-serif",
                  textAlign: "left",
                  fontWeight: "bold",
                  padding: "0px 20px ",
                  marginBottom: "10px",
                }}
              >
                Records index: most runs, most wickets, and a lot more{" "}
              </Typography>
              <hr />

              <img
                src={Box2}
                style={{
                  margin: " 20px",
                  borderRadius: "15px",
                  height: "150px",
                  width: "260px",
                }}
              />

              <Typography
                variant="h4"
                sx={{
                  color: "grey",
                  fontSize: "15px",
                  fontFamily: "sans-serif",
                  textAlign: "left",
                  fontWeight: "bold",
                  padding: "0px 20px ",
                  marginBottom: "10px",
                }}
              >
                On This Day: Lara's 153 not out
              </Typography>
              <hr />
              <img
                src={Box3}
                style={{
                  margin: " 20px",
                  borderRadius: "15px",
                  height: "150px",
                  width: "260px",
                }}
              />

              <Typography
                variant="h4"
                sx={{
                  color: "grey",
                  fontSize: "15px",
                  fontFamily: "sans-serif",
                  textAlign: "left",
                  fontWeight: "bold",
                  padding: "0px 20px ",
                  marginBottom: "10px",
                }}
              >
                Records index: most runs, most wickets, and a lot more
              </Typography>
              <hr />
              <img
                src={Box4}
                style={{
                  margin: " 20px",
                  borderRadius: "15px",
                  height: "150px",
                  width: "260px",
                }}
              />

              <Typography
                variant="h4"
                sx={{
                  color: "grey",
                  fontSize: "15px",
                  fontFamily: "sans-serif",
                  textAlign: "left",
                  fontWeight: "bold",
                  padding: "0px 20px ",
                  marginBottom: "10px",
                }}
              >
                My Favourite Cricket Photograph: Warne gets KP{" "}
              </Typography>
              <hr />
              <img
                src={Box5}
                style={{
                  margin: " 20px",
                  borderRadius: "15px",
                  height: "150px",
                  width: "260px",
                }}
              />

              <Typography
                variant="h4"
                sx={{
                  color: "grey",
                  fontSize: "15px",
                  fontFamily: "sans-serif",
                  textAlign: "left",
                  fontWeight: "bold",
                  padding: "0px 20px ",
                  marginBottom: "10px",
                }}
              >
                Shane Watson on developing mental skills for T20
              </Typography>
              <hr />
              <img
                src={Box6}
                style={{
                  margin: " 20px",
                  borderRadius: "15px",
                  height: "150px",
                  width: "260px",
                }}
              />

              <Typography
                variant="h4"
                sx={{
                  color: "grey",
                  fontSize: "15px",
                  fontFamily: "sans-serif",
                  textAlign: "left",
                  fontWeight: "bold",
                  padding: "0px 20px ",
                  marginBottom: "10px",
                }}
              >
                On This Day: Lara's 153 not out
              </Typography>
              <hr />
              <img
                src={Box7}
                style={{
                  margin: " 20px",
                  borderRadius: "15px",
                  height: "150px",
                  width: "260px",
                }}
              />

              <Typography
                variant="h4"
                sx={{
                  color: "grey",
                  fontSize: "15px",
                  fontFamily: "sans-serif",
                  textAlign: "left",
                  fontWeight: "bold",
                  padding: "0px 20px ",
                  marginBottom: "10px",
                }}
              >
                On This Day: Lara's 153 not out
              </Typography>
              <hr />
              <img
                src={Box8}
                style={{
                  margin: " 20px",
                  borderRadius: "15px",
                  height: "150px",
                  width: "260px",
                }}
              />

              <Typography
                variant="h4"
                sx={{
                  color: "grey",
                  fontSize: "15px",
                  fontFamily: "sans-serif",
                  textAlign: "left",
                  fontWeight: "bold",
                  padding: "0px 20px ",
                  marginBottom: "10px",
                }}
              >
                On This Day: Lara's 153 not out
              </Typography>
              <hr />
              <img
                src={Box9}
                style={{
                  margin: " 20px",
                  borderRadius: "15px",
                  height: "150px",
                  width: "260px",
                }}
              />

              <Typography
                variant="h4"
                sx={{
                  color: "grey",
                  fontSize: "15px",
                  fontFamily: "sans-serif",
                  textAlign: "left",
                  fontWeight: "bold",
                  padding: "0px 20px ",
                  marginBottom: "10px",
                }}
              >
                On This Day: Lara's 153 not out
              </Typography>
              <hr />
              <img
                src={Box10}
                style={{
                  margin: " 20px",
                  borderRadius: "15px",
                  height: "150px",
                  width: "260px",
                }}
              />

              <Typography
                variant="h4"
                sx={{
                  color: "grey",
                  fontSize: "15px",
                  fontFamily: "sans-serif",
                  textAlign: "left",
                  fontWeight: "bold",
                  padding: "0px 20px ",
                  marginBottom: "10px",
                }}
              >
                Photo feature: Jimmy Anderson's career in pictures
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
