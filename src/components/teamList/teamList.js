import React, { useState } from "react";
import { useRowSelect } from "react-table";
import "./teamList.css";
import { useTable } from "react-table";
import { useLocation } from "react-router";
import { specialRules } from "../../data.js";
import { teams } from "../../data.js";

function TeamList(props) {
  const location = useLocation();
  const playerNames = location.state.newPlayers;
  const teamData = location.state.newTeamData || [];
  const uniq = [...new Set(teamData)];
  console.log(uniq);
  const data = React.useMemo(
    () => [
      ...teamData,
      //   {
      //     col1: "1",
      //     col2: "Einstein",
      //     col3: teamData[0],
      //   },
      //   { col1: "2", col2: "", col3: teamData[1] },
      //   { col1: "3", col2: "", col3: teamData[2] },
      //   { col1: "4", col2: "", col3: teamData[3] },
      //   { col1: "5", col2: "", col3: teamData[4] },
      //   { col1: "6", col2: "", col3: teamData[5] },
      //   { col1: "7", col2: "", col3: teamData[6] },
      //   { col1: "8", col2: "", col3: teamData[7] },
      //   { col1: "9", col2: "", col3: teamData[8] },
      //   { col1: "10", col2: "", col3: teamData[9] },
      //   { col1: "11", col2: "", col3: teamData[10] },
      //   { col1: "12", col2: "", col3: teamData[11] },
      //   { col1: "13", col2: "", col3: teamData[12] },
      //   { col1: "14", col2: "", col3: teamData[13] },
      //   { col1: "15", col2: "", col3: teamData[14] },
      //   { col1: "16", col2: "", col3: teamData[15] },
    ],
    [teamData]
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "",
        accessor: "col1",
      },
      {
        Header: "Name",
        accessor: "col2",
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
        accessor: "col11",
      },
      {
        Header: "MNG",
        accessor: "col12",
      },
      {
        Header: "NI",
        accessor: "col13",
      },
      {
        Header: "TR",
        accessor: "col14",
      },
      {
        Header: "Current value",
        accessor: "col15",
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
      <table
        {...getTableProps()}
        //   style={{ width: "100%", borderCollapse: "collapse", opacity: 0.7 }}
      >
        <thead
        //   style={{ borderCollapse: "collapse", textAlign: "left" }}
        >
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  // style={{
                  //   background: "DodgerBlue",
                  //   color: "white",
                  //   fontWeight: "bold",
                  //   border: "solid 2px DodgerBlue",
                  // }}
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
                      // style={{
                      //   padding: "10px",
                      //   border: "solid 2px DodgerBlue",
                      //   background: "LightSkyBlue",
                      // }}
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
      <div>
        {uniq.map((player) => {
          return player.skillsTraits.map((skill) => {
            console.log(skill);
            return (
              <div className="skills">
                {skill}: {specialRules[skill]}
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}

export default TeamList;

// function TeamList() {
//   const [raw, setRaw] = useState(0);

//   function rows() {
//     return (
//       <tr>
//           {()}
//       </tr>
//     );
//   }

//   return (
//     <div className="teamListMain">
//       <table className="teamListTable">
//         <tr>
//           <th>N</th>
//           <th>name</th>
//           <th>position</th>
//           <th>MA</th>
//           <th>ST</th>
//           <th>AG</th>
//           <th>PA</th>
//           <th>AV</th>
//           <th>skills</th>
//           <th>hiring fee</th>
//           <th>unspent spp</th>
//           <th>MNG</th>
//           <th>NI</th>
//           <th>TR</th>
//           <th>current value</th>
//         </tr>
//         <tr>
//           <th></th>
//         </tr>
//         <tr></tr>
//       </table>
//     </div>
//   );
// }

// export default TeamList;
