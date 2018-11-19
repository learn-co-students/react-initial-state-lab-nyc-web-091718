import React, { Component } from 'react'

class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state =  {secondsLeft: this.props.initialCount }
  }

  render = () => {
    return <React.Fragment>
      {this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : "Boom!"}
    </React.Fragment>
  }

}

export default Bomb
