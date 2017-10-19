import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
import PropTypes from 'prop-types'

import styles from './formField.module.css'

export default class FormField extends Component {
  constructor(props) {
    super(props)

    // bring back this.props.meta: { touched, error, warning }, to make better field
  }

  render() {
    return (
      <div>
        <Input
          {...this.props.input}
          className={styles.input}
          placeholder={this.props.label}
          type={this.props.type}
        />
      </div>
    )
  }
}

FormField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
}
