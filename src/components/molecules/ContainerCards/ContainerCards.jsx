import React from 'react'
import { ContainerStyle } from './ContainerCardsStyles'

const ContainerCards = ({children, handleFunction}) => {
  return (
    <ContainerStyle onLoad={handleFunction}>{children}</ContainerStyle>
  )
}

export default ContainerCards