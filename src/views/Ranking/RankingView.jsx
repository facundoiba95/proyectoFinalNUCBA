import React, { useContext, useEffect } from 'react'
import ContainerTables from '../../components/molecules/ContainerTables/ContainerTables'
import RankingTable from '../../components/molecules/RankingTable/RankingTable'
import { useSelector } from 'react-redux'
import { ApiContext } from '../../context/ApiContext'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const RankingView = () => {
  const { isAll, setIsAll } = useContext(ApiContext);
  
  //state leagues ranking
  const league1ranking = useSelector(state => state.apiLeagues.league1);
  const laLigaranking = useSelector(state => state.apiLeagues.laLiga);
  const premierLeagueranking = useSelector(state => state.apiLeagues.premierLeague);
  const serieAranking = useSelector(state => state.apiLeagues.serieA);
  const championsLeagueranking = useSelector(state => state.apiLeagues.championsLeague);
  const ligaArgentinaranking = useSelector(state => state.apiLeagues.ligaArgentina);
  const libertadoresranking = useSelector(state => state.apiLeagues.libertadores);

  const handleRouteRanking = () => {
      setIsAll(!true);
       return (
         <>
          <RankingTable idLeague={106} handleState={premierLeagueranking}/>
          <RankingTable idLeague={107} handleState={serieAranking}/>
          <RankingTable idLeague={109} handleState={league1ranking}/>
          <RankingTable idLeague={101} handleState={laLigaranking}/>
          <RankingTable idLeague={152} handleState={ligaArgentinaranking}/>
         </>
       )
  }
  useEffect(()=> {
    setIsAll(false)
  },[])

  return (
    <ContainerTables isAll={isAll}>
      {handleRouteRanking()}
    </ContainerTables>
  )
}

export default RankingView