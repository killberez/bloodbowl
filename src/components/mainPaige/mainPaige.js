import React, { useEffect, useState } from "react";
import "./mainPaige.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./mainPaige.css";
import button from "./createTeam.jpg";
import { googleProvider } from "../../config/authMethod";
import socialMediaAuth from "../../service/auth";
import firebase from "firebase";
import { useStore } from "../teamCreator/teamCreator.js";
import { teams } from "../../data";

function MainPaige() {
  const { putTeamInState, addTeamTemplate, removeState } = useStore(
    (state) => state
  );
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
    });
  }, []);

  const handleOnClick = async (provider) => {
    const user = await socialMediaAuth(provider);
    console.log(user.displayName);
  };

  return (
    <div className="mainDiv">
      <button
        onClick={() => {
          window.sessionStorage.clear();
          handleOnClick(googleProvider);
        }}
      >
        Google
      </button>
      <div>
        <Link to="teamchoise">
          <img
            onClick={() => {
              window.sessionStorage.clear();
              removeState();
            }}
            src={button}
          />
        </Link>
      </div>
      <div>
        {teamsNames
          ? teamsNames.map((teamName) => {
              return (
                <button
                  onClick={() => {
                    window.sessionStorage.clear();
                    putTeamInState(teamName, teamsData[teamName]);
                    addTeamTemplate(teams[teamsData[teamName].teamType]);
                    console.log(teamsData[teamName].teamType);
                  }}
                >
                  <Link to={"/teamlist/" + teamName}>{teamName}</Link>
                </button>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default MainPaige;
