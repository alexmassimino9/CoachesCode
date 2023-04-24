import React, { useEffect, useState, useContext } from "react";
import { AppBar, ProfileIcon } from "../../components";
import { UserContext } from "../../context/UserContext";
import { ProfileCarousel } from "./profilePageComponents";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ProfilePage = () => {
  // Get user context and user details state
  const { user } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState({});

  // Set user details on mount or when user context changes
  useEffect(() => {
    if (user !== null && user !== undefined) {
      setUserDetails(user);
    }
  }, [user]);

  console.log("userDetails", userDetails);
  // Set default avatar image from username

  return (
    <>
      {userDetails && (
        <main className="main">
          <AppBar />
          <section className="profileContainer">
            <aside className="profileAside">
              {/* Display user details */}
              <ProfileIcon
                img={userDetails?.username?.charAt(0).toUpperCase()}
              />
              <Typography variant="h4" component="h2">
                {userDetails?.username}
              </Typography>
              <Typography variant="h6" component="h3">
                {userDetails?.attributes?.email}
              </Typography>
              <Typography variant="h6" component="h3">
                Team Name
              </Typography>

              {/* Add edit profile button */}
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: "15px" }}
              >
                Edit Profile
              </Button>
            </aside>
            <div className="profileContentContainer">
              {/* Display profile carousel */}
              <ProfileCarousel />
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default ProfilePage;
