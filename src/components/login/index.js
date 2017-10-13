import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
  render() {
    console.log(this);
    return (
      <div>
          <p>Login</p>

          <button onClick={() => this.props.register}>Register</button>
      </div>
    )
  }
}

function mapMutationsToProps({ ownProps, state }) {
  return {
    register: (raw) => ({
      mutation: gql`
        mutation Register {
          register(name: "test", username: "test212", phone_number: "test", email: "test2122", password: "tesT123!", password_conf: "tesT123!") {
            id
            token
            scope
          }
        }
      `,
      variables: {
        // Use the container component's props
        // topic_id: ownProps.topic_id,

        // Use the redux state
        /// category_id: state.selectedCategory,

        // Use an argument passed from the triggering of the mutation
        raw,
      },
    }),
  };
};

export default connect(mapMutationsToProps)(Login);
