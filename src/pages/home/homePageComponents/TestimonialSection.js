import React from "react";
import { Typography, Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { TESTIOMNIALS } from "../../../constants/arrays";

const TestimonialSectionRoot = styled("section")(({ theme }) => ({
  backgroundColor: "#F4F4F4",
  padding: theme.spacing(10, 0),
}));

const TestimonialTitle = styled(Typography)(({ theme }) => ({
  color: "#333",
  fontWeight: 700,
  marginBottom: theme.spacing(4),
  textTransform: "uppercase",
  letterSpacing: "0.2rem",
  borderBottom: "3px solid #E07A5F",
  paddingBottom: theme.spacing(1),
}));

const TestimonialBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "12px",
  padding: theme.spacing(4),
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
  marginBottom: theme.spacing(4),
}));

const TestimonialQuote = styled(Typography)(({ theme }) => ({
  color: "#555",
  fontSize: "1.5rem",
  fontWeight: 400,
  lineHeight: "2rem",
  marginBottom: theme.spacing(2),
}));

const TestimonialCite = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: "#E07A5F",
  marginTop: theme.spacing(2),
}));

const TestimonialSection = () => {
  return (
    <TestimonialSectionRoot>
      <Container maxWidth="md">
        <TestimonialTitle variant="h2" align="center">
          What Our Users Are Saying
        </TestimonialTitle>
        {TESTIOMNIALS.map((item, index) => {
          return (
            <TestimonialBox key={index}>
              <TestimonialQuote>{item.testimonial}</TestimonialQuote>
              <TestimonialCite>- {item.cite}</TestimonialCite>
            </TestimonialBox>
          );
        })}
      </Container>
    </TestimonialSectionRoot>
  );
};

export default TestimonialSection;
