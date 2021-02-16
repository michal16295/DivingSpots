import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./context/UserContext";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <UserContext>
        <App />
      </UserContext>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
