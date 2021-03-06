import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Container } from 'semantic-ui-react'

export default class NotFoundPage extends Component {
  render() {
    return (
      <Container>
        <Helmet
          title="Gatsby 404"
          meta={[
            { name: 'description', content: '404 Not Found' },
            { name: 'keywords', content: '404, Not Found, Page' },
          ]}
        />
        <div className="top-space">
          <h1>404</h1>
          <p>The page you are looking for does not exist.</p>
        </div>
      </Container>
    )
  }
}
