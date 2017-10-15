import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';

import { Modal } from 'semantic-ui-react'

import { registerMutation } from '../../mutations'

import RegisterForm from '../../components/registerForm'

class RegisterContainer extends Component {
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
    const variables = this.props.values.values;
    this.props.mutate({ variables })
    .then((res) => { 
      localStorage.setItem('iam', JSON.stringify(res.data.register));
      this.setState({
        errors: [],
        response: 'Successful!',
      });
    })
    .catch((err) => {
      this.setState({
        errors: err.graphQLErrors.map(error => error.message),
      });
    });
  }

  render() {
    return (
      <Modal 
        trigger={this.props.trigger}
        dimmer="inverted"
        size="small"
      >
        <RegisterForm 
          response={this.state.response}
          errors={this.state.errors} 
          handleSubmit={this.handleSubmit} 
        />
      </Modal>
    )
  }
}

function mapStateToProps(store) {
  return { values: store.form.register };
}

export default compose(
  graphql(registerMutation),
  connect(mapStateToProps)
)(RegisterContainer);
