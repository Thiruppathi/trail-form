import { createStore, applyMiddleware } from "redux"; // Core that performs the magic

// middleware which allows to write action creators that returns a function.
// The returned function receives 2 store methods as parameters
// 1. dispatch
// 2. getState
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, applyMiddleware(thunk));
}
