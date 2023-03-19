import React, { useEffect, useState, useContext } from "react";
import { AppBar, ProfileIcon } from "../../components";
import UserContext, { UserProvider } from "../../context/UserContext";
import { ProfileCarousel } from "./profilePageComponents";
import Button from "@mui/material/Button";

const ProfilePage = () => {
  // Get user context and user details state
  const user = useContext(UserContext);
  const [userDetails, setUserDetails] = useState({});

  // Set user details on mount or when user context changes
  useEffect(() => {
    setUserDetails(user?.user || {});
  }, [user]);

  // Set default avatar image from username
  const defaultAvatarImg = userDetails?.username?.charAt(0).toUpperCase();

  return (
    <UserProvider>
      <main className="main">
        <AppBar />
        <section className="profileContainer">
          <aside className="profileAside">
            {/* Display user details */}
            <ProfileIcon img={defaultAvatarImg} />
            <h1>{userDetails?.username}</h1>
            <h2>{userDetails?.attributes?.email}</h2>
            <h3>Team Name</h3>
            <h4>Coach / F / MF / DF / GF</h4>

            {/* Add edit profile button */}
            <Button variant="contained" color="primary">
              Edit Profile
            </Button>
          </aside>
          <div className="profileContentContainer">
            {/* Display profile carousel */}
            <ProfileCarousel />
          </div>
        </section>
      </main>
    </UserProvider>
  );
};

export default ProfilePage;
