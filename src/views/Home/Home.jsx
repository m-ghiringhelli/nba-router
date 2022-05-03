import React from 'react';
import { Link } from 'react-router-dom';
import style from './Home.css';

export default function Home({ teams }) {
  return (
    <>
      {teams.map((team) => (
        <div key={team.id} className={style.teamCard}>
          <Link to={`/team/${team.id}`}>
            <img alt={`${team.name} logo`} src={team.logo} />
          </Link>
        </div>
      ))}  
    </>
  )
}
