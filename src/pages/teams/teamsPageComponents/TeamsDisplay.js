import React, { useState, useEffect } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Team } from "../../../models";
import { Grid, Typography, Card, CardContent, Box } from "@mui/material";
import styled from "@emotion/styled";

const useStyles = styled((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.08)",
    height: "100%",
    transition: "box-shadow 0.3s ease-in-out",
    "&:hover": {
      boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.2)",
    },
  },
  teamName: {
    fontWeight: "bold",
  },
  teamMembers: {
    color: "#666",
    marginTop: theme.spacing(1),
  },
}));

const TeamsDisplay = () => {
  const classes = useStyles();
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    const teams = await DataStore.query(Team);
    setTeams(teams);
  };

  return (
    <Grid item xs={12}>
      <Typography variant="h2" gutterBottom>
        Explore Teams
      </Typography>
      <Grid container spacing={2}>
        {teams.map((team) => (
          <Grid key={team.id} item xs={12} md={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  variant="h5"
                  className={classes.teamName}
                  gutterBottom
                >
                  {team.name}
                </Typography>
                <Typography variant="subtitle1" className={classes.teamMembers}>
                  Members: {team?.members?.length}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default TeamsDisplay;
