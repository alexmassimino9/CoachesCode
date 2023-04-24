import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/system";

const HeroWrapper = styled("section")({
  backgroundColor: "#5D5FEF",
  color: "#FFFFFF",
  padding: "80px 0 60px",
  textAlign: "center",
});

const SignUpButton = styled(Button)({
  backgroundColor: "#FFFFFF",
  color: "#5D5FEF",
  borderRadius: "30px",
  padding: "10px 30px",
  margin: "10px",
  "&:hover": {
    backgroundColor: "#FFFFFF",
  },
});

const LoginButton = styled(Button)({
  backgroundColor: "#FFFFFF",
  color: "#5D5FEF",
  borderRadius: "30px",
  padding: "10px 30px",
  margin: "10px",
  "&:hover": {
    backgroundColor: "#FFFFFF",
  },
});

const HeroSection = () => {
  return (
    <HeroWrapper>
      <Typography variant="h1" component="h1" gutterBottom>
        Welcome to Coach's Code!
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          The team management app for coaches and players.
        </Typography>
        <SignUpButton variant="contained">Sign Up Now</SignUpButton>
        <LoginButton variant="contained">Login</LoginButton>
      </Box>
    </HeroWrapper>
  );
};

export default HeroSection;
