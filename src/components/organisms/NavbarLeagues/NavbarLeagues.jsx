import React from 'react'
import { NavLeaguesItemStyle, NavLeaguesStyle } from './NavbarLeaguesStyles'
import { useNavigate, useParams } from 'react-router-dom';

const NavbarLeagues = () => {
const navigator = useNavigate()
const params = useParams();

const goLeagues = (e) => {
   const id = Number(e.target.dataset.idleague);
   params.idLeague = id;
   localStorage.setItem('idLeague', params.idLeague);
   window.scrollTo(0,0)
   navigator(`/leagues/${params.idLeague}/ranking`)
}

  return (
    <NavLeaguesStyle>
        <NavLeaguesItemStyle onClick={(e) => goLeagues(e)} data-idleague='152'>LIGA ARGENTINA</NavLeaguesItemStyle>       
        {/* <NavLeaguesItemStyle onClick={(e) => goLeagues(e)} data-idleague='103'>CHAMPIONS LEAGUE</NavLeaguesItemStyle> */}
        <NavLeaguesItemStyle onClick={(e) => goLeagues(e)} data-idleague='109'>LIGUE 1</NavLeaguesItemStyle>
        <NavLeaguesItemStyle onClick={(e) => goLeagues(e)} data-idleague='107'>SERIE A</NavLeaguesItemStyle>
        {/* <NavLeaguesItemStyle onClick={(e) => goLeagues(e)} data-idleague='165'>COPA LIBERTADORES</NavLeaguesItemStyle> */}
        <NavLeaguesItemStyle onClick={(e) => goLeagues(e)} data-idleague='106'>PREMIER LEAGUE</NavLeaguesItemStyle>
        <NavLeaguesItemStyle onClick={(e) => goLeagues(e)} data-idleague='101'>LA LIGA</NavLeaguesItemStyle>
    </NavLeaguesStyle>
  )
}

export default NavbarLeagues