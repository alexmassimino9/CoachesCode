import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SideMenu from "./SideMenu";
import Button from "@mui/material/Button";

export default function ButtonAppBar({ signOut }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="appBar">
        <Toolbar>
          <SideMenu />
          <Button color="inherit" variant="outlined" onClick={signOut}>
            Sign Out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
