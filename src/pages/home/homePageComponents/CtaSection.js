import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faFutbol } from "@fortawesome/free-solid-svg-icons";
import Fade from "@mui/material/Fade";

const colors = {
  primary: "#5C5AA7",
  secondary: "#FFA500",
  white: "#FFFFFF",
  gray: "#A6A6A6",
};

const CtaSectionRoot = styled("section")(({ theme }) => ({
  backgroundColor: "grey",
  color: colors.white,
  padding: theme.spacing(6),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const CtaButton = styled(Button)(({ theme }) => ({
  backgroundColor: colors.secondary,
  color: colors.white,
  borderRadius: "50px",
  padding: theme.spacing(2, 4),
  textTransform: "uppercase",
  "&:hover": {
    backgroundColor: colors.gray,
    color: colors.white,
  },
}));

const CtaIcon = styled(FontAwesomeIcon)(({ theme }) => ({
  fontSize: "3.5rem",
  marginRight: theme.spacing(2),
  color: colors.white,
}));

const CtaSection = () => {
  const navigate = useNavigate();

  return (
    <CtaSectionRoot>
      <Fade in={true} timeout={1000}>
        <Typography variant="h2" align="center" style={{ fontSize: "3.5rem" }}>
          <CtaIcon icon={faUsers} />
          Create teams, manage players, and stay organized.
        </Typography>
      </Fade>
      <Box marginTop={4}>
        <Fade in={true} timeout={2000}>
          <CtaButton
            variant="contained"
            size="large"
            onClick={() => navigate("/teams")}
          >
            <CtaIcon icon={faFutbol} />
            Get Started
          </CtaButton>
        </Fade>
      </Box>
    </CtaSectionRoot>
  );
};

export default CtaSection;
