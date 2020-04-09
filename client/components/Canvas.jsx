import React from 'react'

import Pixel from './Pixel'

const Canvas = (props) => {
    console.log(props)
  return (
    <>
        <h1>Canvas</h1>
        <div id='canvas'>
            {Array.from({length: 1600}, (v, i) => <Pixel currentColor={props.currentColor} />)}
        </div>
    </>
  )
}

export default Canvas