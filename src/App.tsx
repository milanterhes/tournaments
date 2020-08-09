import React from "react";
import { Provider } from "react-redux";
import Tournament from "./components/container/Tournament";
import store from "./store";

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
        <Tournament />
      </div>
    </Provider>
  );
}

export default App;
