import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const teams = [
  { id: 1, name: "Team A", region: "na" },
  { id: 2, name: "Team B", region: "eu" },
  { id: 3, name: "Team C", region: "ap" },
];

const JoinATeam = () => {
  const [expanded, setExpanded] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [selectedTeam, setSelectedTeam] = useState(null);

  const handleAccordionChange = (event, isExpanded) => {
    setExpanded(isExpanded);
  };

  const handleTeamNameChange = (event) => {
    setTeamName(event.target.value);
    setSelectedTeam(null);
  };

  const handleTeamSelect = (event) => {
    const teamId = event.target.value;
    const team = teams.find((t) => t.id === teamId);
    setSelectedTeam(team);
  };

  const filteredTeams = teams.filter((t) =>
    t.name.toLowerCase().includes(teamName.toLowerCase())
  );

  return (
    <Accordion expanded={expanded} onChange={handleAccordionChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h4" sx={{ color: "var(--color-primary)" }}>
          Join a Team
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <TextField
          label="Team Name"
          variant="outlined"
          fullWidth
          value={teamName}
          onChange={handleTeamNameChange}
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--color-black)",
              borderRadius: "16px",
            },
            "& .MuiOutlinedInput-input": {
              borderRadius: "16px",
            },
            "& .MuiInputLabel-outlined": {
              color: "var(--color-black)",
            },
          }}
        />
        <FormControl
          variant="outlined"
          fullWidth
          sx={{
            mb: 3,
            "& .MuiInputLabel-outlined": {
              color: "var(--color-black)",
            },
          }}
        >
          <Select
            label="Team"
            value={selectedTeam ? selectedTeam.id : ""}
            onChange={handleTeamSelect}
            sx={{
              "& .MuiSelect-outlined": {
                borderRadius: "16px",
              },
            }}
          >
            <MenuItem value="">Select a team</MenuItem>
            {filteredTeams.map((team) => (
              <MenuItem key={team.id} value={team.id}>
                {team.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            sx={{
              mr: 2,
              "&:hover": {
                backgroundColor: "var(--color-primary)",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "var(--color-primary)",
              "&:hover": {
                backgroundColor: "var(--color-primary-dark)",
              },
            }}
          >
            Join Team
          </Button>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default JoinATeam;
