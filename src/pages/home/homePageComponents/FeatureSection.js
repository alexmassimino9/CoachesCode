import React from "react";
import { styled } from "@mui/material/styles";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import GroupIcon from "@mui/icons-material/Group";
import ChatIcon from "@mui/icons-material/Chat";

const FeatureSectionRoot = styled("section")(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const FeatureSectionHeader = styled("h2")(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const FeatureSection = () => {
  return (
    <FeatureSectionRoot>
      <FeatureSectionHeader>Features</FeatureSectionHeader>
      <List>
        <ListItem>
          <ListItemIcon>
            <SportsSoccerIcon />
          </ListItemIcon>
          <ListItemText primary="Create teams and manage players" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Join teams and participate in events" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ChatIcon />
          </ListItemIcon>
          <ListItemText primary="Stay connected with in-app chat" />
        </ListItem>
      </List>
    </FeatureSectionRoot>
  );
};

export default FeatureSection;
