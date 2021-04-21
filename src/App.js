import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TeamList from "./components/teamList/teamList.js";
import TeamChoise from "./components/teamChoise/teamChoise.js";
import MainPaige from "./components/mainPaige/mainPaige.js";
import TeamCreator from "./components/teamCreator/teamCreator.js";
import TeamsPage from "./components/teams/teams.js";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <MainPaige />
          </Route>
          <Route exact path="/teamchoise">
            <TeamChoise />
          </Route>
          <Route exact path="/teamcreator/:team">
            <TeamCreator />
          </Route>
          <Route exact path="/teamlist/:team">
            <TeamList />
          </Route>
          <Route exact path="/teams">
            <TeamsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
