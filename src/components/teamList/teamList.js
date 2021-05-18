import React, { useEffect, useState } from "react";
import "./teamList.css";
import { useTable } from "react-table";
import { useLocation, useParams } from "react-router";
import { specialRules } from "../../data.js";
import { useStore } from "../teamCreator/teamCreator";
import _, { hasIn, sortedUniqBy } from "lodash";
import firebase from "../../config/firebase-config";
import { teams } from "../../data.js";

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
    addTr,
    removePlrFromTable,
    addPlr,
    removeItemCost,
    removePlayersQty,
    addPlayersQty,
    addItemCost,
    teamTemplate,
    removeRerrol,
    addRerrol,
    removeEnducement,
    addEnducement,
    addTreasury
  } = useStore((state) => state);
  const location = useLocation();

  useEffect(() => {
    const dataInSessionStorage = JSON.parse(
      window.sessionStorage.getItem("state")
    );
    if (state && !dataInSessionStorage) {
      window.sessionStorage.setItem("state", JSON.stringify(state));
    }
  }, [state]);

  useEffect(() => {
    const dataInSessionStorage = JSON.parse(
      window.sessionStorage.getItem("state")
    );
    console.log(state);
    if (!state.teamName && dataInSessionStorage) {
      refreshState(dataInSessionStorage);
    }
  }, [state]);

  function AddSkills() {
    const skills = [];
    state.teamPlayers.map((player) => {
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

  function addPlayers() {
    if (state.teamType) {
      return teams[state.teamType].players.map((player) => {
        return (
          <div>
            {player.position}
            <button
              onClick={() => {
                addPlr(player);
                addPlayersQty(player.position);
                addItemCost(player.cost);
              }}
            >
              +
            </button>
          </div>
        );
      });
    }
  }

  const data = React.useMemo(() => [...teamPlayers], [teamPlayers]);

  const columns = React.useMemo(
    () => [
      {
        Header: "N",
        accessor: (props, rowIndex) => (
          <input
            value={props.number}
            name="number"
            onChange={(event) => {
              window.sessionStorage.clear();
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
              window.sessionStorage.clear();
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
              window.sessionStorage.clear();
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
        accessor: "mng",
        // accessor: (props, rowIndex) => (
        //   <input
        //     value={props.mng}
        //     type="checkbox"
        //     checked={state.teamPlayers[rowIndex].mng}
        //     onChange={() => {
        //       console.log(state.teamPlayers[rowIndex].mng);
        //       changeMng(rowIndex);
        //     }}
        //   ></input>
        // ),
      },
      {
        Header: "NI",
        accessor: (props, rowIndex) => (
          <input
            value={props.ni}
            onChange={(event) => {
              window.sessionStorage.clear();
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
              window.sessionStorage.clear();
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
              window.sessionStorage.clear();
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
        Header: "DEL",
        accessor: (rowIndex) => (
          <button
            onClick={() => {
              removePlrFromTable(rowIndex);
              removeItemCost(rowIndex.cost);
              window.sessionStorage.clear();
              console.log(rowIndex);
            }}
          >
            X
          </button>
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
      <div>{addPlayers()}</div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>Add Treasury:
        <input
          onChange={(event) => {
            addTreasury(event.target.value);
            console.log(state.treasury);
          }}
          style={{ width: "200px" }}
        ></input>
      </div>
      <div>Treasury: {state.treasury}</div>
      <div>Total cost: {state.totalPrice}</div>
      <div>Dedicated fans: {state.teamEnducements.dedicatedFans}<button
        disabled={state.teamEnducements.dedicatedFans <= 0}
        onClick={() => {
          window.sessionStorage.clear();
          removeEnducement("dedicatedFans");
        }}
      >
        -
        </button>
        <button
          disabled={state.teamEnducements.cheerleaders >= 12}
          onClick={() => {
            window.sessionStorage.clear();
            addEnducement("dedicatedFans");
          }}
        >
          +
        </button></div>
      <div>Assistant coaches: {state.teamEnducements.assistantCoaches}<button
        disabled={state.teamEnducements.assistantCoaches <= 0}
        onClick={() => {
          window.sessionStorage.clear();
          removeEnducement("assistantCoaches");
          removeItemCost(10000);
        }}
      >
        -
        </button>
        <button
          disabled={state.teamEnducements.assistantCoaches >= 6}
          onClick={() => {
            window.sessionStorage.clear();
            addEnducement("assistantCoaches");
            addItemCost(10000);
          }}
        >
          +
        </button></div>
      <div>Cheerleaders: {state.teamEnducements.cheerleaders}<button
        disabled={state.teamEnducements.cheerleaders <= 0}
        onClick={() => {
          window.sessionStorage.clear();
          removeEnducement("cheerleaders");
          removeItemCost(10000);
        }}
      >
        -
        </button>
        <button
          disabled={state.teamEnducements.cheerleaders >= 12}
          onClick={() => {
            window.sessionStorage.clear();
            addEnducement("cheerleaders");
            addItemCost(10000);
          }}
        >
          +
        </button></div>
      <div>Apothecary: {state.teamEnducements.apothecary}<button
        disabled={state.teamEnducements.apothecary <= 0}
        onClick={() => {
          window.sessionStorage.clear();
          removeEnducement("apothecary");
          removeItemCost(50000);
        }}
      >
        -
        </button>
        <button
          disabled={state.teamEnducements.apothecary >= 1}
          onClick={() => {
            window.sessionStorage.clear();
            addEnducement("apothecary");
            addItemCost(50000);
          }}
        >
          +
        </button></div>
      <div>Team Wizzard: {state.teamEnducements.teamWizzard}<button
        disabled={state.teamEnducements.teamWizzard <= 0}
        onClick={() => {
          window.sessionStorage.clear();
          removeEnducement("teamWizzard");
          removeItemCost(150000);
        }}
      >
        -
        </button>
        <button
          disabled={state.teamEnducements.teamWizzard >= 1}
          onClick={() => {
            window.sessionStorage.clear();
            addEnducement("teamWizzard");
            addItemCost(150000);
          }}
        >
          +
        </button></div>
      <div>
        Re-rolls:{rerrols}
        {/* <button
          disabled={state.rerrols < 1}
          onClick={() => {
            removeRerrol();
            removeItemCost(teams[state.teamType].teamRerolls.price);
            console.log(teams[state.teamType].teamRerolls.price);
          }}
        >
          -
        </button> */}
        <button
          disabled={state.rerrols >= 8}
          onClick={() => {
            window.sessionStorage.clear();
            addRerrol();
            addItemCost(teams[state.teamType].teamRerolls.price);
            console.log();
          }}
        >
          +
        </button>
      </div>
      <button
        onClick={() => {
          const name = state.teamName;
          console.log(teamName);
          firebase
            .database()
            .ref("teams/" + name + "/teamType")
            .set(state.teamType);
          firebase
            .database()
            .ref("teams/" + name + "/players")
            .set(state.teamPlayers);
          firebase
            .database()
            .ref("teams/" + name + "/rerrols")
            .set(state.rerrols);
          firebase
            .database()
            .ref("teams/" + name + "/enducements")
            .set(state.teamEnducements);
          firebase
            .database()
            .ref("teams/" + name + "/totalPrice")
            .set(state.totalPrice);
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
