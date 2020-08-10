import { IProps as IHeader } from "../components/presentational/Header";
import { IMatch } from "../components/presentational/Match";
import mapResultsToMatch, {
  Result,
  Contestant,
} from "../utils/mapResultsToMatch";

export enum Actions {
  SET_SORT = "SET_SORT",
  SET_ERROR = "SET_ERROR",
  SET_HEADER = "SET_HEADER",
  SET_MATCHES = "SET_MATCHES",
  START_LOADING = "START_LOADING",
}

export function setSort(desc: Boolean) {
  return {
    type: Actions.SET_SORT,
    sortDesc: desc,
  };
}

export function setHeader(header: IHeader) {
  return {
    type: Actions.SET_HEADER,
    header,
  };
}

export function setMatches(matches: IMatch[]) {
  return {
    type: Actions.SET_MATCHES,
    matches,
  };
}

export function startLoading() {
  return {
    type: Actions.START_LOADING,
  };
}

export function setError() {
  return {
    type: Actions.SET_ERROR,
  };
}
export function fetchTournament(id: number) {
  return async function (dispatch: any) {
    try {
      dispatch(startLoading());
      //needed to use a proxy because of cors issues
      const proxy_url = "https://api.codetabs.com/v1/proxy?quest=";
      const esl_url = "https://api.eslgaming.com/play/v1/leagues/" + id;
      const response = await fetch(proxy_url + esl_url);
      const tournament = await response.json();
      dispatch(
        setHeader({
          date: tournament.timeline.inProgress.begin,
          title: tournament.name.normal,
        })
      );

      let [results, contestants] = await Promise.all([
        fetch(proxy_url + esl_url + "/results"),
        fetch(proxy_url + esl_url + "/contestants"),
      ]);

      results = await results.json();
      contestants = await contestants.json();

      const matches = ((results as unknown) as Result[]).map((r) =>
        mapResultsToMatch(r, (contestants as unknown) as Contestant[])
      );

      dispatch(setMatches(matches));
    } catch (error) {
      console.log(error);
      dispatch(setError());
    }
  };
}
