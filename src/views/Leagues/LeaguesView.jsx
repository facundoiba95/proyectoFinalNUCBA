import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import RankingTable from '../../components/molecules/RankingTable/RankingTable';
import ContainerTables from '../../components/molecules/ContainerTables/ContainerTables';
import { ApiContext } from '../../context/ApiContext';
import { ContainerDefaultStyle } from './LeaguesViewStyles';
import NavbarWithFilter from '../../components/organisms/NavbarWithFilter/NavbarWithFilter';
import { useDispatch, useSelector } from 'react-redux';
import { scorersStates } from '../../libs/getScorersStates';
import { fetchScorersByLeague, fetchScorersByLeagueArgentina } from '../../redux/features/api/apiScorersSlice';
import Loader from '../../components/molecules/Loader/Loader';
import { logoLeaguesByIdLeague } from '../../libs/getLogosLeagues';
import Scorers from '../../components/organisms/Scorers/Scorers';
import Fixture from '../../components/organisms/Fixture/Fixture';

const LeaguesView = ({children}) => {
    const params= useParams();
    const dispatch = useDispatch();
    const location = useLocation();
    const navigator = useNavigate();
    const idLeague = Number(params.idLeague);
    const { isAll, setIsAll } = useContext(ApiContext);

    // const localStorageScorersArgentina = JSON.parse(localStorage.getItem('scorersLeagueArgentina'))
    // const localStorageScorers = JSON.parse(localStorage.getItem('scorersLeague'))
    const handleRoutes = () => {

      if(location.pathname === `/leagues/${idLeague}/ranking`){
        setIsAll(false);
        return (
              <ContainerTables isAll={isAll}>
               <RankingTable idLeague={idLeague}/> 
              </ContainerTables> 
        )
      } else if(location.pathname === `/leagues/${idLeague}/scorers`){
        setIsAll(false);
          return (
            <Scorers idLeague={idLeague}/>
          )
      } else if(location.pathname === `/leagues/${idLeague}/fixture`){
        return (
          <Fixture idLeague={params.idLeague}/>
        )
      }
    }

    
  return (
    <ContainerDefaultStyle>
        <NavbarWithFilter/>
          <img src={logoLeaguesByIdLeague[idLeague]} alt="img logo" className='imgLeague'/>
          {handleRoutes()}
    </ContainerDefaultStyle>
    )
}

export default LeaguesView