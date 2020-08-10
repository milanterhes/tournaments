import React from "react";
import { Provider } from "react-redux";
import Tournament from "./components/container/Tournament";
import store from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 10,
        }}
      >
        <Router>
          <Switch>
            <Route path="/:id?" children={<Tournament />} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
