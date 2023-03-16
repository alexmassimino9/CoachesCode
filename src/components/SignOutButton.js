import React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
const SignOutButton = ({ signOut }) => {
  const styles = {
    backgroundColor: "var(--color-primary)",
    height: "3rem",
    width: "8rem",
    fontSize: "1.5em",
  };
  return (
    <Button variant="contained" size="large" onClick={signOut} sx={styles}>
      <Typography sx={styles.text}>Sign Out</Typography>
    </Button>
  );
};

export default SignOutButton;
