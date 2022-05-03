import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { fetchTeamById } from '../../services/teams'
import style from './TeamDetail.css';

export default function TeamDetail() {
  const { id } = useParams();
  const history = useHistory();
  const [team, setTeam] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchTeamById(id);
      setTeam(data);
      setLoading(false);
    }
    getData();
  }, []);

  function handleClick() {
    history.push('/');
  }

  return (
    <>
      <p className={style.goBack} onClick={handleClick}>&#60;&#60;&#60; view all the teams</p>
      {loading ? (
        <p>loading team info...</p>
      ) : (
        <>
          <h1>{team.name}</h1>
          <img className={style.logo} alt={`${team.name} logo`} src={team.logo} />
        </>
      )}
    </>
  )
}
