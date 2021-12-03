import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProvider from './components/UserProvider';
import "App.scss";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
    <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

