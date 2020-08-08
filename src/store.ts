import { createStore } from "redux";
import { Actions } from "./actions";

const initialState = {
  sortDesc: false,
};

function reducers(state: any, action: any) {
  switch (action.type) {
    case Actions.SET_SORT:
      return {
        ...state,
        sortDesc: action.sortDesc,
      };
    default:
      return state;
  }
}

let store = createStore(reducers, initialState);

export default store;
