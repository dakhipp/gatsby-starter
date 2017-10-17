import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'

import Nav from '../../components/nav'

class NavContainer extends Component {
  render() {
    return (
      <Nav iam={this.props.iam} logout={this.props.removeIam} />
    )
  }
}

function mapStateToProps(store) {
  return { iam: store.iam.iam };
}

export default connect(mapStateToProps, actions)(NavContainer);