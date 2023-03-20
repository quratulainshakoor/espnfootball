import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import TuneIcon from '@mui/icons-material/Tune';
// import Button from "@mui/material/Button";
import Logo from "../../assert/images/logo.png";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';


const navItems = [
  { label: "Live Score", to: "/" },
  { label: "Series", to: "/series" },
  { label: "Team", to: "/team" },
  { label: "News", to: "/news" },
  { label: "Video", to: "/video" },
  { label: "Stats", to: "/stats" },
  { label: "Feature", to: "/feature" },
];

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        color: "white",
        width: "50vw",
      }}
    >
      
        <img src={Logo} style={{ height: "30px", width: "100px" }} />


      <List>
        {navItems.map((item, index) => (
          <Link key={index} to={item.to} style={{ textDecoration: "none" }}>
            <ListItem>
              <ListItemText
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "25px",

                  "&:hover": {
                    backgroundColor: "#2192FF ",
                  },
                }}
                primary={item.label}
              />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar
          sx={{
            backgroundColor: "#04c8f5 ",
            fontFamily: "monospace",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <img src={Logo} height={"30px"} width={"100px"} />

            <Tabs
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                // margin: "auto",
                marginLeft:'20px'
              }}
            >
              <Tab
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "13px",

                  "&:hover": {
                    backgroundColor: "#2192FF ",
                    padding:'20px'
                  },
                }}
                component={Link}
                to="/"
                label="Live Score"
              />
              <Tab
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "13px",
                  
                  "&:hover": {
                    backgroundColor: "#2192FF ",
                    padding:'20px'
                  },
                }}
                component={Link}
                to="/series"
                label="Series "
              />
              <Tab
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "13px",
                  "&:hover": {
                    backgroundColor: "#2192FF ",
                    padding:'20px'
                  },
                }}
                component={Link}
                to="/team"
                label="Team "
              />
              <Tab
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "13px",
                  "&:hover": {
                    backgroundColor: "#2192FF ",
                    padding:'20px'
                  },
                }}
                component={Link}
                to="/news"
                label="News"
              />

              <Tab
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "13px",
                    "&:hover": {
                    backgroundColor: "#2192FF ",
                    padding:'20px'
                  },
                }}
                component={Link}
                to="/feature"
                label="Features"
              />
              <Tab
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "13px",
                  "&:hover": {
                    backgroundColor: "#2192FF ",
                    padding:'20px'
                  },
                }}
                component={Link}
                to="/video"
                label="Video"
              />
              <Tab
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "13px",
                  "&:hover": {
                    backgroundColor: "#2192FF ",
                    padding:'20px'
                  },
                }}
                component={Link}
                to="/stats"
                label="Stats"
              />

<Tab
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "13px",
                  marginLeft:'200px',
                  "&:hover": {
                    backgroundColor: "#2192FF ",
                    padding:'20px'
                  },
                }}
                component={Link}
                to="/edition"
                label="Edition Pk"
              />
  <div style={{
   fontSize:'10px',
   marginLeft:'30px',
   display:'flex',
 marginTop:'10px',
gap:'10px',
    "&:hover": {
                    backgroundColor: "#2192FF ",
                    padding:'20px'
                  },


  }} >

    <WbSunnyIcon />
<NotificationsIcon/>
            <TuneIcon/>
            <SearchIcon/>
  </div>
            </Tabs>

          
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                minHeight: "100vh",
                height: "auto",
                backgroundColor:'#04c8f5'

              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
};

export default Header;
