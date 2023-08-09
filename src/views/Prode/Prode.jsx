import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ContainerDefaultStyle } from '../Leagues/LeaguesViewStyles';
import CardBet from '../../components/molecules/CardBet/CardBet';
import Loader from '../../components/molecules/Loader/Loader';

const Prode = () => {
  const params= useParams();
  const isLoading = useSelector(state => state.apiMatches.isLoading);
  const leaguesState = useSelector(state => state.apiMatches[params.idLeague == 152 ? "ligaArgentina" : "matchesLeague"]);
  const rewriteResponse = leaguesState.rewriteResponse;
  const newArray = leaguesState.newArray;
  const filterMatchBet = rewriteResponse ? rewriteResponse.filter(match => match.id == params.idMatch) :
                         newArray ? newArray.filter(match => match.fixture.id == params.idMatch) : [];
  const getMatch = () => {
    return filterMatchBet.map(match => {
      const { hour, date } = match;
      const teamHome = match.homeTeam === undefined ? match.teams.home.name : match.homeTeam.name;
      const teamAway = match.awayTeam === undefined ? match.teams.away.name : match.awayTeam.name;
      const league = match.competition === undefined ? match.league.name : match.competition.name
      const homeScore = match.score.fullTime === undefined ? match.score.fulltime.home : match.score.fullTime.home ;
      const awayScore = match.score.fullTime === undefined ? match.score.fulltime.away : match.score.fullTime.away ;
      const imgHome = match.homeTeam ? match.homeTeam.crest : match.teams.home.logo;
      const imgAway = match.awayTeam ? match.awayTeam.crest : match.teams.away.logo;
      const progress = match.fixture == undefined ? status[match.status] : status[match.fixture.status.short];
      const isBet = match.fixture == undefined ? match.status == 'TIMED' ? 'Apostar' : '' :'HOLS';
      const idMatch = match.id ;
      return (
        <CardBet 
          imgURLHome={imgHome}
          imgURLAway={imgAway}
          teamHome={teamHome}
          teamAway={teamAway}
          date={date}
          hour={hour}
          key={idMatch}
        />
      )
    })
  }
  
  return (
    <ContainerDefaultStyle>
      {
        isLoading 
        ?  <Loader/>
        : getMatch()
      }
    </ContainerDefaultStyle>
  )
}

export default Prode