import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import GroupIcon from "@mui/icons-material/Group";
import ChatIcon from "@mui/icons-material/Chat";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
  const features = [
    {
      icon: <SportsSoccerIcon fontSize="large" />,
      title: "Create teams and manage players",
      description:
        "With Coach's Code, you can easily create and manage teams. Add players, set up practices, and track stats all in one place.",
    },
    {
      icon: <GroupIcon fontSize="large" />,
      title: "Join teams and participate in events",
      description:
        "Join teams and participate in events. Get notifications for upcoming games, practices, and more.",
    },
    {
      icon: <ChatIcon fontSize="large" />,
      title: "Stay connected with in-app chat",
      description:
        "With our in-app chat feature, you can communicate with your team members directly from the app. Send messages, photos, and more.",
    },
    {
      icon: <SportsSoccerIcon fontSize="large" />,
      title: "Schedule games and practices",
      description:
        "Use Coach's Code to schedule games and practices for your team. Set reminders and get notifications so you never miss an event.",
    },
    {
      icon: <GroupIcon fontSize="large" />,
      title: "View team and player stats",
      description:
        "Coach's Code lets you track team and player stats over time. See how your team is improving and identify areas for growth.",
    },
    {
      icon: <ChatIcon fontSize="large" />,
      title: "Share photos and videos with your team",
      description:
        "Upload photos and videos to Coach's Code to share with your team. Keep memories alive and celebrate victories together!",
    },
  ];

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
        {features.map((feature, index) => (
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
