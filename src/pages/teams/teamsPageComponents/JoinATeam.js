import React from "react";
import {
  Paper,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
} from "@mui/material";

const FindATeam = () => {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: "16px",
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.08)",
      }}
    >
      <Typography variant="h4" sx={{ mb: 3, color: "var(--color-primary)" }}>
        Find a Team
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
        <InputLabel>Region</InputLabel>
        <Select
          label="Region"
          sx={{
            "& .MuiSelect-outlined": {
              borderRadius: "16px",
            },
          }}
        >
          <MenuItem value="na">North America</MenuItem>
          <MenuItem value="eu">Europe</MenuItem>
          <MenuItem value="ap">Asia Pacific</MenuItem>
        </Select>
      </FormControl>
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
          Find
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

export default FindATeam;
