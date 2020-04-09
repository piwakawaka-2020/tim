import React from 'react'

import Canvas from './Canvas'
import ColorSelector from './ColorSelector'

class PixelPaint extends React.Component {

    state = {
        bgColor: 'red'
    }

    changeColor = (evt) => {
        this.setState({
            bgColor: evt.target.style.backgroundColor
        })
    }

    render() {
        return (
            <>
                <h1>Pixel Paint</h1>
                <Canvas currentColor={this.state.bgColor} />
                <ColorSelector changeColor={this.changeColor} />
            </>
        )
    }
}

export default PixelPaint