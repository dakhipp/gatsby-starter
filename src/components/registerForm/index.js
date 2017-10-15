import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input, Button } from 'semantic-ui-react'

import styles from './registerForm.module.css'

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

class RegisterForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, pristine, submitting, errors, response } = this.props;
    return (
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Register</h2>
        {errors.map((error) => error)}
        {response}
        <div className={styles.fieldPadding}>
          <Field
            name="name"
            type="text"
            component={renderField}
            label="Name"
          />
        </div>
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
            name="phone_number"
            type="text"
            component={renderField}
            label="Phone Number"
          />
        </div>
        <div className={styles.fieldPadding}>
          <Field
            name="email"
            type="text"
            component={renderField}
            label="Email"
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
        <div className={styles.fieldPadding}>
          <Field
            name="password_conf"
            type="text"
            component={renderField}
            label="Password Confirmation"
          />
        </div>
        <Button primary type="submit" disabled={pristine || submitting}>Submit</Button>
      </form>
    )
  }
}

export default reduxForm({ form: 'register' })(RegisterForm)
