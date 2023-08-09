import React, { useContext, useEffect } from 'react'
import { CardBetContainer } from './CardBetStyles'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ModalAuth from '../Modal/Modal';
import { ApiContext } from '../../../context/ApiContext';
import { sendBet } from '../../../redux/features/api/apiBetSlice';

const CardBet = ({
  teamHome, 
  teamAway,
  hour, 
  date, 
  imgURLHome,
  imgURLAway,
}) => {
const { isOpenModal, setIsOpenModal } = useContext(ApiContext);
const params = useParams();
const dispatch = useDispatch();
const navigator = useNavigate();
const isLogged = useSelector(state => state.apiAuth.isLogged);
const user = useSelector(state => state.apiAuth.user.sendUser);

const matchesLeagueState = useSelector(state => state.apiMatches[params.idLeague == 152 ? 'ligaArgentina' : 'matchesLeague']);

const rewriteResponse = matchesLeagueState.rewriteResponse;
const newArray = matchesLeagueState.newArray;

const filterMatch = rewriteResponse ? rewriteResponse.filter(match => match.id == params.idMatch) :
                    newArray ? newArray.filter(match => match.fixture.id == params.idMatch) : [];

const generateBet = async (e) => {
  if(isLogged){
    const valueWinner = e.target.dataset.winner;
    const bet = {
      user: [user],
      match: filterMatch,
      status: 'TIMED',
      winner: valueWinner
    }
    dispatch(sendBet(bet))
  } else {
    setIsOpenModal(true)
  }
}

const goLogin = () => {
  setIsOpenModal(false)
  window.scrollTo(0,0)
  navigator('/login')
}

const goRegister = () => {
  setIsOpenModal(false)
  window.scrollTo(0,0)
  navigator('/register')
}

  return (
    <CardBetContainer>
      <ModalAuth
        titleBtnOne={'Login'} 
        titleBtnTwo={'Register'} 
        titleModal={'Debes iniciar sesión o registrarte para apostar!'}
        titleSmall={'Si ya iniciaste sesión, cierra este mensaje!'}
        handleFunctionBtnOne={() => goLogin()}
        handleFunctionBtnTwo={() => goRegister()}
      />
      <span className='teamsContainer'>
        <span className='team'>
         <img src={imgURLHome} alt="img" className='imgTeam'/>
         <p className='nameTeam'>{teamHome}</p>
        </span>
        <small>✗</small>
        <span className='team'>
          <img src={imgURLAway} alt="" className='imgTeam'/>
          <p className='nameTeam'>{teamAway}</p>
        </span>
      </span>
      <span className='betButtonsContainer'>
        <button className='buttonBet' data-winner={'HOME_TEAM'} onClick={(e) => generateBet(e)}>Gana <strong data-winner={'HOME_TEAM'}>{teamHome}</strong></button>
        <button className='buttonBet' data-winner={'DRAW'} onClick={(e) => generateBet(e)}>Empate</button>
        <button className='buttonBet' data-winner={'AWAY_TEAM'} onClick={(e) => generateBet(e)}>Gana <strong data-winner={'AWAY_TEAM'}>{teamAway}</strong></button>
      </span>
      <span className='matchDate'>
        <h4>Hora: {hour}</h4>
        <h4>Fecha: {date}</h4>
      </span>
      <span>
      </span>
    </CardBetContainer>
  )
}

export default CardBet


