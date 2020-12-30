import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/home";
import App from"./App"
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";


import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);


reportWebVitals();
