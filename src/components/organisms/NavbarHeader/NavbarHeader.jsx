import React from 'react'
import { HeaderItemStyle, HeaderListStyle, HeaderStyle } from './NavbarHeaderStyles';
import { useNavigate, useParams } from 'react-router-dom';
import { CgMenuGridO } from 'react-icons/cg';
import { useContext } from 'react';
import { ApiContext } from '../../../context/ApiContext';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../atoms/Button/Button';
import { logout } from '../../../redux/features/api/apiAuthSlice';


const NavbarHeader = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { isOpenMenu, setIsOpenMenu } = useContext(ApiContext);
  const isLogged = useSelector(state => state.apiAuth.isLogged);
  const user = useSelector(state => state.apiAuth.user);
  const imgUserDefault = 'https://cdn.landesa.org/wp-content/uploads/default-user-image.png'

  
  const goHome = () => {
    setIsOpenMenu(false)
    window.scrollTo(0,0);
    navigator('/')
  }
  const goFeed = () => {
    setIsOpenMenu(false)
    window.scrollTo(0,0);
    navigator('/feed')
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

  const renderImg = () => {
    if(user.sendUser.imgUrl == ''){
      return imgUserDefault
    } else {
      return user.sendUser.imgUrl
    }
  }

  const handleLogout = () => {
     if(window.confirm('Deseas cerrar sesión?')){
      return dispatch(logout())
     } else {
      return;
     }
  }

  const goProfileUser = (e) => {
    setIsOpenMenu(false);
    const idUser = e.target.dataset.iduser;
    params.idUser = idUser;
    window.scrollTo(0,0);
    navigator(`/profile/${params.idUser}`)
  }

  return (
    <HeaderStyle isOpenMenu={isOpenMenu} isLogged={isLogged}>
      <CgMenuGridO onClick={() => setIsOpenMenu(!isOpenMenu)} className='menuIcon'/>
      <h1 onClick={goHome}>TRICAMPEÓN</h1>
      <span className='headerContainer'>
        <HeaderListStyle>
          <HeaderItemStyle onClick={goHome}>Home</HeaderItemStyle>
          <HeaderItemStyle onClick={goFeed}>Feed</HeaderItemStyle>
        </HeaderListStyle>
        <HeaderListStyle className='registerButtons'>
          <HeaderItemStyle onClick={goRegister} className='registerHeaderBtn'>Register</HeaderItemStyle>
          <HeaderItemStyle onClick={goLogin} className='loginHeaderBtn'>Login</HeaderItemStyle>
        </HeaderListStyle>
        <HeaderListStyle className='iconsAccount'>
          <h4 onClick={(e)=> goProfileUser(e)} data-iduser={isLogged ? user.sendUser._id : ''}>{isLogged ? user.sendUser.username : ''}</h4>
          <img src={isLogged ? renderImg() : ''} alt="" data-iduser={isLogged ? user.sendUser._id : ''} onClick={(e)=> goProfileUser(e)} />
          <Button title={'Cerrar sesión'} handleFunction={() => handleLogout()}/>
        </HeaderListStyle>
      </span>
    </HeaderStyle>
  )
}

export default NavbarHeader