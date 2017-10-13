import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'

class Counter extends Component {
  render() {
    return (
      <div>
          <p>Number: {this.props.count}</p>

          <button onClick={() => this.props.incCount(this.props.count)}>+</button>
          <button onClick={() => this.props.decCount(this.props.count)}>-</button>
      </div>
    )
  }
}

function mapStateToProps(store) {
  return { count: store.count.count };
}

export default connect(mapStateToProps, actions)(Counter);