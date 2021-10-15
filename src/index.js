import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import str from "./Componenets/store/store";
import App from "./App";
// import store from "./Componenets/store/store/";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={str}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
