import React, { useEffect } from 'react'
import { CardFeedContainerStyle } from './CardFeedStyles'
import imgDefault from '../../../assets/wallpapermessi.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../../redux/features/api/apiUserSlice'
import { getBets } from '../../../redux/features/api/apiBetSlice'
import NotNewsCard from '../NotNewsCard/NotNewsCard'

const CardFeed = () => {
    const users = useSelector(state => state.apiUsers.users);
    const bets = useSelector(state => state.apiBets.bet);
    let feed = [].concat(users,bets)
    let news = [];

    const dispatch = useDispatch();

    const timeToNew = (dateCreate) => {
      const dateNowBet = new Date(); 
      const diffInHours = Math.abs(dateNowBet - dateCreate) / 3600000;
      const diffInMinutes = Math.abs(dateNowBet - dateCreate) / 60000;
      
       if(dateNowBet > dateCreate && diffInHours < 24){
        if(dateNowBet > dateCreate && diffInMinutes < 60){
          return `Hace ${Math.floor(diffInMinutes)} minutos.`
         }
         return `Hace ${Math.floor(diffInHours)} horas.`
       }
    }

    const renderBets = (match,users,dateToBet) => {
        const opciones = { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        };
        const dateNow = new Date().toISOString();

        const dateCreatedBet = new Date(dateToBet.createdAt);
        const fechaFormateadaBet = dateCreatedBet.toLocaleDateString('es-MX',opciones);

        const idLeagueBetted = match.competition == undefined ? match.league.id : match.competition.id;
        const { hour, date } = match;
        const teamHome = match.homeTeam === undefined ? match.teams.home.name : match.homeTeam.name;
        const teamAway = match.awayTeam === undefined ? match.teams.away.name : match.awayTeam.name;
        const league = match.competition === undefined ? match.league.name : match.competition.name
        const homeScore = match.score.fullTime === undefined ? match.score.fulltime.home : match.score.fullTime.home ;
        const awayScore = match.score.fullTime === undefined ? match.score.fulltime.away : match.score.fullTime.away ;
        const imgHome = match.homeTeam ? match.homeTeam.crest : match.teams.home.logo;
        const imgAway = match.awayTeam ? match.awayTeam.crest : match.teams.away.logo;
        const progress = match.utcDate == undefined ? dateNow < match.fixture.date ? 'Pendiente' : 'Finalizado' : dateNow < match.utcDate ? 'Pendiente' : 'Finalizado';
        const isBet = match.fixture == undefined ? match.status == 'TIMED' ? 'Apostar' : '' :'HOLS';
        const idMatch = match.id == undefined ? match.fixture.id : match.id; 
        const isPending = match.utcDate == undefined ? dateNow < match.fixture.date : dateNow < match.utcDate;

        return (
          <CardFeedContainerStyle key={match._id} type={'newBet'}>    
             <small className='newData'>Nueva apuesta!</small>
             <small className='timeToNew'>{timeToNew(dateCreatedBet)}</small>   
             <span className='infoUser'>
               <img src={users.imgUrl} alt="" className='imgUser'/>
               <h4>Usuario: {users.username}</h4>
             </span>
               <h4>Fecha de apuesta: {fechaFormateadaBet}</h4>
               <span className='infoTeams'>
                <span className='teamsContainer'>
                   <span className='team'>
                    <img src={imgHome} alt="img" className='imgTeam'/>
                    <p className='nameTeam'>{teamHome}</p>
                   </span>
                   <small className='vs'>✗</small>
                   <span className='team'>
                     <p className='nameTeam'>{teamAway}</p>
                     <img src={imgAway} alt="" className='imgTeam'/>
                   </span>
                </span>
              </span>
          </CardFeedContainerStyle>
        )
    }


    const getNews = () => {
      const dateNow = new Date();
  
      news = feed.filter(prod => {
          const dateNews = new Date(prod.createdAt);
          const diffInHours = Math.abs(dateNow - dateNews) / 3600000;

          if (dateNow > dateNews && diffInHours < 24) {
              return true;
          };
      })
      return news.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }


    const renderNews = () => {
      getNews();
      if(!news.length){
        return <NotNewsCard/>
      }
      return news.map(newsElements => {
        const fecha = new Date(newsElements.createdAt);
          const opciones = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          };
          const fechaFormateada = fecha.toLocaleDateString('es-MX', opciones);
        if(newsElements.username){
          return (
            <CardFeedContainerStyle key={newsElements._id} type={'newUser'}>
                    <small className='newData'>Nuevo miembro!</small>
                    <small className='timeToNew'>{timeToNew(fecha)}</small>
                      <img src={newsElements.imgUrl} alt="" className='imgUser'/>
                      <h4>Usuario: {newsElements.username}</h4>
                      <h4>Miembro desde: {fechaFormateada}</h4>
            </CardFeedContainerStyle>
          )
        } else if(newsElements.match){
          const users = newsElements.user;
          const recentBets = newsElements.match;
          return renderBets( recentBets[0],users[0],newsElements )
        }
      })
    };

    useEffect(() => {
      dispatch(getUsers());
      dispatch(getBets());
     }, [ dispatch ])

  return (
    <>
    {renderNews()}
    </>
  )
}

export default CardFeed;