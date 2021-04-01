import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams,
} from "react-router-dom";
import { teams } from "../../data.js";
import create from "zustand";
import _ from "lodash";

export const useStore = create((set) => ({
  teamPlayers: [],
  teamName: 0,
  teamQty: 0,
  refreshName: (refState) =>
    set((state) => ({
      ...state,
      teamName: refState,
    })),
  addTeamName: (event) =>
    set((state) => ({
      ...state.teamName,
      teamName: event,
    })),
  refreshState: (reState) =>
    set((state) => ({
      ...state,
      teamPlayers: reState,
    })),
  addPlr: (player) =>
    set((state) => ({
      ...state,
      teamPlayers: state.teamPlayers.concat({ ...player }),
    })),
  removePlr: (index) => {
    set((state) => {
      const teamPlayersCopy = [...state.teamPlayers];
      teamPlayersCopy.splice(index, 1);
      return {
        ...state,
        teamPlayers: teamPlayersCopy,
      };
    });
  },
  addNumber: (event, rowIndex) => {
    set((state) => {
      const teamPlayersCopy = [...state.teamPlayers];
      teamPlayersCopy[rowIndex].number = event;
      return {
        ...state,
        teamPlayers: teamPlayersCopy,
      };
    });
  },
  addName: (event, rowIndex) => {
    set((state) => {
      const teamPlaersCopy = [...state.teamPlayers];
      teamPlaersCopy[rowIndex].name = event;
      return {
        ...state,
        teamPlayers: teamPlaersCopy,
      };
    });
  },
  addSpp: (event, rowIndex) => {
    set((state) => {
      const teamPlayersCopy = [...state.teamPlayers];
      teamPlayersCopy[rowIndex].spp = event;
      return {
        ...state,
        teamPlayers: teamPlayersCopy,
        // state.teamPlayers[rowIndex].spp + event,
      };
    });
  },
  addCurrentValue: (event, rowIndex) => {
    set((state) => {
      const teamPlaersCopy = [...state.teamPlayers];
      teamPlaersCopy[rowIndex].currentValue = event;
      return {
        ...state,
        teamPlayers: teamPlaersCopy,
      };
    });
  },
}));

