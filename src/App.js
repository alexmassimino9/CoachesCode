import React, { useState } from "react";
import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
const styles = {
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontSize: "5rem",
    fontWeight: "bold",
  },
};
const App = ({ signOut }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {/* <main style={styles.main}>Coaches Code Coming Soon...</main> */}
      <View className="App">
        <Card>
          <Image src={logo} className="App-logo" alt="logo" />
          <Heading level={1}>We now have Auth!</Heading>
        </Card>
        <Button onClick={signOut}>Sign Out</Button>
      </View>
    </>
  );
};

export default withAuthenticator(App);
