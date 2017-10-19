import React, { Component } from 'react'

export default class Counter extends Component {
  render() {
    return (
      <div>
          <p>Number: {this.props.count}</p>

          <button onClick={this.props.incCount}>+</button>
          <button onClick={this.props.decCount}>-</button>
      </div>
    )
  }
}
