import React from "react";
import "./mainPaige.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./mainPaige.css";
import button from "./createTeam.jpg";

function MainPaige() {
  return (
    <div className="mainDiv">
      <div>
        <Link to="teamchoise">
          <img src={button} />
        </Link>
      </div>
    </div>
  );
}

export default MainPaige;
