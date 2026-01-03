import React, { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { Auth0Provider } from "@auth0/auth0-react";



const onRedirectCallback = (appState) => {
  // Use window.location.assign for proper redirect handling
  window.location.assign(appState?.returnTo || window.location.pathname);
};

createRoot(document.getElementById("root")).render(
 
  <Provider store={store}>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: `https://${import.meta.env.VITE_AUTH0_DOMAIN}/api/v2/`,
          scope: "openid profile email",
          response_type: "code",
      }}
      cacheLocation="localstorage"
      useRefreshTokens={true}
        onRedirectCallback={onRedirectCallback}
        useCookiesForTransactions={true}
    >
      <App />
    </Auth0Provider>
  </Provider>
  
);
