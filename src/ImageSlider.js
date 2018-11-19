import React, { Component } from 'react'

class ImageSlider extends Component {
  state = { currentSlideIndex: 0 }

  render = () => <React.Fragment>I am on slide {this.state.currentSlideIndex}</React.Fragment>
}

export default ImageSlider
