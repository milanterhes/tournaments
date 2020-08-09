import React from "react";
import Header, { IProps as IHeaderProps } from "./Header";
import MatchList from "./MatchList";
import { IMatch } from "./Match";

export interface ITournament {
  header: IHeaderProps;
  matches: IMatch[];
}

const Tournament = ({ header, matches }: ITournament) => (
  <>
    <Header {...header} />
    <MatchList matches={matches} />
  </>
);

export default Tournament;
