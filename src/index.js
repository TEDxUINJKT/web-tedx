import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./router";

import { Provider } from "react-redux";
import ReactGA from "react-ga4";
import { store } from "./state/store";

import "./styles/global.css";

ReactGA.initialize("G-7DWEM5G3MZ");

ReactGA.send({ hitType: "pageview", page: "/my-path", title: "Custom Title" });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>
);
