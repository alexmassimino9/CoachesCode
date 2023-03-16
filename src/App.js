import React from "react";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import AppBar from "./components/AppBar";
import { HomePage } from "./pages";
import { Auth } from "aws-amplify";

const App = ({ signOut }) => {
  console.log("auth", Auth.user.username);
  return (
    <>
      <main className="main">
        <AppBar signOut={signOut} />
        <HomePage />
      </main>
    </>
  );
};

export default withAuthenticator(App);
