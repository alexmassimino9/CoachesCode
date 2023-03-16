import React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const Logo = ({ onClick }) => {
  const styles = {
    flexGrow: 1,
    color: "white",
    textDecoration: "none",
    fontSize: "1.5rem",
    padding: "0.5rem",
    borderRadius: "0.5rem",
  };
  return (
    <Button onClick={onClick} sx={styles}>
      <Typography variant="h6" component="div" sx={styles}>
        Coaches Code
      </Typography>
    </Button>
  );
};

export default Logo;
