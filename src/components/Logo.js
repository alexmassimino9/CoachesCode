import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ReactComponent as CoachesCodeLogo } from "../logo.svg";

const Logo = ({ onClick }) => {
  const styles = {
    flexGrow: 1,
    padding: "0.5rem",
    borderRadius: "0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
  };

  const hoverStyles = {
    ":hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  };

  return (
    <Button onClick={onClick} sx={{ ...styles, ...hoverStyles }}>
      <Box sx={{ width: "2.5rem", height: "2.5rem" }}>
        <CoachesCodeLogo />
      </Box>
      <Box sx={{ fontSize: "1.5rem", color: "white" }}>Coaches Code</Box>
    </Button>
  );
};

export default Logo;
