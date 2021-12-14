import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./assets/styles/style.css"
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
