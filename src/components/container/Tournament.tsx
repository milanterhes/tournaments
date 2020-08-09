import React from "react";
import { useSelector } from "react-redux";
import Tournament from "../presentational/Tournament";
import { IState } from "../../reducers";

const TournamentContainer = () => {
  const state = useSelector((state: IState) => state);

  if (state.sortDesc) {
    state.tournament.matches.sort(
      (a, b) => a.time.getTime() - b.time.getTime()
    );
  } else {
    state.tournament.matches.sort(
      (a, b) => b.time.getTime() - a.time.getTime()
    );
  }

  return <Tournament {...state.tournament} />;
};

export default TournamentContainer;