function TeamCreator(props) {
  const {
    teamName,
    refAllState,
    teamPlayers,
    addPlr,
    removePlr,
    refreshState,
    addTeamName,
  } = useStore((state) => state);

  const state = useStore();

  const params = useParams();
  const team = params.team;
  const [newPlayers, setNewPlayer] = useState([]);
  const [newTeamData, setNewTeamData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  // const [teamName, setTeamName] = useState("");
  const [teamPlayersQty, setTeamPlayersQty] = useState({});
  const [teamEnducements, setTeamEnducements] = useState({
    reRolls: 0,
    fanFactor: 0,
    assistantCoaches: 0,
    cheerleaders: 0,
    apothecary: 0,
    teamWizzard: 0,
  });

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

  return (
    <div>
      Team name
      <input
        onChange={(event) => {
          addTeamName(event.target.value);
          console.log(state.teamName);
        }}
        style={{ width: "200px" }}
      ></input>
      {teams[team].players.map((player) => {
        return (
          <div>
            <div>{player.position}</div>
            <button
              disabled={
                teamPlayersQty[player.position] <= 0 ||
                teamPlayersQty[player.position] === undefined
              }
              onClick={() => {
                setTeamPlayersQty({
                  ...teamPlayersQty,
                  [player.position]: teamPlayersQty[player.position] - 1,
                });
                const index = teamPlayers.indexOf(player);
                removePlr(index);
                console.log(teamPlayers);
                // const playerIndex = newPlayers.indexOf(player);
                // newTeamData.splice(playerIndex, 1);
                // newPlayers.splice(playerIndex, 1);
                setTotalPrice(totalPrice - player.cost);
              }}
            >
              -
            </button>
            <button
              disabled={teamPlayersQty[player.position] >= player.qty}
              onClick={() => {
                addPlr(player);
                console.log(teamPlayers);
                setTeamPlayersQty({
                  ...teamPlayersQty,
                  [player.position]: teamPlayersQty[player.position]
                    ? teamPlayersQty[player.position] + 1
                    : 1,
                });
                setTotalPrice(totalPrice + player.cost);
              }}
            >
              +
            </button>
            {teamPlayersQty[player.position]}/{player.qty}
          </div>
        );
      })}
      {/* {teams[team].players.map((player) => {
        return (
          <div>
            {player.position}
            <button
              disabled={
                teamPlayersQty[player.position] <= 0 ||
                teamPlayersQty[player.position] === undefined
              }
              onClick={() => {
                setTeamPlayersQty({
                  ...teamPlayersQty,
                  [player.position]: teamPlayersQty[player.position] - 1,
                });
                const playerIndex = newPlayers.indexOf(player);
                newTeamData.splice(playerIndex, 1);
                newPlayers.splice(playerIndex, 1);
                setTotalPrice(totalPrice - player.cost);
              }}
            >
              -
            </button>
            <button
              disabled={teamPlayersQty[player.position] >= player.qty}
              onClick={() => {
                setTeamPlayersQty({
                  ...teamPlayersQty,
                  [player.position]: teamPlayersQty[player.position]
                    ? teamPlayersQty[player.position] + 1
                    : 1,
                });
                setNewPlayer(newPlayers.concat(player.position));
                setNewTeamData(newTeamData.concat({ ...player }));
                setTotalPrice(totalPrice + player.cost);
                console.log(newTeamData);
                // setNewTeamData((state) => {
                //   const stateCopy = [...state];
                //   stateCopy[id] = player;
                //   return stateCopy;
                // });
              }}
            >
              +
            </button>
            {teamPlayersQty[player.position]}/{player.qty}
          </div>
        );
      })} */}
      <div>
        {newPlayers.map((player) => {
          return <div>{player}</div>;
        })}
      </div>
      <div>
        Re-rolls
        <button
          disabled={teamEnducements.reRolls < 1}
          onClick={() => {
            setTeamEnducements({
              ...teamEnducements,
              reRolls: teamEnducements.reRolls - 1,
            });
            setTotalPrice(totalPrice - teams[team].teamRerolls.price);
          }}
        >
          -
        </button>
        <button
          disabled={teamEnducements.reRolls >= 8}
          onClick={() => {
            setTeamEnducements({
              ...teamEnducements,
              reRolls: teamEnducements.reRolls + 1,
            });
            setTotalPrice(totalPrice + teams[team].teamRerolls.price);
          }}
        >
          +
        </button>
        {teamEnducements.reRolls}
      </div>
      <div>
        Fan factor
        <button
          onClick={() => {
            setTeamEnducements({
              ...teamEnducements,
              fanFactor: teamEnducements.fanFactor - 1,
            });
            setTotalPrice(totalPrice - 10000);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setTeamEnducements({
              ...teamEnducements,
              fanFactor: teamEnducements.fanFactor + 1,
            });
            setTotalPrice(totalPrice + 10000);
          }}
        >
          +
        </button>
        {teamEnducements.fanFactor}
      </div>
      <div>
        Assistant coaches
        <button
          disabled={teamEnducements.assistantCoaches <= 0}
          onClick={() => {
            setTeamEnducements({
              ...teamEnducements,
              assistantCoaches: teamEnducements.assistantCoaches - 1,
            });
            setTotalPrice(totalPrice - 10000);
          }}
        >
          -
        </button>
        <button
          disabled={teamEnducements.assistantCoaches >= 6}
          onClick={() => {
            setTeamEnducements({
              ...teamEnducements,
              assistantCoaches: teamEnducements.assistantCoaches + 1,
            });
            setTotalPrice(totalPrice + 10000);
          }}
        >
          +
        </button>
        {teamEnducements.assistantCoaches}
      </div>
      <div>
        Cheerleaders
        <button
          disabled={teamEnducements.cheerleaders <= 0}
          onClick={() => {
            setTeamEnducements({
              ...teamEnducements,
              cheerleaders: teamEnducements.cheerleaders - 1,
            });
            setTotalPrice(totalPrice - 10000);
          }}
        >
          -
        </button>
        <button
          disabled={teamEnducements.cheerleaders >= 12}
          onClick={() => {
            setTeamEnducements({
              ...teamEnducements,
              cheerleaders: teamEnducements.cheerleaders + 1,
            });
            setTotalPrice(totalPrice + 10000);
          }}
        >
          +
        </button>
      </div>
      <div>
        Apothecary
        <button
          disabled={teamEnducements.apothecary <= 0}
          onClick={() => {
            setTeamEnducements({
              ...teamEnducements,
              apothecary: teamEnducements.apothecary - 1,
            });
            setTotalPrice(totalPrice - 50000);
          }}
        >
          -
        </button>
        <button
          disabled={teamEnducements.apothecary >= 1}
          onClick={() => {
            setTeamEnducements({
              ...teamEnducements,
              apothecary: teamEnducements.apothecary + 1,
            });
            setTotalPrice(totalPrice + 50000);
          }}
        >
          +
        </button>
      </div>
      <div>
        Team Wizzard
        <button
          disabled={teamEnducements.teamWizzard <= 0}
          onClick={() => {
            setTeamEnducements({
              ...teamEnducements,
              teamWizzard: teamEnducements.teamWizzard - 1,
            });
            setTotalPrice(totalPrice - 150000);
          }}
        >
          -
        </button>
        <button
          disabled={teamEnducements.teamWizzard >= 1}
          onClick={() => {
            setTeamEnducements({
              ...teamEnducements,
              teamWizzard: teamEnducements.teamWizzard + 1,
            });
            setTotalPrice(totalPrice + 150000);
          }}
        >
          +
        </button>
      </div>
      <button
        onClick={() => {
          setNewTeamData((state) => {
            return state.map((player, i) => {
              player.n = i;
            });
          });
          console.log(newTeamData);
        }}
      >
        Submit
      </button>
      <button>
        <Link
          to={{
            pathname: "/teamlist",
            state: {
              newPlayers,
              newTeamData,
              // teamName,
              teamEnducements,
            },
          }}
        >
          Create team
        </Link>
      </button>
      <div>Total price: {totalPrice}</div>
      <button>
        <Link to="/teamchoise">Go back</Link>
      </button>
    </div>
  );
}
// function AddPlayer() {
//   return (
//     <div>
//       <input></input>
//       <button>submit</button>
//     </div>
//   );
// }

// function TeamCreator(props) {
//   const [forms, setForms] = useState({});
//   const location = useLocation();
//   const params = useParams();
//   console.log(forms);
//   const team = params.team;
//   //   console.log(teams[location.state.team]);
//   //   const team = teams[location.state.team];
//   return (
//     <div>
//       <button onClick={() => console.log(teams[team].players[0].position)}>
//         1
//       </button>
//       <div>
//         {teams[team].players.map((player) => {
//           return (
//             <div>
//               <div>{player.position}</div>
//               {forms[player.position] &&
//                 forms[player.position].map((player) => <AddPlayer />)}
//               {/* <button onClick={removePlayer()}>-</button> */}
//               <button
//                 onClick={() =>
//                   setForms({
//                     ...forms,
//                     [player.position]: [
//                       ...(forms[player.position] || []),
//                       { name: "test", qty: 1 },
//                     ],
//                   })
//                 }
//               >
//                 +
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

export default TeamCreator;
