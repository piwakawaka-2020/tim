import React from 'react'

class Pixel extends React.Component {

    clickHandler = evt => {
        this.setState({
            backgroundColor: `red`
        })
    }

    render() {
        return (
            <div className='pixel' onClick={this.clickHandler} style={this.state}></div>
        )
    }
}

export default Pixel