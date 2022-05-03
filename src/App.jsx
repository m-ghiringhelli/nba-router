import { useEffect, useState } from "react";
import { fetchTeams } from "./services/teams";
import style from './App.css';
import Home from "./views/Home/Home";
import { Switch, Route } from "react-router-dom";
import TeamDetail from "./views/TeamDetail";

export default function App() {
  const [teams, setTeams] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
      const data = await fetchTeams();
      setTeams(data);
    }
    getData();
  }, []);

  return (
    <Switch>
      <Route exact path='/'>
        <div className={style.teamContainer}>
          <Home teams={teams} />
        </div>
      </Route>
      <Route path='/team/:id'>
        <TeamDetail />
      </Route>
    </Switch>
  )
}


