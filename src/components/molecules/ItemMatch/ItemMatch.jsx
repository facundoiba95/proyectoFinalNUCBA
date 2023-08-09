import React, { useEffect } from 'react'
import CardMatch from '../CardMatch/CardMatch';
import { v4 as uuidv4 } from 'uuid';

const ItemMatch = ({handleState,titleLeague,idLeague}) => {
    const renderItem = () => {
        if(handleState){
            return handleState.map( match => {
              const status = {
                'IN_PLAY' : 'LIVE',
                'FINISHED' : 'FINISHED',
                'PAUSED' : 'PAUSED',
                'FT' : 'FINISHED',
                'NS' : '',
                '1H' : 'LIVE',
                '2H' : 'LIVE',
              }
            
              const { hour, date } = match;
              const teamHome = match.homeTeam === undefined ? match.teams.home.name : match.homeTeam.name;
              const teamAway = match.awayTeam === undefined ? match.teams.away.name : match.awayTeam.name;
              const league = match.competition === undefined ? match.league.id : match.competition.id
              const homeScore = match.score.fullTime === undefined ? match.score.fulltime.home : match.score.fullTime.home ;
              const awayScore = match.score.fullTime === undefined ? match.score.fulltime.away : match.score.fullTime.away ;
              const imgHome = match.homeTeam ? match.homeTeam.crest : match.teams.home.logo;
              const imgAway = match.awayTeam ? match.awayTeam.crest : match.teams.away.logo;
              const progress = match.fixture == undefined ? status[match.status] : status[match.fixture.status.short];
              const isBet = match.fixture == undefined ? match.status == 'TIMED' || match.status == 'SCHEDULED' ? 'Apostar' : '' : match.fixture.status.short != 'FT' ?  'Apostar' : '';
              const idMatch = match.id || match.fixture.id ;
              
              return (
                <CardMatch 
                  teamHome={teamHome}
                  teamAway={teamAway}
                  hour={hour}
                  date={date}
                  // league={league}
                  success={true}
                  imgURLHome={imgHome}
                  imgURLAway={imgAway}
                  homeScore={homeScore}
                  awayScore={awayScore}
                  status={progress}
                  isBet={isBet}
                  idMatch={idMatch}
                  idLeague={league}
                  key={uuidv4()}
                />
              )
            })
          } else {
            return (
              <h4 style={{fontFamily:'Raleway'}}>{`Hoy no hay partidos en ${titleLeague}`}</h4>
            )
          }
    }

  return (
    <>
       {renderItem()}
    </>
  )
}

export default ItemMatch