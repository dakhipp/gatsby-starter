import React, { Component } from 'react'
import { Field, reduxForm, propTypes } from 'redux-form'
import { Button } from 'semantic-ui-react'

import formFeild from '../../components/formField'

import styles from './registerForm.module.css'

class RegisterForm extends Component {
  static propTypes = {
    ...propTypes,
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { handleSubmit, pristine, submitting, errors, response } = this.props
    return (
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Register</h2>
        {errors.map(error => error)}
        {response}
        <div className={styles.fieldPadding}>
          <Field name="name" type="text" component={formFeild} label="Name" />
        </div>
        <div className={styles.fieldPadding}>
          <Field
            name="username"
            type="text"
            component={formFeild}
            label="Username"
          />
        </div>
        <div className={styles.fieldPadding}>
          <Field
            name="phone_number"
            type="text"
            component={formFeild}
            label="Phone Number"
          />
        </div>
        <div className={styles.fieldPadding}>
          <Field name="email" type="text" component={formFeild} label="Email" />
        </div>
        <div className={styles.fieldPadding}>
          <Field
            name="password"
            type="text"
            component={formFeild}
            label="Password"
          />
        </div>
        <div className={styles.fieldPadding}>
          <Field
            name="password_conf"
            type="text"
            component={formFeild}
            label="Password Confirmation"
          />
        </div>
        <Button primary type="submit" disabled={pristine || submitting}>
          Submit
        </Button>
      </form>
    )
  }
}

export default reduxForm({ form: 'register' })(RegisterForm)
