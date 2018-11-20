// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render(){
    console.log(this.state.secondsLeft);
    if (this.state.secondsLeft > 0) {
      return (
        <div><p>{this.state.secondsLeft} seconds left before I go boom!</p></div>
      )
    } else if (this.state.secondsLeft == 0) {
      return (
        <div><p>Boom!</p></div>
      )
    }
  } // end render fn

}
