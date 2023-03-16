import { createContext, useState, useContext } from "react";

const CounterContext = createContext({});

export const CounterContextProvider = ({ children }) => {
  <CounterContextProvider value={useState(0)}>
    {children}
  </CounterContextProvider>;
};

export default CounterContext;
