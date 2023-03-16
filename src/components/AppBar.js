import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { SideMenu, SignOutButton } from "./";
import { withAuthenticator } from "@aws-amplify/ui-react";

const ButtonAppBar = ({ signOut }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="appBar">
        <Toolbar>
          <SideMenu />
          <SignOutButton signOut={signOut} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default withAuthenticator(ButtonAppBar);
