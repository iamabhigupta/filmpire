/* eslint-disable comma-dangle */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";

import App from "./components/App";
import store from "./app/store";
import "./index.css";

import ToggelColorModeProvider from "./utils/ToggleColorMode";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme({});
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToggelColorModeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ToggelColorModeProvider>
    </Provider>
  </React.StrictMode>
);
