import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Nav from '../components/nav'

import 'semantic-ui-css/semantic.min.css'
import "./index.css"

class MainLayout extends Component {
  render() {
    return (
      <div>
        <Nav />
        {this.props.children()}
      </div>
    )
  }
}

MainLayout.propTypes = {
  children: PropTypes.func,
}

export default MainLayout
