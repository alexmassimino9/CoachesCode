import React from "react";
import { AppBar, Box, Toolbar, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { SideMenu } from "./";
import { styled } from "@mui/material/styles";

const ModernAppBar = styled(AppBar)(({ theme }) => ({
  color: "#fff",
  boxShadow: "none",
  fontFamily: "Roboto",
  backgroundColor: "#1E3559",
}));

const ModernIconButton = styled(IconButton)(({ theme }) => ({
  color: "#fff",
}));

const ButtonAppBar = ({ signOut }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ModernAppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <SideMenu />
          <Box sx={{ display: "flex" }}>
            <ModernIconButton onClick={signOut} aria-label="sign out">
              <LogoutIcon />
            </ModernIconButton>
          </Box>
        </Toolbar>
      </ModernAppBar>
    </Box>
  );
};

export default ButtonAppBar;
