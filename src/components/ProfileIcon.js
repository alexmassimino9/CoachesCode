import React from "react";
import { Avatar, Stack } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";

const ProfileIcon = ({ img, height, width, bgColor, fontSize }) => {
  const styles = {
    avatar: {
      height: height ? height : "200px",
      width: width ? width : "200px",
      bgcolor: bgColor ? bgColor : deepOrange[500],
      fontSize: fontSize ? fontSize : "10rem",
    },
  };

  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={styles.avatar}>{img ? img : null}</Avatar>
    </Stack>
  );
};

export default ProfileIcon;
