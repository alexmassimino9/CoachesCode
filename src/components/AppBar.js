import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { SideMenu, SignOutButton } from "./";
import { withAuthenticator } from "@aws-amplify/ui-react";

const ButtonAppBar = ({ signOut }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "var(--color-secondary)" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <SideMenu />
          <SignOutButton signOut={signOut} sx={{ marginLeft: "auto" }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default withAuthenticator(ButtonAppBar);
