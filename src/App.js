import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import AppBar from "./components/AppBar";
import DefaultPage from "./components/DefaultPage";
import { Auth } from "aws-amplify";

const App = ({ signOut }) => {
  console.log("auth", Auth.user.username);
  return (
    <>
      <main className="main">
        <AppBar signOut={signOut} />
        <DefaultPage />
      </main>
    </>
  );
};

export default withAuthenticator(App);
