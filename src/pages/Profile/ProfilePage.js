import React, { useEffect, useState, useContext } from "react";
import { AppBar } from "../../components";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";

const ProfilePage = () => {
  const styles = {
    avatar: {
      height: "250px",
      width: "250px",
      bgcolor: deepOrange[500],
      fontSize: "10rem",
    },
  };
  return (
    <main className="main">
      <AppBar />
      <section className="profileSection">
        <Stack direction="row" spacing={2}>
          <Avatar sx={styles.avatar}>N</Avatar>
        </Stack>
      </section>
    </main>
  );
};

export default ProfilePage;
