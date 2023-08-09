import React from 'react'
import { ButtonStyle } from './ButtonStyles'

const Button = ({handleFunction,title}) => {
  return (
    <ButtonStyle onClick={handleFunction}>{title}</ButtonStyle>
  )
}

export default Button