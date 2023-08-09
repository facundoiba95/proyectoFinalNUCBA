import React from 'react'
import { ContainerDefaultStyle } from '../Leagues/LeaguesViewStyles'
import CardFeed from '../../components/molecules/CardFeed/CardFeed'
import { ContainerCardsFeedStyles } from '../../components/molecules/CardFeed/CardFeedStyles'

const FeedView = () => {

  return (
    <ContainerDefaultStyle isFeed={true}>
      <h2 className='titleFeed'>Novedades en <h2 className='tricampeonTitle'>TRICAMPEÓN</h2></h2>
      <ContainerCardsFeedStyles>
        <CardFeed/>
      </ContainerCardsFeedStyles>
    </ContainerDefaultStyle>
  )
}

export default FeedView