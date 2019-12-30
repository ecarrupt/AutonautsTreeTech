import React from "react";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "./MainPage";

const App: React.FC = () => {
  return (
    <Router>
      <MainPage></MainPage>
    </Router>
  );
};

export default App;
