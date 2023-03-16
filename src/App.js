import React, { useContext } from "react";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import AppBar from "./components/AppBar";
import { HomePage } from "./pages";
import UserContext, { UserProvider } from "./context/UserContext";
const App = ({ signOut }) => {
  const user = useContext(UserContext);

  return (
    <>
      <UserProvider>
        <main className="main">
          <AppBar signOut={signOut} userDetails={user} />
          <HomePage />
        </main>
      </UserProvider>
    </>
  );
};

export default withAuthenticator(App);
