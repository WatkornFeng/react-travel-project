import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider, createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    palette: {
      primary: {
        main: string;
        dark: string;
        light: string;
      };
      secondary: {
        main: string;
        dark: string;
        light: string;
      };
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#142B2Fff",
      dark: "#2A474Cff",
      light: "#A9B9B7ff",
    },
    secondary: {
      main: "#3A2C24ff",
      dark: " #9B9B94ff",
      light: "#D0D1C6ff",
    },
  },

  breakpoints: {
    values: {
      xs: 0, // default
      sm: 600, // default
      md: 1000, // default 900
      lg: 1200, // default
      xl: 1536, // default
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          // color: "#2A474Cff",
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
