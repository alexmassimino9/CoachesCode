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
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const SideMenu = () => {
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

  const listItems = [
    "Inbox",
    "Starred",
    "Send email",
    "Drafts",
    "All mail",
    "Trash",
    "Spam",
  ];

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
    >
      <List>
        {listItems.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
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
