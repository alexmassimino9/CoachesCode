import React from "react";
import { Typography, Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const TestimonialSectionRoot = styled("section")(({ theme }) => ({
  backgroundColor: "var(--color-gold)",
  padding: theme.spacing(8, 0),
}));

const TestimonialTitle = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontWeight: 700,
  marginBottom: theme.spacing(4),
}));

const TestimonialBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "8px",
  padding: theme.spacing(4),
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.15)",
}));

const TestimonialQuote = styled(Typography)(({ theme }) => ({
  color: "var(--color-gold)",
  fontSize: "1.5rem",
  fontStyle: "italic",
  marginBottom: theme.spacing(2),
}));

const TestimonialCite = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: "var(--color-secondary)",
}));

const TestimonialSection = () => {
  return (
    <TestimonialSectionRoot>
      <Container maxWidth="sm">
        <TestimonialTitle variant="h2" align="center">
          What Our Users Are Saying
        </TestimonialTitle>
        <TestimonialBox>
          <TestimonialQuote>
            "I've been using Coach's Code for the past year and it's been a
            game-changer for my team. The app has made managing my team's
            schedule and communication so much more streamlined. I used to spend
            hours trying to coordinate practices and games, but now it's all
            done in a few clicks. I can't imagine going back to the old way."
          </TestimonialQuote>
          <TestimonialCite>- John D., Head Coach</TestimonialCite>
        </TestimonialBox>
        <TestimonialBox sx={{ marginTop: "2rem" }}>
          <TestimonialQuote>
            "The in-app chat feature is a game-changer. It makes it so easy to
            communicate with my team."
          </TestimonialQuote>
          <TestimonialCite>- Sara M., Player</TestimonialCite>
        </TestimonialBox>
      </Container>
    </TestimonialSectionRoot>
  );
};

export default TestimonialSection;
