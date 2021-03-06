import React from 'react'

import ColorSelector from './ColorSelector'
import PixelBoard from './PixelBoard'
import RandomPicture from './RandomPicture'

class PixelPaint extends React.Component {

    state = {
        bgColor: 'red'
    }

    changeColor = (evt) => {
        console.log('changing')
        this.setState({
            bgColor: evt.target.style.backgroundColor
        })
    }

    render() {
        return (
            <div id='pixelPaint'>
                <h1>Pixel Paint</h1>
                <RandomPicture />
                <PixelBoard currentColor={this.state.bgColor} />
                <ColorSelector changeColor={this.changeColor} />
                <br></br>
                <a href='/'>reset</a>
            </div>
        )
    }
}

export default PixelPaint