import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchTeamById } from '../services/teams'

export default function TeamDetail() {
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchTeamById(id);
      console.log(data);
    }
    getData();
  }, []);

  return (
    <div>TeamDetail</div>
  )
}
