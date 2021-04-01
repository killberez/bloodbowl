import React from "react";
import "./mainPaige.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./mainPaige.css";

function MainPaige() {
  return (
    <div className="mainDiv">
      <div>
        <Link to="teamchoise">Create team</Link>
      </div>
    </div>
  );
}

export default MainPaige;
