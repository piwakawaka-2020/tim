import React from 'react'

import ColorOption from './ColorOption'

const ColorSelector = (props) => {
  return (
      <>
    <h1>Color Selector</h1>
    <div id='optionList'>
    <ColorOption changeColor={props.changeColor} bgColor='red' />
    <ColorOption changeColor={props.changeColor} bgColor='blue' />
    <ColorOption changeColor={props.changeColor} bgColor='green' />
    <ColorOption changeColor={props.changeColor} bgColor='yellow' />
    <ColorOption changeColor={props.changeColor} bgColor='purple' />
    <ColorOption changeColor={props.changeColor} bgColor='pink' />
    <ColorOption changeColor={props.changeColor} bgColor='orange' />
    <ColorOption changeColor={props.changeColor} bgColor='brown' />
    <ColorOption changeColor={props.changeColor} bgColor='black' />
    <ColorOption changeColor={props.changeColor} bgColor='white' />
    </div>
    </>
  )
}

export default ColorSelector