// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends Component {
  constructor(props) {
    super(props)

    this.state = {
      secondsLeft: props.initialCount
    }

  }

  renderResponse = () => {
    return this.state.secondsLeft === 0 ? <div>Boom!</div> : <div>{this.state.secondsLeft} seconds left before I go boom!</div>
  }

  render() {
    return this.renderResponse()
  }
}

export default Bomb;
