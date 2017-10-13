import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Container } from 'semantic-ui-react'

export default class UserPage extends Component {
  render() {
    return (
      <Container>
        <Helmet
          title="Gatsby User"
          meta={[
            { name: 'description', content: 'User' },
            { name: 'keywords', content: 'User, Page' },
          ]}
        />
        <div className="top-space">
          <h1>User</h1>
          <p>This page is private, only users can see it.</p>
        </div>
      </Container>
    )
  }
}
