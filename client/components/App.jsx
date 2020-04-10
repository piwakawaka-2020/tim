
import Canvas from './canvas'
import Button from './buttons'
import React, { Component } from "react"

import PixelPaint from './PixelPaint'


import Alphabet from "./Alphabet"
import Text from "./Text"

class App extends Component {
    state = { text: "" }

    changeText(event) {
        console.log(event.target.value)
        this.setState({ text: event.target.value })
    }

    render() {
        return (
          <>
            <h1>Tim, Tom and Thom's crazy cool stuff for your eyeballs</h1>
            <div className="container">
                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.changeText.bind(this)}
                    placeholder="If you type here you will break the app"
                    style={{
                        padding: ".6em",
                        fontSize: "1.2em",
                        margin: "0px auto",
                        width: "80%"
                    }}
                />
                <svg width="100%" height="600">
                    <Text x="32" y="300" text={this.state.text} />
                    {/* <Alphabet x={32} y={300} /> */}
                </svg>
            </div>
            <PixelPaint />
            <h1 id='wow'> fractal thing</h1>
            <Canvas/>
            <Button/>
            </>
        );
    }
  }


export default App