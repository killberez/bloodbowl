import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TeamCreator from "../teamCreator/teamCreator.js";

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
];

function TeamChoise() {
  const [team, setTeam] = useState("");

  return (
    <div>
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
      <button>
        <Link to={"/teamcreator/" + team}>Next</Link>
      </button>
      {/* <TeamCreator data={team} /> */}
    </div>
  );
}

export default TeamChoise;
