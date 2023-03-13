import React from "react";
import AppBar from "./AppBar";
import Button from "@mui/material/Button";
const Teams = () => {
  return (
    <>
      <AppBar />
      <div className="teams">
        <h1>Teams</h1>
        <div>
          <Button variant="contained">Create Team</Button>
          <Button variant="contained">Find Team</Button>
          <Button variant="contained">Join Team</Button>
        </div>
      </div>
    </>
  );
};

export default Teams;
