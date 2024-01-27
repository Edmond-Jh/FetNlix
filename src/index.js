import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import str from "./Componenets/store/store";
import App from "./App";
// import store from "./Componenets/store/store/";

alert("Data is filtered for some countries Please use VPN For Better Experience");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={str}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
