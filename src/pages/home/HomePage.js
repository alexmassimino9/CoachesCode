import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

const HomePage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <main className="defaultContainer">
      <h1>Home Page</h1>
      <p>Welcome, {user?.username}</p>
    </main>
  );
};

export default HomePage;
