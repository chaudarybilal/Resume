import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Menu,
  MenuItem,
  Box,
  Typography,
} from "@mui/material";
import {

  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { ThemeContext } from "./ThemeContext";

import Contact from "./components/Contact";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = () => {
    toggleTheme();
  };

  return (
    <AppBar
      position="static"
      color={theme === "light" ? "secondary" : "primary"}
    >
      <Toolbar>
        <Container sx={{ display: "flex", alignItems: "center", width: "20%" }}>
          <IconButton
            component={NavLink}
            exact
            to="/"
            color="inherit"
            edge="start"
          >
            <div
              style={{
                zIndex: "3",
                color: " #fff",
                fontWeight: "700",
                backgroundColor: "#94B8C5",
                borderRadius: "50%",
                padding: "5px",
                fontSize: "1.5rem",
                backgroundImage: 'linear-gradient(-45deg,rgba(255,255,220,.2),transparent)',

                width: " 45px",
                height: " 45px",
                boxShadow:
                  "0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2)",
              }}
            >
              .
            </div>
          </IconButton>
        </Container>

        <Container
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            "@media (max-width: 599.95px)": {
              display: "none",
            },
            "@media (min-width: 600px)": {
              display: "flex",
              justifyContent: "space-evenly",
              width: "70%",
            },
          }}
        >
          <IconButton component={NavLink} to="/project" color="inherit">
            <Typography variant="h6">Project</Typography>
          </IconButton>
          <IconButton component={NavLink} to="/blog" color="inherit">
            <Typography variant="h6">Blog</Typography>
          </IconButton>
          <IconButton component={NavLink} to="/about" color="inherit">
            <Typography variant="h6">About</Typography>
          </IconButton>
        </Container>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            style: {
              maxHeight: 400,
              width: "100%",
              maxWidth: 360,
            },
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <MenuItem component={NavLink} to="/about" onClick={handleMenuClose}>
            About
          </MenuItem>
          <MenuItem component={NavLink} to="/blog" onClick={handleMenuClose}>
            Blog
          </MenuItem>
          <MenuItem component={NavLink} to="/project" onClick={handleMenuClose}>
            Project
          </MenuItem>
        </Menu>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton component={NavLink} to="/contact" color="inherit">
          <Contact />
        </IconButton>
        <IconButton onClick={handleThemeChange} color="inherit">
          {theme === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
        <IconButton
          onClick={handleMenuClick}
          color="inherit"
          sx={{ display: { xs: "flex", sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
