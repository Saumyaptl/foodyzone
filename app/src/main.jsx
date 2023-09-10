import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
  
  *{
    box-sizing:border-box;
    padding:0px;
    margin: 0px;
  }

  body{
    background: #0D0D0DC2;
    font-family: 'Inter', sans-serif;

  }
`
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Globalstyle/>
    <App />
  </React.StrictMode>
);
