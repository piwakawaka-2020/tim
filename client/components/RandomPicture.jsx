import React from 'react'

class RandomPicture extends React.Component {
  state = {
      backgroundImage: 'url(images/randomPic1.jpg)'
  }
  render() {
    return (
        <div className='randomPic' style={this.state}></div>
    )
  }
}

export default RandomPicture