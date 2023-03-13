import React, { useState } from "react";
import "@aws-amplify/ui-react/styles.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
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
    { page: "Contact", link: "/contact", icon: <AlternateEmailIcon /> },
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
    <div>
      <>
        <Button onClick={toggleDrawer("left", true)} variant="contained">
          Coaches Code
        </Button>
        <Drawer
          anchor={"left"}
          open={isMenuOpen}
          onClose={() => setIsMenuOpen((state) => !state)}
        >
          {list()}
        </Drawer>
      </>
    </div>
  );
};

export default SideMenu;
