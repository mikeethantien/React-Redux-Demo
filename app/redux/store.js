import { applyMiddleware, compose, createStore } from "redux";
import reducer from "./reducer";
import logger from "redux-logger";

var _createStore = compose(
  applyMiddleware(logger())
)(createStore);

export default function configureStore(initialState) {
  return _createStore(reducer, initialState);
}
