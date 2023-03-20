import React, { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Box,
} from "@mui/material";
import { DataStore } from "@aws-amplify/datastore";
import { Team } from "../../../models";

const CreateATeam = () => {
  const [teamName, setTeamName] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [allowJoinRequests, setAllowJoinRequests] = useState(false);

  const handleTeamNameChange = (event) => {
    setTeamName(event.target.value);
  };

  const handlePublicChange = (event) => {
    setIsPublic(event.target.checked);
  };

  const handleAllowJoinRequestsChange = (event) => {
    setAllowJoinRequests(event.target.checked);
  };

  const handleCreateTeam = async () => {
    const newTeam = new Team({
      name: teamName,
      isPublic: isPublic,
      allowJoinRequests: allowJoinRequests,
    });

    try {
      await DataStore.save(newTeam);
      console.log("Team created successfully!");
    } catch (error) {
      console.error("Error creating team:", error);
    }
  };

  const handleCancel = () => {
    // Reset form fields here if necessary
  };

  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: "16px",
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.08)",
      }}
    >
      <Typography variant="h4" sx={{ mb: 3, color: "var(--color-primary)" }}>
        Create a Team
      </Typography>
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
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              color: "var(--color-primary)",
              "& .MuiSvgIcon-root": {
                fontSize: "28px",
              },
            }}
            checked={isPublic}
            onChange={handlePublicChange}
          />
        }
        label="Public"
        sx={{ mb: 2 }}
      />
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              color: "var(--color-primary)",
              "& .MuiSvgIcon-root": {
                fontSize: "28px",
              },
            }}
            checked={allowJoinRequests}
            onChange={handleAllowJoinRequestsChange}
          />
        }
        label="Allow Join Requests"
        sx={{ mb: 2 }}
      />
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          sx={{
            mr: 2,
            backgroundColor: "var(--color-primary)",
            color: "var(--color-white)",
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "var(--color-primary)",
            },
          }}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "var(--color-primary)",
            color: "var(--color-white)",
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "var(--color-primary)",
            },
          }}
          onClick={handleCreateTeam}
        >
          Create Team
        </Button>
      </Box>
    </Paper>
  );
};

export default CreateATeam;
