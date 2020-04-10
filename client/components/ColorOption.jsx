import React from 'react'



class ColorOption extends React.Component {
  state = {
      backgroundColor: this.props.bgColor
  }

  render() {
    return (
        <div onClick={this.props.changeColor} className='option' style={this.state}></div>
    )
  }
}

export default ColorOption