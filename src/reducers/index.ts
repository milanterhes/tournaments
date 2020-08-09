import { Actions } from "../actions";
import { ITournament } from "../components/presentational/Tournament";
import data from "../components/container/TestData.json";

export interface IState {
  sortDesc: Boolean;
  tournament: ITournament;
}

export const initialState: IState = {
  sortDesc: false,
  tournament: {
    header: data.header,
    matches: data.matches.map((match: any) => {
      match.time = new Date(
        new Date().getTime() + Math.floor(Math.random() * 10) * 60000
      );
      return match;
    }),
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
        loading: true,
        tournament: {},
      };
    default:
      return state;
  }
}

export default reducers;
