import React from "react";
import Header from "./components/presentational/Header";
import MatchList from "./components/presentational/MatchList";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
      <Header
        title="R6: Siege (PC) 5on5 Open Cup #55 Spain"
        date="21st March 2018"
      />
      <MatchList/>
    </div>
  );
}

export default App;
