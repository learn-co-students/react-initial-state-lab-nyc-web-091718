// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount,
      countingDown: false
    }
  }

    timer = setInterval(() => this.setState({secondsLeft: this.state.secondsLeft - 1}), 1000);


  render() {
    const bombMessage = this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!';
    
    return (
      <div>{bombMessage}</div>
    )
  }

}
