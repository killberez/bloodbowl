import React, { useEffect, useState } from "react";
import "./mainPaige.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./mainPaige.css";
import button from "./createTeam.jpg";
import { googleProvider } from "../../config/authMethod";
import socialMediaAuth from "../../service/auth";
import firebase from "firebase";
import { useStore } from "../teamCreator/teamCreator.js";

function MainPaige() {
  const state = useStore();
  const [teamsNames, setTeamsNames] = useState("");
  const [teamsData, setTeamsData] = useState("");

  useEffect(() => {
    const dataRef = firebase.database().ref("teams");
    dataRef.on("value", (snapshot) => {
      const dbData = snapshot.val();
      const namesArray = [];
      for (const team in dbData) {
        namesArray.push(team);
      }
      setTeamsNames(namesArray);
      setTeamsData(dbData);
      console.log(dbData);
      console.log(teamsNames);
      console.log(teamsData);
    });
  }, []);

  const putTeamInState = (name) => {
    const team = name;
    state.teamName = team;
    console.log(team);
    state.teamPlayers = teamsData[name].players;
    state.rerrols = teamsData[name].rerrols;
    state.enducements = teamsData[name].enducements;

    console.log(teamsData[team]);
  };

  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };

  return (
    <div className="mainDiv">
      <button onClick={() => handleOnClick(googleProvider)}>Google</button>
      <div>
        <Link to="teamchoise">
          <img src={button} />
        </Link>
      </div>
      <div>
        {teamsNames
          ? teamsNames.map((team) => {
              return (
                <button onClick={() => putTeamInState(team)}>
                  <Link to={"/teamlist/" + team}>{team}</Link>
                </button>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default MainPaige;
