import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Match from "./Match";
import DateSort from "./DateSort";

const Divider = styled.hr`
  width: calc(100% + 30px);
  margin-left: -16px;
  border-top: 1px solid #E2E5EA;
`

const MatchList = () => (
  <Container style={{marginTop: 16}}>

    <div style={{textAlign: "right"}}>
      <DateSort desc={true}/>
    </div>

    <Match 
      time="12:51"
      team1={{winner: true, name: 'Black Lotus', points: 4}}
      team2={{winner: false, name: 'Team Chandra', points: 2}}
    />

    <Divider />

    <Match 
      time="12:51"
      team1={{winner: true, name: 'Black Lotus', points: 4}}
      team2={{winner: false, name: 'Team Chandra', points: 2}}
    />

    <Divider />
    
    <Match 
      time="12:51"
      team1={{winner: true, name: 'Black Lotus', points: 4}}
      team2={{winner: false, name: 'Team Chandra', points: 2}}
    />

    <Divider />

    <Match 
      time="12:51"
      team1={{winner: true, name: 'Black Lotus', points: 4}}
      team2={{winner: false, name: 'Team Chandra', points: 2}}
    />
  </Container>
);

export default MatchList;
