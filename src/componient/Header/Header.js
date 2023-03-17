import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

// import Button from "@mui/material/Button";
import Logo from "../../assert/images/logo.png";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";

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
      {/* <Typography>
        <img src={Logo} style={{ height: "80px", width: "150px" }} />
      </Typography> */}

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
            backgroundColor: "#38E54D ",
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

            <img src={Logo} height={"80px"} width={"150px"} />

            <Tabs
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "space-around",
                margin: "auto",
              }}
            >
              <Tab
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
                component={Link}
                to="/"
                label="Home"
              />
              <Tab
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
                component={Link}
                to="/about"
                label="About Us "
              />
              <Tab
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
                component={Link}
                to="/portfolio"
                label="Portfolio "
              />
              <Tab
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
                component={Link}
                to="/service"
                label="Service"
              />

              <Tab
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
                component={Link}
                to="/process"
                label="Process"
              />
              <Tab
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
                component={Link}
                to="/ourskill"
                label="Our-Skill"
              />
              <Tab
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
                component={Link}
                to="/contact"
                label="Contact Us"
              />
            </Tabs>

            {/* <Box sx={{ display: { xs: "none", sm: "block" }, marginX: "auto" }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    padding: "10px",
                    color: "#fff",
                    fontSize: "15px",
                    fontWeight: "bold",
                    
                  
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box> */}
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
                background: "#9CFF2E",
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
