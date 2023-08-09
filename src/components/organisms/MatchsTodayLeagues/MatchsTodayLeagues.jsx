import React, { useEffect } from 'react'
import ContainerCards from '../../molecules/ContainerCards/ContainerCards'
import CardMatch from '../../molecules/CardMatch/CardMatch'
import TitleContainer from '../../atoms/TitleContainer/TitleContainer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatchesArgentina, fetchMatchesToday } from '../../../redux/features/api/apiMatchesSlice';
import Loader from '../../molecules/Loader/Loader';
import { v4 as uuidv4 } from 'uuid';
import ItemMatch from '../../molecules/ItemMatch/ItemMatch';

const MatchsTodayLeagues = ({titleLeague, idLeague, handleState}) => {
    const isLoading = useSelector(state => state.apiMatches.isLoading);
    const dispatch = useDispatch();
    
    useEffect(()=> {
      dispatch(fetchMatchesToday(idLeague))
    },[ dispatch ])

  return (
    <>
    <TitleContainer>{titleLeague}</TitleContainer>
    <ContainerCards >
        {isLoading 
        ? <Loader/>
        : handleState.length
        ? <ItemMatch handleState={handleState} titleLeague={'asd'} idLeague={idLeague}/>
        : <p>No hay partidos en el dia de hoy en {titleLeague}!</p>
}
    </ContainerCards>
    </>
    
  )
}

export default MatchsTodayLeagues