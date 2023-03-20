import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const JoinATeam = () => {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (event, isExpanded) => {
    setExpanded(isExpanded);
  };

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
        ></FormControl>
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
            Join
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
      </AccordionDetails>
    </Accordion>
  );
};

export default JoinATeam;
