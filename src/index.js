import React from "react";
import ReactDOM from "react-dom";
import Loadable from "react-loadable";

import "./scss/index.scss";
import App from "./App";

const AppBundle = <App />;

window.onload = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(AppBundle, document.getElementById("root"));
  });
};
