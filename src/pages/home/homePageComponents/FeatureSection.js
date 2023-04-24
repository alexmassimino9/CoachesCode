import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FEATURES } from "../../../constants/arrays";

const FeatureSectionRoot = styled("section")(({ theme }) => ({
  backgroundColor: "#f6f7f9",
  padding: theme.spacing(6),
}));

const FeatureItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
  color: "#333",
  borderRadius: "10px",
  padding: theme.spacing(3),
  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease-in-out",
  margin: theme.spacing(2),
  minWidth: "200px",
  minHeight: "325px",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(5),
    margin: `${theme.spacing(2)} ${theme.spacing(3)}`,
  },
}));

const FeatureIcon = styled(Box)(({ theme }) => ({
  backgroundColor: "#f6f7f9",
  color: "var(--color-secondary)",
  borderRadius: "50%",
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const FeatureSection = () => {
  return (
    <FeatureSectionRoot>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ color: "#2C3333" }}
      >
        Features
      </Typography>
      <Carousel responsive={responsive}>
        {FEATURES.map((feature, index) => (
          <FeatureItem key={index}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <Typography variant="h6" align="center" gutterBottom>
              {feature.title}
            </Typography>
            <Typography variant="body1" align="center">
              {feature.description}
            </Typography>
          </FeatureItem>
        ))}
      </Carousel>
    </FeatureSectionRoot>
  );
};

export default FeatureSection;
