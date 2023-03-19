import React, { useEffect, useState, useContext } from "react";
import { AppBar, ProfileIcon } from "../../components";
import UserContext, { UserProvider } from "../../context/UserContext";
import { ProfileCarousel } from "./profilePageComponents";

const ProfilePage = () => {
  const user = useContext(UserContext);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    if (user !== undefined || user !== null) {
      setUserDetails(user?.user);
    }
  }, [user]);

  const defaultAvatarImg = userDetails?.username?.charAt(0).toUpperCase();
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
