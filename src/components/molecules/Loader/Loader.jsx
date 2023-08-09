import React from 'react'
import { BarLoader } from 'react-spinners'
import { LoaderBoxContainerStyle, LoaderContainerStyle } from './LoaderStyles'

const Loader = () => {
  return (
    <LoaderContainerStyle>
        <LoaderBoxContainerStyle>
            <BarLoader width={200} color='yellow'/>
            <h2>LOADING</h2>
        </LoaderBoxContainerStyle>
    </LoaderContainerStyle>
  )
}

export default Loader