import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";

const DefaultPage = () => {
  // get user's name from aws amplify
  const [user, setUser] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const user = await Auth.currentAuthenticatedUser();
    setUser(user.username);
  };

  return (
    <main className="defaultContainer">
      <h1>Default Page</h1>
      <p>Welcome, {user}</p>
    </main>
  );
};

export default DefaultPage;
