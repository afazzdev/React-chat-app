import React from "react";
import { HashRouter as Router } from "react-router-dom";

import Sidebar from "../Sidebar";
import MainWindow from "../MainWindow";

const Dashboard = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <MainWindow />
      </div>
    </Router>
  );
};

export default Dashboard;
