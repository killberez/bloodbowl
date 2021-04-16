import React, { useEffect, useState } from "react";
import { useRowSelect } from "react-table";
import "./teamList.css";
import { useTable } from "react-table";
import { useLocation } from "react-router";
import { specialRules } from "../../data.js";
import { useStore } from "../teamCreator/teamCreator";
import _, { sortedUniqBy } from "lodash";
import firebase from "../../config/firebase-config"

function TeamList(props) {
  const state = useStore();
  const {
    refreshName,
    teamPlayers,
    addSpp,
    addName,
    addCurrentValue,
    addNumber,
    refreshState,
    teamName,
    rerrols,
    refreshRerrols,
    changeMng,
    addNi,
    addTr
  } = useStore((state) => state);
  const location = useLocation();
  // const teamData = location.state.newTeamData || [];
  // const uniq = [...new Set(teamData)];

  function AddSkills() {
    const skills = [];
    teamPlayers.map((player) => {
      player.skillsTraits.map((skill) => {
        skills.push(skill);
      });
    });
    const uniqSkills = [...new Set(skills)];
    return uniqSkills.map((skill) => {
      return (
        <div
          className="skills"
          dangerouslySetInnerHTML={{ __html: specialRules[skill] }}
        ></div>
      );
    });
  }

  // useEffect(() => {
  //   const refState = window.localStorage.getItem("rerrols");
  //   if (
  //     rerrols.length &&
  //     (!refState || !_.isEqual(rerrols, JSON.parse(refState)))
  //   ) {
  //     window.localStorage.setItem("rerrols", JSON.stringify(rerrols));
  //   }
  // }, [rerrols]);

  // useEffect(() => {
  //   const refState = window.localStorage.getItem("rerrols");
  //   if (!rerrols.length && refState) {
  //     refreshRerrols(JSON.parse(refState));
  //   }
  // }, [rerrols]);

  // useEffect(() => {
  //   const refState = window.localStorage.getItem("team-name");
  //   if (
  //     teamName.length &&
  //     (!refState || !_.isEqual(teamName, JSON.parse(refState)))
  //   ) {
  //     window.localStorage.setItem("team-name", JSON.stringify(teamName));
  //   }
  // }, [teamName]);

  // useEffect(() => {
  //   const refState = window.localStorage.getItem("team-name");
  //   if (!teamName.length && refState) {
  //     refreshName(JSON.parse(refState));
  //   }
  // }, [teamName]);

  // useEffect(() => {
  //   const refState = window.localStorage.getItem("my-team-table");
  //   if (
  //     teamPlayers.length &&
  //     (!refState || !_.isEqual(teamPlayers, JSON.parse(refState)))
  //   ) {
  //     window.localStorage.setItem("my-team-table", JSON.stringify(teamPlayers));
  //   }
  // }, [teamPlayers]);

  // useEffect(() => {
  //   const refState = window.localStorage.getItem("my-team-table");
  //   if (!teamPlayers.length && refState) {
  //     refreshState(JSON.parse(refState));
  //   }
  // }, [teamPlayers]);

  const data = React.useMemo(
    () => [
      ...teamPlayers,
    ],
    [teamPlayers]
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "N",
        accessor: (props, rowIndex) => (
          <input
            value={props.number}
            name="number"
            onChange={(event) => {
              addNumber(event.target.value, rowIndex);
              console.log(state.teamPlayers);
            }}
            style={{
              color: "white",
              width: "100%",
              height: "100%",
              background: "transparent",
              border: "none",
              outline: "none",
            }}
          ></input>
        ),
      },
      {
        Header: "Name",
        accessor: (props, rowIndex) => (
          <input
            value={props.name}
            name="name"
            onChange={(event) => {
              addName(event.target.value, rowIndex);
              console.log();
              console.log(event.target.name, "-", event.target.value);
            }}
            style={{
              color: "white",
              width: "100%",
              height: "100%",
              background: "transparent",
              border: "none",
              outline: "none",
            }}
          ></input>
        ),
      },
      {
        Header: "Position",
        accessor: "position",
      },
      {
        Header: "MA",
        accessor: "ma",
      },
      {
        Header: "ST",
        accessor: "st",
      },
      {
        Header: "AG",
        accessor: "ag",
      },
      {
        Header: "PA",
        accessor: "pa",
      },
      {
        Header: "AV",
        accessor: "av",
      },
      {
        Header: "Skills",
        accessor: "skillsTraits",
      },
      {
        Header: "Hiring fee",
        accessor: "cost",
      },
      {
        Header: "Unspent SPP",
        accessor: (props, rowIndex) => (
          <input
            value={props.spp}
            name="spp"
            onChange={(event) => {
              addSpp(+event.target.value, rowIndex);
              console.log();
              console.log(event.target.name, "-", event.target.value);
            }}
            style={{
              color: "white",
              width: "100%",
              height: "100%",
              background: "transparent",
              border: "none",
              outline: "none",
            }}
          ></input>
        ),
      },
      {
        Header: "MNG",
        accessor: (props, rowIndex) => (
          <input
            value={props.mng}
            type="checkbox"
            checked={state.teamPlayers[rowIndex].mng}
            onChange={() => {
              console.log(state.teamPlayers[rowIndex].mng)
              changeMng(rowIndex)

            }}
          ></input>
        ),
      },
      {
        Header: "NI",
        accessor: (props, rowIndex) => (
          <input
            value={props.ni}
            onChange={(event) => {
              addNi(+event.target.value, rowIndex);
            }}
            style={{
              color: "white",
              width: "100%",
              height: "100%",
              background: "transparent",
              border: "none",
              outline: "none",
            }}
          ></input>
        ),
      },
      {
        Header: "TR",
        accessor: (props, rowIndex) => (
          <input
            value={props.tr}
            name="currentValue"
            onChange={(event) => {
              addTr(event.target.value, rowIndex);
              console.log(event.target.value);
            }}
            style={{
              color: "white",
              width: "100%",
              height: "100%",
              background: "transparent",
              border: "none",
              outline: "none",
            }}
          ></input>
        ),
      },
      {
        Header: "Current value",
        accessor: (props, rowIndex) => (
          <input
            value={props.currentValue}
            name="currentValue"
            onChange={(event) => {
              addCurrentValue(+event.target.value, rowIndex);
              console.log();
              console.log(event.target.name, "-", event.target.value);
            }}
            style={{
              color: "white",
              width: "100%",
              height: "100%",
              background: "transparent",
              border: "none",
              outline: "none",
            }}
          ></input>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div>
      {teamName}
      <table
        {...getTableProps()}
      >
        <thead
        >
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr className="tableBody" {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>Total cost: {state.totalPrice}</div>
      <div>Assistant coaches: {state.teamEnducements.assistantCoaches}</div>
      <div>Cheerleaders: {state.teamEnducements.cheerleaders}</div>
      <div>Apothecary: {state.teamEnducements.apothecary}</div>
      <div>Team Wizzard: {state.teamEnducements.teamWizzard}</div>
      <div>Re-rolls:{rerrols}</div>
      <button
        onClick={() => {
          const name = state.teamName
          firebase.database().ref('teams/' + name + "/players").set(state.teamPlayers)
          firebase.database().ref('teams/' + name + "/rerrols").set(state.rerrols)
          firebase.database().ref('teams/' + name + "/enducements").set(state.teamEnducements)
        }}
      >
        Save Team
      </button>
      <div>
        <AddSkills />
      </div>
    </div>
  );
}

export default TeamList;