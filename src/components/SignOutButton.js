import React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
const SignOutButton = ({ signOut }) => {
  return (
    <Button
      variant="contained"
      size="large"
      onClick={signOut}
      sx={{
        backgroundColor: "var(--color-white)",
        color: "var(--color-black)",
        "&:hover": {
          backgroundColor: "var(--color-primary)",
          color: "var(--color-white)",
        },
      }}
    >
      <Typography>Sign out</Typography>
      <ExitToAppIcon sx={{ fontSize: 30 }} />
    </Button>
  );
};

export default SignOutButton;
