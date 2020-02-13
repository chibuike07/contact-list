import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let contacts = [
  {
    id: 1,
    name: "scott",
    phone: "123 456 789"
  },
  {
    id: 2,
    name: "chima",
    phone: "222333654"
  },
  {
    id: 3,
    name: "wills",
    phone: "098322999"
  },
  {
    id: 4,
    name: "baller",
    phone: "222111000111"
  }
];
ReactDOM.render(<App contacts={contacts} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
