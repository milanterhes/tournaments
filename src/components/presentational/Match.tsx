import React from "react";
import styled from "styled-components";

interface ITeam {
  winner?: Boolean;
  name: String;
  points: Number;
}

export interface IMatch {
  time: String,
  team1: ITeam,
  team2: ITeam
}

const Time = styled.p`
  margin: 0;
  margin-bottom: 7px;
  color: #818f8f;
  font-size: 14px;
  line-height: 19px;
`;

const TeamContainer = styled.div`
  border-left: 4px solid
    ${({ winner }: Pick<ITeam, "winner">) => (winner ? "#28B662" : "#E43726")};
  border-radius: 2px 0px 0px 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TeamName = styled.span`
  font-size: 16px;
  line-height: 22px;
  margin-left: 8px;
`;

const TeamPoints = styled.span`
  font-size: 21px;
  line-height: 29px;
  font-weight: ${({ winner }: Pick<ITeam, "winner">) => (winner ? "bold" : "normal")}
`;

const Team = (props: ITeam) => (
  <TeamContainer winner={props.winner}>
    <TeamName>{props.name}</TeamName>
    <TeamPoints winner={props.winner}>{props.points}</TeamPoints>
  </TeamContainer>
);

Team.defaultProps = {
  winner: false
}

const MatchContainer = styled.div`
  width: 100%;

  ${TeamContainer}:first-of-type {
    margin-bottom: 15px;
  }
`;

const Match = ({time, team1, team2}: IMatch) => (
  <MatchContainer>
      <Time>{time}</Time>
      <Team {...team1}/>
      <Team {...team2}/>
  </MatchContainer>
)

export default Match;