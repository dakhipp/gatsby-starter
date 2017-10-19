import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Modal } from 'semantic-ui-react'

import { registerMutation } from '../../mutations'

import RegisterForm from '../../components/registerForm'

import * as actions from '../../actions'

class RegisterContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      errors: [],
      response: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const { registerSubmit, mutate, values } = this.props
    registerSubmit(mutate, values.values)
  }

  render() {
    return (
      <Modal trigger={this.props.trigger} dimmer="inverted" size="small">
        <RegisterForm
          response={this.state.response}
          errors={this.state.errors}
          handleSubmit={this.handleSubmit}
        />
      </Modal>
    )
  }
}

RegisterContainer.propTypes = {
  mutate: PropTypes.func,
  values: PropTypes.object,
  registerSubmit: PropTypes.func,
  trigger: PropTypes.node,
}

function mapStateToProps(store) {
  return { values: store.form.register }
}

export default compose(
  graphql(registerMutation),
  connect(mapStateToProps, actions)
)(RegisterContainer)
