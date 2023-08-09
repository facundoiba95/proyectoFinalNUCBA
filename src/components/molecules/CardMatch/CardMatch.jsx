import React from 'react';
import { CardContainerStyle } from './CardMatchStyles';
import { useNavigate, useParams } from 'react-router-dom';
import { matchesLeague, matchesLeagueTwo } from '../../../libs/getMatchesLeague';
import { useDispatch } from 'react-redux';
import { fetchMatches } from '../../../redux/features/api/apiMatchesSlice';


const CardMatch = ({ 
  teamHome, 
  teamAway,
  hour, 
  date, 
  league, 
  success,
  result,
  status,
  homeScore,
  awayScore,
  imgURLHome,
  imgURLAway,
  isBet,
  idMatch,
  idLeague
 }) => {
  const navigator = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const goProde = (e) => {
     const idMatch = e.target.dataset.idmatch;
     params.idMatch = idMatch;
     window.scrollTo(0,0)
     if(params.idLeague == undefined){
      params.idLeague = idLeague;
      dispatch(fetchMatches(params.idLeague));
      navigator(`/prode/league/${params.idLeague}/${params.idMatch}`)
     } else {
      navigator(`/prode/league/${params.idLeague}/${params.idMatch}`)
     }
  }
  return (
    <CardContainerStyle status={status} isBet={isBet}>
        <span className='dateMatch'>
          <h4>{hour}</h4>
          <p>{date}</p>
          <p className='progress'>{status}</p>
        </span>
        <div className='containerTeam'>
            <span className='teamsMatchHome'>
              <img src={imgURLHome} alt="image from team 1" />
              <p className='nameTeam'>{teamHome}</p>
            </span>
            <span className='status'>
              <p className='vs'>{ 'VS' }</p>
              <span>
                <p>{homeScore}</p>
                <small>-</small>
                <p>{awayScore}</p>
              </span>
            </span>
            <span className='teamsMatchAway'>
              <img src={imgURLAway} alt="image from team 2" />
              <p className='nameTeam'>{teamAway}</p>
            </span>
        </div>
       
        <small className='goBet' data-idmatch={idMatch} data-idleague={idLeague} onClick={(e) => goProde(e)}>{isBet}</small>
    </CardContainerStyle>
  )
}

export default CardMatch