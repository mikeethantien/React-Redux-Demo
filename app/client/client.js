import React from "react";
import { render } from "react-dom";
import App from "../components/app";
import configureStore from "../redux/store";
import { Provider } from "react-redux";

var initialState = {
  items: [{
    name: "",
    qty: 0,
    price: 0,
    id: 0
  }]
};

var store = configureStore(initialState);

render(
  <Provider store={store}>
      <App/>
  </Provider>,
  document.getElementById("app")
);
