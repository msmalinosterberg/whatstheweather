import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MasterView from "./Components/MasterView";
import "./App.css";

function App() {
  return (
    <Router>
      <MasterView />
    </Router>
  );
}

export default App;
