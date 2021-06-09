import React from "react";
import { Router } from "react-router-dom";
import Routes from "./Routes";
import history from "./Routes/history";

function App() {
  return (
    <>
      <Router history={history}>
        <Routes />
      </Router>
    </>
  );
}

export default App;
