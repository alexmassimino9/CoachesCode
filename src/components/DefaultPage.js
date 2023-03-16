import React, { useState, useEffect } from "react";
import { Auth, API } from "aws-amplify";
import config from "../aws-exports";
import { listRecipes } from "../graphql/queries";

const DefaultPage = () => {
  const [user, setUser] = useState("");

  // get user's name from aws amplify
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await API.graphql({ query: listRecipes });
      // console.log("data", data.data);
    };
    fetchData();
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
