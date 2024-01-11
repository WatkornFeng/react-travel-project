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
    },
    secondary: {
      main: "#142B2Fff",
      dark: " #627477ff",
      light: "#A9B9B7ff",
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
