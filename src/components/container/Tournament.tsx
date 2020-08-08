import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Tournament from "../presentational/Tournament";
import TestData from "./TestData.json";

const TournamentContainer = () => {
  return <Tournament {...TestData} />;
};

export default TournamentContainer;
