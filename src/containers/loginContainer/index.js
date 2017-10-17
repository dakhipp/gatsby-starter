import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';

import { Modal } from 'semantic-ui-react'

import { loginMutation } from '../../mutations'

import LoginForm from '../../components/loginForm'

import * as actions from '../../actions'

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: [],
      response: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const {loginSubmit, mutate, values} = this.props;
    loginSubmit(mutate, values.values);
  }

  render() {
    return (
      <Modal 
        trigger={this.props.trigger}
        dimmer="inverted"
        size="small"
      >
        <LoginForm 
          response={this.state.response}
          errors={this.state.errors} 
          handleSubmit={this.handleSubmit} 
        />
      </Modal>
    )
  }
}

function mapStateToProps(store) {
  return { values: store.form.login };
}

export default compose(
  graphql(loginMutation),
  connect(mapStateToProps, actions)
)(LoginContainer);
