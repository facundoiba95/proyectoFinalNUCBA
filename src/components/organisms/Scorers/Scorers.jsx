import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TableContainerStyles } from './ScorersStyles';
import { fetchScorersByLeague, fetchScorersByLeagueArgentina } from '../../../redux/features/api/apiScorersSlice';
import { scorersStates } from '../../../libs/getScorersStates';
import Loader from '../../molecules/Loader/Loader';
import { ApiContext } from '../../../context/ApiContext';

const Scorers = ({idLeague}) => {
  // const localStorageScorersArgentina = JSON.parse(localStorage.getItem('scorersLeagueArgentina'))
  // const localStorageScorers = JSON.parse(localStorage.getItem('scorersLeague'))
  
  const params = useParams();
  const dispatch = useDispatch();
  const dataScore = useSelector(state => params.idLeague == 152 ? state.apiScorers.scorersByLeagueArgentina : state.apiScorers.scorersByLeague);
  const isLoading = useSelector(state => state.apiScorers.isLoading);
  const { setIsAll } = useContext(ApiContext);

  const renderScorers = (dataScore) => {
    setIsAll(false)
    let position = 0;
    return dataScore.map(item => {
      const namePlayer = item.player.name;
      const nameTeam = item.statistics === undefined ? item.team.name : item.statistics[0].team.name ;
      const goals = item.goals ? item.goals : item.statistics[0].goals.total; ;
      const id = item.player.id;
      const imgTeam = item.statistics === undefined ? item.team.crest : item.statistics[0].team.logo;
      const assists = item.statistics === undefined ? item.assists : item.statistics[0].goals.assists;

      return (
        <tr key={id} className='tr'>
          <td className='td'>{position= position+1}</td>
          <td className='td'>{namePlayer}</td>
          <td className='td team'>
            <img src={imgTeam}/>
            {nameTeam}
          </td>
          <td className='td'>{assists}</td>
          <td className='td'>{goals}</td>
        </tr>
      )
    })
  }

  useEffect(()=> {
    idLeague === 152
    ? dispatch(fetchScorersByLeagueArgentina())
    : dispatch(fetchScorersByLeague(scorersStates[ idLeague ]))
 },[ idLeague ])

  return (
    <>
    {
      dataScore.length ?
      <TableContainerStyles>
        <thead className='headTable'>
          <tr className='head'>
            <th className='th'>Rank</th>
            <th className='th'>Jugador</th>
            <th className='th'>Equipo</th>
            <th className='th'>A</th>
            <th className='th'>G</th>
          </tr>
        </thead>
        <tbody className='tbody'>
          {
            isLoading
            ? <Loader/>
            : renderScorers(dataScore)
          }
        </tbody>
      </TableContainerStyles>
      : <p>Aún no hay datos de goleadores en esta liga.</p>
    }
    </>
 
  )
}

export default Scorers