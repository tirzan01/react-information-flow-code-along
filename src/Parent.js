import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childrenColor: '#FFF',
      children2Color: '#FFF'
    }
  }

  changeColor = (newChildColor, newChild2Color) => {
    this.setState({
      color: getRandomColor(),
      childrenColor: newChildColor,
      children2Color: newChild2Color
    })
  }

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child color={this.state.childrenColor} handleColorChange={this.changeColor} />
        <Child color={this.state.children2Color} handleColorChange={this.changeColor} />
      </div>
    )
  }
}

export default Parent
