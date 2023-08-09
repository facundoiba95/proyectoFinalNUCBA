import React from 'react'
import { FormContainerStyle } from '../../components/molecules/FormRegister/FormRegisterStyles'
import Button from '../../components/atoms/Button/Button'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../redux/features/api/apiAuthSlice'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const LoginView = () => {
  const [ inputUsername , setInputUsername] = useState('');
  const [ inputPassword , setInputPassword] = useState('');
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const params = useParams();
  const userLogged = useSelector(state => state.apiAuth.user);
  const isLogged = useSelector(state => state.apiAuth.isLogged);

  const sendLogin = async (e) => {
    e.preventDefault();
    if(!inputPassword.length || !inputPassword.length){
      alert('Debes completar todos los datos!')
      return;
    }
    const user = {
      username : inputUsername,
      password: inputPassword
    }
    dispatch(loginUser(user));
  }

  /*
    


  LANZAR ALERTAS DE ERRORES EN CASO DE HABERLOS
  MANEJAR ERRORES
            

*/
      useEffect(() => {
        if(isLogged == true){
          params.idUser = userLogged.sendUser._id;
          navigator(`/profile/${params.idUser}`)
        } else {
          navigator('/login')
        }
      }, [ isLogged ])

  return (
   <FormContainerStyle>
    <h2>Login</h2>
    <input type="text" placeholder='Nombre de usuario' required={true} value={inputUsername} onChange={(e) => setInputUsername(e.target.value)}/>
    <input type="password" placeholder='Contraseña' required={true} value={inputPassword} onChange={(e) => setInputPassword(e.target.value)}/>
    <Button title={'Iniciar Sesión'} handleFunction={(e) => sendLogin(e)}></Button>
   </FormContainerStyle>
  )
}

export default LoginView