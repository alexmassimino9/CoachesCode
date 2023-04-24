import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#235789",
      light: "#4d7cac",
      dark: "#002c54",
    },
    secondary: {
      main: "#f44336",
      light: "#ff7961",
      dark: "#ba000d",
    },
    error: {
      main: "#f44336",
    },
    background: {
      default: "#f6f7f9",
      paper: "#fff",
    },
    text: {
      primary: "#333",
      secondary: "#757575",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h1: {
      fontSize: "4.5rem",
      fontWeight: 600,
      letterSpacing: "-0.01562em",
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "3.5rem",
      fontWeight: 600,
      letterSpacing: "-0.00833em",
      lineHeight: 1.2,
    },
    h3: {
      fontSize: "2.5rem",
      fontWeight: 600,
      letterSpacing: "0em",
      lineHeight: 1.2,
    },
    h4: {
      fontSize: "2rem",
      fontWeight: 600,
      letterSpacing: "0.00735em",
      lineHeight: 1.2,
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 600,
      letterSpacing: "0em",
      lineHeight: 1.2,
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 600,
      letterSpacing: "0.0075em",
      lineHeight: 1.2,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 600,
      letterSpacing: "0.00938em",
      lineHeight: 1.2,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      letterSpacing: "0.00938em",
      lineHeight: 1.5,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
});

export default theme;
