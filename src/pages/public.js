import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Container } from 'semantic-ui-react'

export default class PublicPage extends Component {
  render() {
    return (
      <Container>
        <Helmet
          title="Gatsby Public"
          meta={[
            { name: 'description', content: 'Public' },
            { name: 'keywords', content: 'Public, Page' },
          ]}
        />
        <div className="top-space">
          <h1>Public</h1>
          <p>This page is public, everyone can see it.</p>
        </div>
      </Container>
    )
  }
}
