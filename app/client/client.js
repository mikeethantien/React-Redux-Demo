import React from "react";
import { render } from "react-dom";
import configureStore from "../redux/store";
import { Provider } from "react-redux";

import App from "../components/app";

var initialState = {
  //The very first row in the table. The id starts at 0, and it gets incremented each time when a new row has been added.
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
