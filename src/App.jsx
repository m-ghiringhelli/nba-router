import { useEffect, useState } from "react";
import { fetchTeams } from "./services/teams";
import style from './App.css';

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
    <div className={style.teamContainer}>
      {teams.map((team) => (
        <div key={team.id} className={style.teamCard}>
          <img alt={`${team.name} logo`} src={team.logo} />
        </div>
      ))}
    </div>
  )
}


