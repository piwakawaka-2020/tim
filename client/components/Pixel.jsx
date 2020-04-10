import React from 'react'

class Pixel extends React.Component {

    

    setColor = evt => {
        this.setState({
            backgroundColor: this.props.currentColor
        })
    }

    resetBoard = (evt) => {
        this.setState({
            bgColor: 'white'
        })
    }

    render() {
        return (
            <div id={this.props.id} className='pixel' onDragEnter={this.setColor} onClick={this.setColor} style={this.state}></div>
        )
    }
}

export default Pixel