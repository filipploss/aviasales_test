import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import reducer from "./reducer";

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export const { dispatch } = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
