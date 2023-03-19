import React from "react";
import { AppBar } from "../../components";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { CreateATeam, FindATeam, JoinATeam } from "./teamsPageComponents";

const TeamsPage = () => {
  return (
    <>
      <AppBar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h1" sx={{ mb: 4, color: "var(--color-black)" }}>
          Teams
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <CreateATeam />
          </Grid>
          <Grid item xs={12} md={6}>
            <FindATeam />
          </Grid>
          <Grid item xs={12}>
            <JoinATeam />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default TeamsPage;
