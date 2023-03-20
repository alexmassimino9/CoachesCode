import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FindATeam = () => {
  return (
    <Accordion sx={{ borderRadius: "16px" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h4" sx={{ color: "var(--color-primary)" }}>
          Find a Team
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ width: "100%" }}>
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
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default FindATeam;
