import React from "react";
import AppBar from "./components/AppBar";
import { HomePage } from "./pages";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import theme from "./context/ThemeContext";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar />
        <HomePage />
      </ThemeProvider>
    </>
  );
};

export default App;
