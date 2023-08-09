import React, { useContext } from 'react'
import { NotFoundNewsCardContainer } from './NotNewsCardStyle'
import { useNavigate } from 'react-router-dom'
import { ApiContext } from '../../../context/ApiContext';

const NotNewsCard = () => {
    const navigator = useNavigate();
    const { setIsOpenMenu } = useContext(ApiContext);
    
    const goHome = () => {
        setIsOpenMenu(false)
        window.scrollTo(0,0);
        navigator('/')
      }
    
    const goRegister = () => {
        setIsOpenMenu(false)
        window.scrollTo(0,0);
        navigator('/register')
      }

    const goLogin = () => {
        setIsOpenMenu(false)
        window.scrollTo(0,0);
        navigator('/login')
      }

  return (
    <NotFoundNewsCardContainer>
        <p>Parece que no hay novedades aún ...</p>
        <br />
        <p><b onClick={() => goRegister()}>Regístrate </b>o <b onClick={() => goLogin()}>Iniciá sesión </b>para
        apostar al equipo que quieras!</p>
        <br />
        <p>Tambien puedes ir al <b onClick={() => goHome()}>Home </b>para ver ligas, partidos de la fecha y demás!</p>
    </NotFoundNewsCardContainer>
  )
}

export default NotNewsCard