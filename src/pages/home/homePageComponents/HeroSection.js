import React from "react";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

const HeroWrapper = styled("section")({
  backgroundColor: "#3D3C42",
  color: "#F6F1F1",
  padding: "80px 0 60px",
  textAlign: "center",
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
      </Box>
    </HeroWrapper>
  );
};

export default HeroSection;
