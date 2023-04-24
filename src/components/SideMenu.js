import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Logo } from "./";

const SideMenu = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsMenuOpen((state) => !state);
  };

  // function that takes the page name as input and navigates to that page with useNavigate
  const navigateToPage = (page) => {
    navigate(page);
  };

  const pages = [
    { page: "Home", link: "/", icon: <HomeIcon /> },
    { page: "Teams", link: "/teams", icon: <GroupsIcon /> },
    { page: "Profile", link: "/profile", icon: <AccountBoxIcon /> },
  ];

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
    >
      <List>
        {pages.map((text, index) => (
          <ListItem key={text.page} disablePadding>
            <ListItemButton
              component={Link}
              to={text.link}
              onClick={() => navigateToPage(text.link)}
            >
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.page} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <nav>
      <div className="logo">
        <Logo onClick={toggleDrawer("left", true)} />
      </div>
      <Drawer
        anchor={"left"}
        open={isMenuOpen}
        onClose={() => setIsMenuOpen((state) => !state)}
      >
        {list()}
      </Drawer>
    </nav>
  );
};

export default SideMenu;
