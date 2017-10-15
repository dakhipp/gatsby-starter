import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input, Button } from 'semantic-ui-react'

import styles from './loginForm.module.css'

const renderField = ({input, type, label, meta: { touched, error, warning }}) => (
  <div>
    <Input 
      {...input}
      className={styles.input} 
      placeholder={label} 
      type={type} 
    />
  </div>
);

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, pristine, submitting, errors, response } = this.props;
    return (
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Login</h2>
        {errors.map((error) => error)}
        {response}
        <div className={styles.fieldPadding}>
          <Field
            name="username"
            type="text"
            component={renderField}
            label="Username"
          />
        </div>
        <div className={styles.fieldPadding}>
          <Field
            name="password"
            type="text"
            component={renderField}
            label="Password"
          />
        </div>
        <Button primary type="submit" disabled={pristine || submitting}>Submit</Button>
      </form>
    )
  }
}

export default reduxForm({ form: 'login' })(LoginForm)
