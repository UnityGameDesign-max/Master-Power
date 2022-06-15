import { compose, createStore } from "redux";
import allReducer from "./reducers/index";

export const theStore = createStore(
  allReducer,
  compose(
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
);
