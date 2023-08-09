import React, { useEffect } from 'react'
import { ContainerTableStyle, ItemTableStyle, TitleRankingStatsStyle } from './RankingTableStyles'
import TitleContainer from '../../atoms/TitleContainer/TitleContainer'
import { useDispatch, useSelector } from 'react-redux'
import iconFutbol from '../../../../iconFutbol.png'
import Loader from '../Loader/Loader'
import { fetchApiLeagues } from '../../../redux/features/api/apiLeagueSlice'
import { leagueStates } from '../../../libs/getLeagueStates'
import { useParams } from 'react-router-dom'

const RankingTable = ({idLeague}) => {
  const isLoading = useSelector(state => state.apiLeagues.isLoading);
  const dispatch = useDispatch();
  const dataLeague = useSelector(state => state.apiLeagues[leagueStates[idLeague]]);
  const params = useParams();
  
  const renderItemRanking = (dataLeague) => {
    if(dataLeague[0] === undefined) return; // Condicion para que al cargar no tire error undefined
    return dataLeague[0].rank.map(team => {
      const name = team.fullName;
      const imgUrl = team.images.urlLogo[1] ? team.images.urlLogo[1] : iconFutbol;
      const { drawn, lost, played, points, position, won } = team.standing;
      
      return (
        <tr key={team.id} className='tr'>
          <td className='td'>{position}</td>
          <td className='td team'>
            <img src={imgUrl} alt="img" />
            <small>{name}</small>
          </td>
          <td className='td'>{played}</td>
          <td className='td'>{won}</td>
          <td className='td'>{lost}</td>
          <td className='td'>{drawn}</td>
          <td className='td'><strong>{points}</strong></td>
        </tr>
      )
    })
  }

  const renderNameLeague = (dataLeague) => {
    if(dataLeague[0] === undefined) return;
    return dataLeague[0].classificationHead.tournament.name;
  }


  useEffect(() => {
    dispatch(fetchApiLeagues(idLeague))
 }, [ params.idLeague ])


  return (
    <>
    { isLoading 
    ? <Loader/>
    : <>
       <ContainerTableStyle>
       <TitleContainer>{renderNameLeague(dataLeague)}</TitleContainer>
         <table className='tableContainer'>
           <thead className='headTable'>
             <tr>
               <th className='th'>Rank</th>
               <th className='th'>Team</th>
               <th className='th'>PJ</th>
               <th className='th'>PG</th>
               <th className='th'>PP</th>
               <th className='th'>PE</th>
               <th className='th'>Pts</th>
             </tr>
           </thead>
           <tbody>
             { renderItemRanking(dataLeague) }
           </tbody>
         </table>
       </ContainerTableStyle>  
    </>}
    
    </>

)
}

export default RankingTable