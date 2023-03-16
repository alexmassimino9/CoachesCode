import { createContext, useState } from "react";

const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  return (
    <UserContext.Provider value={useState({})}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
