import React from "react";
import AppBar from "./AppBar";
import { Auth } from "aws-amplify";
import { WithAuthenticatorProps } from "@aws-amplify/ui-react";

const Contact = () => {
  const signOut = () => {
    Auth.signOut();
  };

  return (
    <div>
      <AppBar signOut={signOut} />
      <h1>Contact</h1>
    </div>
  );
};

export default Contact;
