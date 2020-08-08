import React from "react";
import Header, { IProps as IHeaderProps } from "./Header";
import MatchList from "./MatchList";
import { IMatch } from "./Match";

interface ITournament {
  header: IHeaderProps;
  matches: IMatch[];
  sortDesc: Boolean;
}

const Tournament = ({ header, matches, sortDesc }: ITournament) => (
  <>
    <Header {...header} />
    <MatchList sortDesc={false} matches={matches} />
  </>
);

export default Tournament;
