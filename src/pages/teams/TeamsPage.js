import React from "react";
import { AppBar } from "../../components";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const TeamsPage = () => {
  return (
    <>
      <AppBar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h1" sx={{ mb: 4 }}>
          Teams
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h2" sx={{ mb: 2 }}>
                Create a Team
              </Typography>
              <TextField
                label="Team Name"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
              <FormGroup sx={{ mb: 2 }}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Public"
                  sx={{ mb: 1 }}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Allow Join Requests"
                  sx={{ mb: 1 }}
                />
              </FormGroup>
              <Button variant="contained" sx={{ mr: 2 }}>
                Create
              </Button>
              <Button variant="outlined">Cancel</Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h2" sx={{ mb: 2 }}>
                Find a Team
              </Typography>
              <TextField
                label="Team Name"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
              <FormControl variant="outlined" fullWidth sx={{ mb: 2 }}>
                <InputLabel>Region</InputLabel>
                <Select label="Region">
                  <MenuItem value="na">North America</MenuItem>
                  <MenuItem value="eu">Europe</MenuItem>
                  <MenuItem value="ap">Asia Pacific</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" sx={{ mr: 2 }}>
                Find
              </Button>
              <Button variant="outlined">Cancel</Button>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h2" sx={{ mb: 2 }}>
                Join a Team
              </Typography>
              <TextField
                label="Team Code"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
              <FormControl variant="outlined" fullWidth sx={{ mb: 2 }}>
                <InputLabel>Role</InputLabel>
                <Select label="Role">
                  <MenuItem value="player">Player</MenuItem>
                  <MenuItem value="coach">Coach</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" sx={{ mr: 2 }}>
                Join
              </Button>
              <Button variant="outlined">Cancel</Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default TeamsPage;
