import React from 'react'

import ColorOption from './ColorOption'

const ColorSelector = (props) => {
  return (
    <>
    <h1>Color Selector</h1>
    <ColorOption changeColor={props.changeColor} bgColor='red' />
    <ColorOption changeColor={props.changeColor} bgColor='blue' />
    <ColorOption changeColor={props.changeColor} bgColor='green' />
    </>
  )
}

export default ColorSelector