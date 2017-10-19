import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

Counter.propTypes = {
  count: PropTypes.number,
  incCount: PropTypes.func,
  decCount: PropTypes.func,
}
