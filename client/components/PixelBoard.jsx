import React from 'react'

import Pixel from './Pixel'

const PixelBoard = (props) => {
  
  return (
    <>
        <div id='canvas'>
            {Array.from({length: 1600}, (v, i) => <Pixel id={i} key={i} currentColor={props.currentColor} />)}
        </div>
    </>
  )
}

export default PixelBoard