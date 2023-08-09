import React, { useContext, useEffect } from 'react'
import MatchsRandom from '../../components/organisms/MatchsRandom/MatchsRandom'
import MatchsTodayLeagues from '../../components/organisms/MatchsTodayLeagues/MatchsTodayLeagues'
import Button from '../../components/atoms/Button/Button'
import { useNavigate } from 'react-router-dom'
import NavbarLeagues from '../../components/organisms/NavbarLeagues/NavbarLeagues'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMatchesArgentina } from '../../redux/features/api/apiMatchesSlice'
import Loader from '../../components/molecules/Loader/Loader'
import RankingView from '../Ranking/RankingView'
import { ApiContext } from '../../context/ApiContext'
import { fetchApiLeagues } from '../../redux/features/api/apiLeagueSlice'
import RankingTable from '../../components/molecules/RankingTable/RankingTable'
import ContainerTables from '../../components/molecules/ContainerTables/ContainerTables'

const HomeView = () => {
  const navigator = useNavigate();;
  const goMatchs = () => { 
    window.scrollTo(0,0)
    navigator('/leagues/106/ranking');
  }

  const goRanking = () => { 
    window.scrollTo(0,0)
    navigator('/ranking/leagues');
  }
  const isLoading = useSelector(state => state.apiMatches.isLoading);
  const { isAll, setIsAll } = useContext(ApiContext);

  //states matches leagues
  const premierLeague = useSelector(state => state.apiMatches.premierLeague);
  const laLiga = useSelector(state => state.apiMatches.laLiga);
  const serieA = useSelector(state => state.apiMatches.serieA);
  const ligaArgentinaLocalStorage = JSON.parse(localStorage.getItem('ligaArgentina')) || [];
  const ligaArgentina = useSelector(state => state.apiMatches.ligaArgentina);
  const dispatch = useDispatch();

  //state ranking leagues
  const championsLeagueRanking = useSelector(state => state.apiLeagues.championsLeague);
  const libertadoresRanking = useSelector(state => state.apiLeagues.libertadores);


   useEffect(() => {
    setIsAll(true) 
    // dispatch(fetchMatchesArgentina())
   }, [])

  return (
    <>
       {/* <MatchsRandom/> */}
       <NavbarLeagues/>   
       {/* <MatchsTodayLeagues titleLeague={'Liga Profesional Argentina'}  handleState={ligaArgentina}/> */}
       <MatchsTodayLeagues titleLeague={'Premier League'} idLeague={2021} handleState={premierLeague}/>
       <MatchsTodayLeagues titleLeague={'Serie A'} idLeague={2019} handleState={serieA}/>
       <MatchsTodayLeagues titleLeague={'Liga Española'} idLeague={2014} handleState={laLiga}/> 
       <Button handleFunction={goMatchs} title={'Ver mas ligas'}/>

       <div style={{marginTop:'3rem', marginBottom:'1rem'}}>
       <ContainerTables isAll={isAll}>
         <RankingTable idLeague={107} />
         <RankingTable idLeague={106} />
       </ContainerTables>
       </div>
       <Button handleFunction={goRanking} title={'Ver mas tablas'}/>
    </>
  )
}

export default HomeView