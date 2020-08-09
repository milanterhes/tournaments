import { Actions } from "../actions";
import { ITournament } from "../components/presentational/Tournament";

export interface IState {
  sortDesc: Boolean;
  tournament: ITournament;
}

export const initialState: IState = {
  sortDesc: true,
  tournament: {
    header: {
      title: "Loading tournament...",
    },
    matches: [],
  },
};

function reducers(state: any, action: any) {
  switch (action.type) {
    case Actions.SET_SORT:
      return {
        ...state,
        sortDesc: action.sortDesc,
      };
    case Actions.SET_HEADER:
      return {
        ...state,
        tournament: {
          matches: state.tournament.matches,
          header: action.header,
        },
      };
    case Actions.SET_MATCHES:
      return {
        ...state,
        tournament: {
          header: state.tournament.header,
          matches: action.matches,
        },
      };
    case Actions.START_LOADING:
      return {
        ...state,
        tournament: {
          header: {
            title: "Loading tournament...",
          },
          matches: [],
        },
      };
    default:
      return state;
  }
}

export default reducers;
