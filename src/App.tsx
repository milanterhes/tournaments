import React from "react";
import Tournament from "./components/presentational/Tournament";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Tournament
        sortDesc={false}
        matches={[
          {
            time: "12:51",
            team1: {
              name: "Black Lotus",
              points: 4,
              winner: true,
            },
            team2: {
              name: "Team Lotus",
              points: 2,
              winner: false,
            },
          },
          {
            time: "12:51",
            team1: {
              name: "Black Lotus",
              points: 4,
              winner: true,
            },
            team2: {
              name: "Team Lotus",
              points: 2,
              winner: false,
            },
          },
          {
            time: "12:51",
            team1: {
              name: "Black Lotus",
              points: 4,
              winner: true,
            },
            team2: {
              name: "Team Lotus",
              points: 2,
              winner: false,
            },
          },
          {
            time: "12:51",
            team1: {
              name: "Black Lotus",
              points: 2,
              winner: false,
            },
            team2: {
              name: "Team Lotus",
              points: 4,
              winner: true,
            },
          },
        ]}
        header={{
          date: "21st March 2018",
          title: "R6: Siege (PC) 5on5 Open Cup #55 Spain",
        }}
      />
    </div>
  );
}

export default App;
