import React from 'react';
import ContainerCards from '../../molecules/ContainerCards/ContainerCards';
import CardMatch from '../../molecules/CardMatch/CardMatch';
import TitleContainer from '../../atoms/TitleContainer/TitleContainer';
// import imgURLAway from '../../../assets/iconBarcelona.jpg';
// import imgURLHome from '../../../assets/iconMadrid.png';

const MatchsRandom = () => {
  const date = new Date().toLocaleDateString('es-es',{ month:'short', day:'numeric' })
  return (
    <>
    <TitleContainer>Algunos partidos de hoy</TitleContainer>
    <ContainerCards>
        {/* <CardMatch 
        teamHome={'Real Madrid'}
        teamAway={'FC Barcelona'}
        hour={'18:45'}
        date={date}
        league={'La Liga'}
        quantityBets={145}
        success={true}
        result={'1-0'}
        imgURLHome={imgURLHome}
        imgURLAway={imgURLAway}/>

        <CardMatch 
        teamHome={'Real Madrid'}
        teamAway={'FC Barcelona'}
        hour={'18:45'}
        date={date}
        league={'La Liga'}
        quantityBets={145}
        success={true}
        result={'1-0'}
        imgURLHome={imgURLHome}
        imgURLAway={imgURLAway}/>

        <CardMatch 
        teamHome={'Real Madrid'}
        teamAway={'FC Barcelona'}
        hour={'18:45'}
        date={date}
        league={'La Liga'}
        quantityBets={145}
        success={true}
        result={'1-0'}
        imgURLHome={imgURLHome}
        imgURLAway={imgURLAway}/>

        <CardMatch 
        teamHome={'Real Madrid'}
        teamAway={'FC Barcelona'}
        hour={'18:45'}
        date={date}
        league={'La Liga'}
        quantityBets={145}
        success={true}
        result={'1-0'}
        imgURLHome={imgURLHome}
        imgURLAway={imgURLAway}/> */}
    </ContainerCards>
    </>
    
  )
}

export default MatchsRandom