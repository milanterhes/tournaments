import { ITournament } from "../components/presentational/Tournament";
import Header, { IProps as IHeader } from "../components/presentational/Header";
import { IMatch } from "../components/presentational/Match";

export enum Actions {
  SET_SORT = "SET_SORT",
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

export function setMatches(matches: IMatch) {
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

export function fetchTournament(id: number) {
  return async function (dispatch: any) {
    try {
      console.log("fetching....");
      const proxy_url = "https://cors-anywhere.herokuapp.com/";
      const response = await fetch(
        proxy_url + "https://api.eslgaming.com/play/v1/leagues/" + id
      );
      console.log(response);
      const tournament = await response.json();
      dispatch(
        setHeader({
          date: tournament.timeline.inProgress.begin,
          title: tournament.name.normal,
        })
      );
    } catch (error) {
      // TODO: handle error
      console.log(error);
    }
  };
}

// export function fetchTournament(id: number) {
//   return function (dispatch: any) {
//     dispatch(startLoading());
//     console.log("fetching");
//     return fetch("https://api.eslgaming.com/play/v1/leagues/" + id)
//       .then(
//         (response) => response.json(),
//         (error) => console.log("An error occurred.", error)
//       )
//       .then((tournament) =>
//         dispatch(
//           setHeader({
//             date: tournament.timeline.inProgress.begin,
//             title: tournament.name.normal,
//           })
//         )
//       );
//   };
// }
