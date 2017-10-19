import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../../actions'

import Counter from '../../components/counter'

class CounterContainer extends Component {
  render() {
    return (
      <Counter
        count={this.props.count}
        incCount={() => this.props.incCount(this.props.count)}
        decCount={() => this.props.decCount(this.props.count)}
      />
    )
  }
}

CounterContainer.propTypes = {
  count: PropTypes.number,
  incCount: PropTypes.func,
  decCount: PropTypes.func,
}

function mapStateToProps(store) {
  return { count: store.count.count }
}

export default connect(mapStateToProps, actions)(CounterContainer)
