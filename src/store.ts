import { createStore, applyMiddleware } from "redux";
import reducers, { initialState } from "./reducers";
import thunk from "redux-thunk";

let store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;
