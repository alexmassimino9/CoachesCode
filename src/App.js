import React from "react";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import AppBar from "./components/AppBar";
import { HomePage } from "./pages";
import { UserProvider } from "./context/UserContext";

const App = ({ signOut }) => {
  return (
    <>
      <UserProvider>
        <main className="main">
          <AppBar signOut={signOut} />
          <HomePage />
        </main>
      </UserProvider>
    </>
  );
};

export default App;
