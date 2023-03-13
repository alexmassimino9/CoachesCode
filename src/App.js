import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { listNotes } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";

///
import AppBar from "./components/AppBar";
import DefaultPage from "./components/DefaultPage";

// graphql query to get all notes

const App = ({ signOut }) => {
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
