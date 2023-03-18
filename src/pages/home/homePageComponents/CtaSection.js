import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";

const CtaSectionRoot = styled("section")(({ theme }) => ({
  backgroundColor: "var(--color-secondary)",
  color: "var(--color-white)",
  padding: theme.spacing(6),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const CtaButton = styled(Button)(({ theme }) => ({
  backgroundColor: "var(--color-white)",
  color: "var(--color-secondary)",
  borderRadius: "50px",
  padding: theme.spacing(2, 6),
  textTransform: "uppercase",
  "&:hover": {
    backgroundColor: "var(--color-primary)",
    color: "var(--color-white)",
  },
}));

const CtaSection = () => {
  return (
    <CtaSectionRoot>
      <Typography variant="h2" align="center">
        Create teams, manage players, and stay organized.
      </Typography>
      <Box marginTop={4}>
        <CtaButton variant="contained" size="large">
          Get Started
        </CtaButton>
      </Box>
    </CtaSectionRoot>
  );
};

export default CtaSection;
