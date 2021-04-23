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
import "./teamCreator.css";

export const useStore = create((set) => ({
  teamType: "",
  teamPlayers: [],
  playersQty: {},
  teamName: 0,
  rerrols: 0,
  teamEnducements: {
    assistantCoaches: 0,
    cheerleaders: 0,
    apothecary: 0,
    teamWizzard: 0,
  },
  totalPrice: 0,
  addTeamType: (team) =>
    set((state) => ({
      ...state,
      teamType: team,
    })),
  refreshRerrols: (refState) =>
    set((state) => ({
      ...state,
      rerrols: refState,
    })),
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
  refreshState: (refState) =>
    set((state) => ({
      ...state,
      state: refState,
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
  addRerrol: () => {
    set((state) => ({
      ...state.rerolls,
      rerrols: state.rerrols + 1,
    }));
  },
  removeRerrol: () => {
    set((state) => ({
      ...state.rerrols,
      rerrols: state.rerrols - 1,
    }));
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
  addPlayersQty: (position) => {
    set((state) => {
      console.log(state.playersQty);
      const playersQtyCopy = state.playersQty;
      playersQtyCopy[position] = playersQtyCopy[position]
        ? playersQtyCopy[position] + 1
        : 1;
      return {
        ...state.playersQty,
        playersQty: playersQtyCopy,
      };
    });
  },
  removePlayersQty: (position) => {
    set((state) => {
      const playersQtyCopy = state.playersQty;
      playersQtyCopy[position] = playersQtyCopy[position] - 1;
      return {
        ...state.playersQty,
        playersQty: playersQtyCopy,
      };
    });
  },
  addItemCost: (cost) => {
    set((state) => {
      return {
        ...state.totalPrice,
        totalPrice: state.totalPrice + cost,
      };
    });
  },
  removeItemCost: (cost) => {
    set((state) => {
      return {
        ...state.totalPrice,
        totalPrice: state.totalPrice - cost,
      };
    });
  },
  addEnducement: (item) => {
    set((state) => {
      const teamEnducementsCopy = state.teamEnducements;
      teamEnducementsCopy[item] = teamEnducementsCopy[item] + 1;
      console.log(state.teamEnducements[item]);
      return {
        ...state.teamEnducements,
        teamEnducements: teamEnducementsCopy,
      };
    });
  },
  removeEnducement: (item) => {
    set((state) => {
      const teamEnducementsCopy = state.teamEnducements;
      teamEnducementsCopy[item] = teamEnducementsCopy[item] - 1;
      console.log(state.teamEnducements[item]);
      return {
        ...state.teamEnducements,
        teamEnducements: teamEnducementsCopy,
      };
    });
  },
  changeMng: (rowIndex) => {
    set((state) => {
      const teamPlayersCopy = [...state.teamPlayers];
      teamPlayersCopy[rowIndex].mng = !teamPlayersCopy[rowIndex].mng;
      console.log(state.teamPlayers[rowIndex].mng);
      return {
        ...state,
        teamPlayers: teamPlayersCopy,
      };
    });
  },
  addNi: (event, rowIndex) => {
    set((state) => {
      const teamPlayersCopy = [...state.teamPlayers];
      teamPlayersCopy[rowIndex].ni = event;
      return {
        ...state,
        teamPlayers: teamPlayersCopy,
        // state.teamPlayers[rowIndex].spp + event,
      };
    });
  },
  addTr: (event, rowIndex) => {
    set((state) => {
      const teamPlaersCopy = [...state.teamPlayers];
      teamPlaersCopy[rowIndex].tr = event;
      return {
        ...state,
        teamPlayers: teamPlaersCopy,
      };
    });
  },
  removePlrFromTable: (rowIndex) => {
    set((state) => {
      let teamPlayersCopy = [...state.teamPlayers];
      let Index = teamPlayersCopy.findIndex((index) => index === rowIndex);
      teamPlayersCopy.splice(Index, 1);

      console.log(Index);

      return {
        ...state,
        teamPlayers: teamPlayersCopy,
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
    addRerrol,
    removeRerrol,
    addPlayersQty,
    removePlayersQty,
    addItemCost,
    removeItemCost,
    addEnducement,
    removeEnducement,
  } = useStore((state) => state);

  const state = useStore();
  const params = useParams();
  const team = params.team;
  const [newPlayers, setNewPlayer] = useState([]);
  const [newTeamData, setNewTeamData] = useState([]);

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
    <div className="mainDiv">
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
                state.playersQty[player.position] <= 0 ||
                state.playersQty[player.position] === undefined
              }
              onClick={() => {
                removePlayersQty(player.position);
                removeItemCost(player.cost);
                console.log(state.playersQty);
              }}
            >
              -
            </button>
            <button
              disabled={state.playersQty[player.position] >= player.qty}
              onClick={() => {
                addPlr(player);
                addPlayersQty(player.position);
                addItemCost(player.cost);
              }}
            >
              +
            </button>
            {state.playersQty[player.position]
              ? state.playersQty[player.position]
              : 0}
            /{player.qty}
          </div>
        );
      })}
      <div>
        {newPlayers.map((player) => {
          return <div>{player}</div>;
        })}
      </div>
      <div>
        Re-rolls
        <button
          disabled={state.rerrols < 1}
          onClick={() => {
            removeRerrol();
            removeItemCost(teams[team].teamRerolls.price);
            console.log(state.rerrols);
          }}
        >
          -
        </button>
        <button
          disabled={state.rerrols >= 8}
          onClick={() => {
            addRerrol();
            addItemCost(teams[team].teamRerolls.price);
            console.log(state.rerolls);
          }}
        >
          +
        </button>
        {state.rerrols}
      </div>
      <div>
        Assistant coaches
        <button
          disabled={state.teamEnducements.assistantCoaches <= 0}
          onClick={() => {
            removeEnducement("assistantCoaches");
            removeItemCost(10000);
          }}
        >
          -
        </button>
        <button
          disabled={state.teamEnducements.assistantCoaches >= 6}
          onClick={() => {
            addEnducement("assistantCoaches");
            addItemCost(10000);
          }}
        >
          +
        </button>
        {state.teamEnducements.assistantCoaches}
      </div>
      <div>
        Cheerleaders
        <button
          disabled={state.teamEnducements.cheerleaders <= 0}
          onClick={() => {
            removeEnducement("cheerleaders");
            removeItemCost(10000);
          }}
        >
          -
        </button>
        <button
          disabled={state.teamEnducements.cheerleaders >= 12}
          onClick={() => {
            addEnducement("cheerleaders");
            addItemCost(10000);
          }}
        >
          +
        </button>
        {state.teamEnducements.cheerleaders}
      </div>
      <div>
        Apothecary
        <button
          disabled={state.teamEnducements.apothecary <= 0}
          onClick={() => {
            removeEnducement("apothecary");
            removeItemCost(50000);
          }}
        >
          -
        </button>
        <button
          disabled={state.teamEnducements.apothecary >= 1}
          onClick={() => {
            addEnducement("apothecary");
            addItemCost(50000);
          }}
        >
          +
        </button>
        {state.teamEnducements.apothecary}
      </div>
      <div>
        Team Wizzard
        <button
          disabled={state.teamEnducements.teamWizzard <= 0}
          onClick={() => {
            removeEnducement("teamWizzard");
            removeItemCost(150000);
          }}
        >
          -
        </button>
        <button
          disabled={state.teamEnducements.teamWizzard >= 1}
          onClick={() => {
            addEnducement("teamWizzard");
            addItemCost(150000);
          }}
        >
          +
        </button>
        {state.teamEnducements.teamWizzard}
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
            pathname: "/teamlist/" + team,
            state: {
              newPlayers,
              newTeamData,
            },
          }}
        >
          Create team
        </Link>
      </button>
      <div>Total price: {state.totalPrice}</div>
      <button
        onClick={() => {
          localStorage.clear();
        }}
      >
        RESET
      </button>
      <button>
        <Link to="/teamchoise">Go back</Link>
      </button>
    </div>
  );
}

export default TeamCreator;
