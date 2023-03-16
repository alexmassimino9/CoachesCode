import React, { useEffect, useState, useContext } from "react";
import { AppBar } from "../../components";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";
import UserContext, { UserProvider } from "../../context/UserContext";

const ProfilePage = () => {
  const user = useContext(UserContext);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    if (user !== undefined || user !== null) {
      setUserDetails(user?.user);
    }
  }, [user]);

  const defaultAvatarImg = userDetails?.username?.charAt(0).toUpperCase();
  const styles = {
    avatar: {
      height: "250px",
      width: "250px",
      bgcolor: deepOrange[500],
      fontSize: "10rem",
    },
  };
  return (
    <UserProvider>
      <main className="main">
        <AppBar />
        <section className="profileSection">
          <Stack direction="row" spacing={2}>
            <Avatar sx={styles.avatar}>{defaultAvatarImg}</Avatar>
          </Stack>
        </section>
        <section>
          <h1> more coming soon...</h1>
        </section>
      </main>
    </UserProvider>
  );
};

export default ProfilePage;
