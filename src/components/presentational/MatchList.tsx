import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Match, { IMatch } from "./Match";
import DateSort from "./DateSort";

interface IMatchList {
  sortDesc: Boolean,
  matches: IMatch[]
}

const Divider = styled.hr`
  width: calc(100% + 30px);
  margin-left: -16px;
  border-top: 1px solid #E2E5EA;
`

const MatchList = ({sortDesc, matches}: IMatchList) => (
  <Container style={{marginTop: 16}}>

    <div style={{textAlign: "right"}}>
      <DateSort desc={sortDesc}/>
    </div>

    {matches.map((match, idx) => (
      <>
        <Match {...match} />
        {idx !== matches.length -1 && <Divider />}
      </>
    ))}
  </Container>
);

export default MatchList;
