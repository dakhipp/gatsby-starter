import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Container } from 'semantic-ui-react'

import CounterContainer from '../containers/counterContainer'
import RegisterContainer from '../containers/registerContainer'

export default class HomePage extends Component {
  render() {
    return (
      <Container>
        <Helmet
          title="Gatsby Home"
          meta={[
            { name: 'description', content: 'Home' },
            { name: 'keywords', content: 'Home, Page' },
          ]}
        />
        <div className="top-space">
          <h1>Home</h1>
          <p>Welcome to the home page.</p>
          <br />

          <CounterContainer />
        </div>
      </Container>
    )
  }
}
