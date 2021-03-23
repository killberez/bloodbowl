import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams,
} from "react-router-dom";
import { teams } from "../../data.js";

function TeamCreator() {
  const params = useParams();
  const team = params.team;
  const [newPlayers, setNewPlayer] = useState([]);
  const [newTeamData, setNewTeamData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <div>
      {teams[team].players.map((player) => {
        return (
          <div>
            {player.position}
            <button
              onClick={() => {
                setNewPlayer(newPlayers.concat(player.position));
                setNewTeamData(newTeamData.concat(player));
                setTotalPrice(totalPrice + player.cost);
                // setNewTeamData((state) => {
                //   const stateCopy = [...state];
                //   stateCopy[id] = player;
                //   return stateCopy;
                // });
                // console.log(newPlayers);
                console.log(newTeamData);
                console.log(totalPrice);
              }}
            >
              Add new player
            </button>
          </div>
        );
      })}
      <div>
        {newPlayers.map((player) => {
          return <div>{player}</div>;
        })}
      </div>
      <button>
        <Link
          to={{
            pathname: "/teamlist",
            state: { newPlayers, newTeamData },
          }}
        >
          Create tem
        </Link>
      </button>
      <div>Total price: {totalPrice}</div>
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
