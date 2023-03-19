import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";

const ProfileCarousel = () => {
  return (
    <StyledBreadcrumbs aria-label="breadcrumb">
      <StyledLink underline="hover" color="primary">
        More
      </StyledLink>
      <StyledLink underline="hover" color="primary">
        Features
      </StyledLink>
      <StyledTypography color="textPrimary">Coming Soon</StyledTypography>
    </StyledBreadcrumbs>
  );
};

const StyledBreadcrumbs = styled(Breadcrumbs)({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: "var(--color-background)",
  padding: "16px",
  borderRadius: "16px",
  boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.08)",
});

const StyledLink = styled(Link)({
  fontWeight: "bold",
  fontSize: "18px",
  textTransform: "capitalize",
  color: "var(--color-primary)",
  "&:hover": {
    color: "var(--color-secondary)",
  },
});

const StyledTypography = styled(Typography)({
  fontWeight: "bold",
  fontSize: "18px",
  textTransform: "capitalize",
  color: "var(--color-black)",
});

export default ProfileCarousel;
