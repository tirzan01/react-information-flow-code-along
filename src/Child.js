import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
    return (
      <div
        className="child"
        onClick={() => this.props.handleColorChange(getRandomColor(), getRandomColor())}
        style={{backgroundColor: this.props.color}}
      ></div>
    )
  }
}

export default Child
