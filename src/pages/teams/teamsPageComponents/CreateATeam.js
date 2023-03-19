import React from "react";
import {
  Paper,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Box,
} from "@mui/material";

const CreateATeam = () => {
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
              backgroundColor: "var(--color-secondary)",
            },
          }}
        >
          Create
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderColor: "var(--color-primary)",
            color: "var(--color-primary)",
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "var(--color-primary)",
              color: "var(--color-white)",
            },
          }}
        >
          Cancel
        </Button>
      </Box>
    </Paper>
  );
};

export default CreateATeam;
