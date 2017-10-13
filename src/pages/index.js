import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Container } from 'semantic-ui-react'

import Login from '../components/login';
import Counter from '../components/counter';

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

          <Counter />

          <Login />
        </div>
      </Container>
    )
  }
}
