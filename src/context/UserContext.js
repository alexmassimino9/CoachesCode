import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      if (user !== undefined || user !== null) {
        setUser(user);
      }
    };
    getUser();
  }, [user]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserContext;
