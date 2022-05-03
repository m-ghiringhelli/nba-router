import { useEffect, useState } from "react";
import { fetchTeams } from "./services/teams";

export default function App() {
  const [teams, setTeams] = useState([]);
  
  

  useEffect(() => {
    const getData = async () => {
      const data = await fetchTeams();
    }
    getData();
  }, []);

  return (
    <div>

    </div>
  )
}


