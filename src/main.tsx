import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { Auth0Provider } from "@auth0/auth0-react";
import store from "./store";
import App from "./App";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
      dark: " #BAB7ACff",
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
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          authorizationParams={{
            redirect_uri: window.location.origin,
            audience: "http://localhost:3000/profile",
            // redirect_uri: window.location.origin + "/map",
          }}
        >
          <App />
        </Auth0Provider>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
  //</React.StrictMode>
);
