import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import store from "./store";
import { Provider } from "react-redux";

import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <CookiesProvider>
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>
  </CookiesProvider>,
  document.getElementById("root")
);
