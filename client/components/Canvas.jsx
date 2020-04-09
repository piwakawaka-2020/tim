import React from 'react'

import Pixel from './Pixel'

const Canvas = () => {
  return (
    <>
        <h1>Canvas</h1>
        <div id='canvas'>
            {Array.from({length: 1600}, (v, i) => <Pixel />)}
        </div>
    </>
  )
}

export default Canvas