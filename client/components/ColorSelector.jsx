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
    <ColorOption changeColor={props.changeColor} bgColor='lime' />
    <ColorOption changeColor={props.changeColor} bgColor='coral' />
    <ColorOption changeColor={props.changeColor} bgColor='teal' />
    <ColorOption changeColor={props.changeColor} bgColor='maroon' />
    <ColorOption changeColor={props.changeColor} bgColor='indigo' />
    <ColorOption changeColor={props.changeColor} bgColor='navy' />
    <ColorOption changeColor={props.changeColor} bgColor='gold' />
    <ColorOption changeColor={props.changeColor} bgColor='crimson' />
    <ColorOption changeColor={props.changeColor} bgColor='grey' />
    <ColorOption changeColor={props.changeColor} bgColor='lightgrey' />
    <ColorOption changeColor={props.changeColor} bgColor='black' />
    <ColorOption changeColor={props.changeColor} bgColor='white' />
    </div>
    </>
  )
}

export default ColorSelector