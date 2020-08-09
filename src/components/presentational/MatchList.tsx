import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Match, { IMatch } from "./Match";
import DateSort from "../container/Sort";

interface IMatchList {
  matches: IMatch[];
}

const Divider = styled.hr`
  width: calc(100% + 30px);
  margin-left: -16px;
  border-top: 1px solid #e2e5ea;
`;

const MatchList = ({ matches }: IMatchList) => {
  const m =
    matches.length > 0
      ? matches.map((match, idx) => (
          <React.Fragment key={"match-" + idx}>
            <Match {...match} />
            {idx !== matches.length - 1 && <Divider />}
          </React.Fragment>
        ))
      : "Loading matches...";

  return (
    <Container style={{ marginTop: 16 }}>
      <div style={{ textAlign: "right" }}>
        <DateSort />
      </div>

      {m}
    </Container>
  );
};

export default MatchList;
