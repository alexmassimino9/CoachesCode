import React from "react";
import { styled } from "@mui/material/styles";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import GroupIcon from "@mui/icons-material/Group";
import ChatIcon from "@mui/icons-material/Chat";

const FeatureSectionRoot = styled("section")(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const FeatureSectionHeader = styled("h1")(({ theme }) => ({
  marginBottom: theme.spacing(2),
  textAlign: "center",
}));

const FeatureItem = styled(ListItem)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: `2px solid var(--color-secondary)`,
  borderRadius: "20px",
  padding: theme.spacing(2),
  margin: theme.spacing(2),
}));

const FeatureSection = () => {
  return (
    <FeatureSectionRoot>
      <FeatureSectionHeader>Features</FeatureSectionHeader>
      <List sx={{ display: "flex", justifyContent: "center" }}>
        <FeatureItem>
          <ListItemIcon sx={{ fontSize: "3rem" }}>
            <SportsSoccerIcon />
          </ListItemIcon>
          <ListItemText primary="Create teams and manage players" />
        </FeatureItem>
        <FeatureItem>
          <ListItemIcon sx={{ fontSize: "3rem" }}>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Join teams and participate in events" />
        </FeatureItem>
        <FeatureItem>
          <ListItemIcon sx={{ fontSize: "3rem" }}>
            <ChatIcon />
          </ListItemIcon>
          <ListItemText primary="Stay connected with in-app chat" />
        </FeatureItem>
      </List>
    </FeatureSectionRoot>
  );
};

export default FeatureSection;
