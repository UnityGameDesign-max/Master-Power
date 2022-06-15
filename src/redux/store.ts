import { compose, createStore } from "redux";
import allReducers from "./reducers";


export const theStore = createStore(
  allReducers,
  compose(
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
);
