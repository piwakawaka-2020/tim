import React from 'react'
import {draw} from '../draw.js'
import {clear} from '../draw.js'

class Button extends React.Component {
    state = {
          rotation: 5, 
          length: 10,
          times: 250
        };
  
    

    
  
    handleChange= (event) => {
      console.log(event.target.name, event.target.value)
    const newState = {}
    newState[event.target.name] = Number(event.target.value)
      this.setState(newState);
    }
    
  
    theSubmit= (event) => {
        event.preventDefault();
        let values = this.state
        console.log('here are ' + values)
        console.log(values)
        clear()
        draw(values);
    };
  
    render() {
      return (
        <form onSubmit={this.theSubmit}>
          <label>
            rotation:
            <input type="number" value={this.state.rotation} name='rotation' onChange={this.handleChange}  />
          </label>
          <label>
            length:
            <input type="number" value={this.state.length} name='length' onChange={this.handleChange}/>
          </label>
          <label>
            times:
            <input type="number" value={this.state.times}  name='times' onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }

  
} 
export default Button
