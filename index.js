import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import BottomNav from "./BottomNav";
// eslint-disable-next-line
import main_intro from "./main_intro";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BottomNav />
      <App />
      <main_intro />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);