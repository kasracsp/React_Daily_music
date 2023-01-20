import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import axios from "axios";
const root = ReactDOM.createRoot(document.getElementById("root"));

axios.defaults.baseURL = "https://deezerdevs-deezer.p.rapidapi.com/";
axios.defaults.headers.common["X-RapidAPI-Key"] =
  "cb1564162dmsh7568a5afacb085dp112a4ajsnefb901c0c47c";
axios.defaults.headers.common["X-RapidAPI-Host"] =
  "deezerdevs-deezer.p.rapidapi.com";

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
