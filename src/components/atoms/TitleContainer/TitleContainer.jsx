import React from 'react'
import { TitleStyle } from './TitleContainerStyles'

const TitleContainer = ({children}) => {
  return (
    <TitleStyle>{children}</TitleStyle>
  )
}

export default TitleContainer