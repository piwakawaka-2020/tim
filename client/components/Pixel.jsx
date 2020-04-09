import React from 'react'

class Pixel extends React.Component {

    clickHandler = evt => {
        this.setState({
            backgroundColor: `red`
        })
    }

    onDrag = evt => {
        this.setState({
            backgroundColor: 'red'
        })
    }

    render() {
        return (
            <div className='pixel' onDragEnter={this.onDrag} onClick={this.clickHandler} style={this.state}></div>
        )
    }
}

export default Pixel