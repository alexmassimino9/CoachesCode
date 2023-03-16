import React, { useState, useEffect, useContext } from "react";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import AppBar from "./components/AppBar";
import { HomePage } from "./pages";
import { Auth } from "aws-amplify";
import { UserContext } from "./context/UserContext";
const App = ({ signOut }) => {
  const [user, setUser] = useState({});
  const [count, setCount] = useState(0);
  useEffect(() => {
    const getUser = async () => {
      const user = await Auth?.user;
      setUser(user);
    };
    getUser();
  }, []);
  console.log("auth", user);
  return (
    <>
      <main className="main">
        <AppBar signOut={signOut} userDetails={user} />
        <HomePage />
      </main>
    </>
  );
};

export default withAuthenticator(App);
