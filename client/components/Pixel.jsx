import React from 'react'

class Pixel extends React.Component {

    clickHandler = evt => {
        this.setState({
            backgroundColor: this.props.currentColor
        })
    }

    onDrag = evt => {
        this.setState({
            backgroundColor: this.props.currentColor
        })
    }

    render() {
        return (
            <div id={this.props.id} className='pixel' onDragEnter={this.onDrag} onClick={this.clickHandler} style={this.state}></div>
        )
    }
}

export default Pixel