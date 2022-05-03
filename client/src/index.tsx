import React from "react";
import { createRoot } from "react-dom/client";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./components/App";
import reportWebVitals from "../src/reportWebVitals";
import setupSocket from "./setupSocket";
import { appReducer } from "./store/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootSaga } from "./store/saga";

import "./index.scss";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
const socket = setupSocket(store.dispatch, store.getState());
sagaMiddleware.run(rootSaga, socket);

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
