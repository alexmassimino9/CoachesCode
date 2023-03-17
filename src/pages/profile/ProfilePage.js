import React, { useEffect, useState, useContext } from "react";
import { AppBar, ProfileIcon } from "../../components";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";
import UserContext, { UserProvider } from "../../context/UserContext";
import { InputField, ProfileCarousel } from "./profilePageComponents";

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
    container: {
      marginTop: "2rem",
      marginBottom: "2rem",
      display: "flex",
      height: "85vh",
      width: "90%",
      alignSelf: "center",
      backgroundColor: "var(--color-white)",
      color: "var(--color-white)",
      borderRadius: "16px",
    },
    profileContainer: {
      display: "flex",
      color: "var(--color-black)",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      // width: "100%",
      backgroundColor: "var(--color-secondary)",
      borderRadius: "0 16px 16px 0",
    },
    profileAside: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      backgroundColor: "var(--color-primary)",
      borderRadius: "16px 0 0 16px",
    },
  };
  return (
    <UserProvider>
      <main className="main">
        <AppBar />
        <section className="profileContainer">
          <aside className="profileAside">
            <ProfileIcon img={defaultAvatarImg} />
            <h1>{userDetails?.username}</h1>
            <h2>{userDetails?.attributes?.email}</h2>
            <h3>Team Name</h3>
            <h4> Coach / F/ MF/ DF/ GF </h4>
            <button> edit profile</button>
          </aside>
          <div className="profileContentContainer">
            <ProfileCarousel />
          </div>
        </section>
      </main>
    </UserProvider>
  );
};
export default ProfilePage;
