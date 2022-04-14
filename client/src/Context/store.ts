import thunk from "redux-thunk";
import { applyMiddleware, compose } from "redux";
import { createStore } from "redux";
import Allreducers from "./Allreducers";
import { composeWithDevTools } from "@redux-devtools/extension";
/* eslint-disable no-underscore-dangle */

export const store = createStore(
  Allreducers,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

/* eslint-enable */
