import React, { useState, useEffect } from "react";
import { AppBar } from "../../components";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  CreateATeam,
  FindATeam,
  JoinATeam,
  TeamsDisplay,
} from "./teamsPageComponents";
import { DataStore } from "@aws-amplify/datastore";
import { Team } from "../../models";

const TeamsPage = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    const teams = await DataStore.query(Team);
    setTeams(teams);
  };

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
          <TeamsDisplay teams={teams} />
        </Grid>
      </Container>
    </>
  );
};

export default TeamsPage;
