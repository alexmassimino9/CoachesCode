import React from "react";
import { Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <section className="hero">
      <Typography variant="h1" component="h1" gutterBottom>
        Welcome to Coach's Code!
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        The team management app for coaches and players.
      </Typography>
    </section>
  );
};

export default HeroSection;
