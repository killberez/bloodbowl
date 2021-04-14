import React from "react";
import "./mainPaige.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./mainPaige.css";
import button from "./createTeam.jpg";
import { googleProvider } from "../../config/authMethod";
import socialMediaAuth from "../../service/auth";
import firebase from "firebase"

function MainPaige() {
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider)
    console.log(res)
  }
  function writeUserData(userId, name, email) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
    });
  }


  return (
    <div className="mainDiv">
      <button onClick={() => handleOnClick(googleProvider)}>google</button>
      <button onClick={() => writeUserData(123, "Taras", "add")}>data</button>
      <div>
        <Link to="teamchoise">
          <img src={button} />
        </Link>
      </div>
    </div>
  );
}

export default MainPaige;
