import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Container } from 'semantic-ui-react'

export default class AdminPage extends Component {
  render() {
    return (
      <Container>
        <Helmet
          title="Gatsby Admin"
          meta={[
            { name: 'description', content: 'Admin' },
            { name: 'keywords', content: 'Admin, Page' },
          ]}
        />
        <div className="top-space">
          <h1>Admin</h1>
          <p>This page is private, only admins can see it.</p>
        </div>
      </Container>
    )
  }
}
