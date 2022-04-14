import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./Context/store";
import Router from "./Router";

const linkelement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/">
        <App />
        <Router />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  linkelement
);
