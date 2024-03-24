import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { Auth0Provider } from "@auth0/auth0-react";
import store from "./store";
import App from "./App";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { theme } from "./theme";

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
