import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Tournament from "../presentational/Tournament";
import { IState } from "../../reducers";
import { fetchTournament } from "../../actions";
import { useParams } from "react-router-dom";

const TournamentContainer = () => {
  const state = useSelector((state: IState) => state);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);

  if (state.sortDesc) {
    state.tournament.matches.sort(
      (a, b) => a.time.getTime() - b.time.getTime()
    );
  } else {
    state.tournament.matches.sort(
      (a, b) => b.time.getTime() - a.time.getTime()
    );
  }

  useEffect(() => {
    dispatch(fetchTournament(id || 185553));
  }, []);

  return <Tournament {...state.tournament} />;
};

export default TournamentContainer;
