import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchMatches } from '../../redux/features/api/apiMatchesSlice';

const Matchs = () => {
  const leaguesState = useSelector(state => state.apiMatches.matchesLeague);
  const leagueArgentinaState = useSelector(state => state.apiMatches.newArray);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMatches(2014))
  }, []);

  return (
    <div>Matchs</div>
  )
}

export default Matchs