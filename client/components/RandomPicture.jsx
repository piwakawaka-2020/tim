import React from 'react'

class RandomPicture extends React.Component {
  state = {
      backgroundImage: `url(images/randomPic${Math.floor(Math.random() * 8)}.jpg)`
  }

  changePicture = () => {
      console.log('changing pic')
      this.setState({
        backgroundImage: `url(images/randomPic${Math.floor(Math.random() * 8)}.jpg)`
      })
  }

  render() {
    return (
        <div onClick={this.changePicture} className='randomPic' style={this.state}>Click to change picture</div>
    )
  }
}

export default RandomPicture