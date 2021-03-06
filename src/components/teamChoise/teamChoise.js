import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { useStore } from "../teamCreator/teamCreator.js"


const options = [
  {
    label: "-",
    value: "nothing",
  },
  {
    label: "Black Orcs",
    value: "blackOrcs",
  },
  {
    label: "Humans",
    value: "humans",
  },
  {
    label: "Necromantic Horror Teams",
    value: "necromanticHorrorTeams",
  },
  {
    label: "Chaos Chosen Teams",
    value: "chaosChosenTeams",
  },
  {
    label: "Ogre Teams",
    value: "ogreTeams",
  },
  {
    label: "Dwarfs",
    value: "dwarfs",
  },
  {
    label: "Skaven Teams",
    value: "skavenTeams",
  },
];

function TeamChoise() {
  // const state = useStore()
  const [team, setTeam] = useState("");
  const { addTeamType } = useStore((state) => state);

  return (
    <div className="mainDiv">
      <select
        value={team}
        onChange={(event) => {
          setTeam(event.target.value);
        }}
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      <button>
        <Link to="/">Back</Link>
      </button>
      <button onClick={() => addTeamType(team)}>
        <Link to={"/teamcreator/" + team}>Next</Link>
      </button>
    </div>
  );
}

export default TeamChoise;
