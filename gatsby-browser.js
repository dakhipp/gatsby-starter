import React from 'react'
import { Router } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import PropTypes from 'prop-types'

import { setIam } from './src/actions'
import { client, store } from './src/store'

// user from local storage and update iam store accordingly
const iam = JSON.parse(localStorage.getItem('iam'))
if (iam) {
  // update auth application state
  store.dispatch(setIam(iam))
}

exports.replaceRouterComponent = ({ history }) => {
  const RouterWrapper = ({ children }) => {
    return (
      <ApolloProvider store={store} client={client}>
        <Router history={history}>{children}</Router>
      </ApolloProvider>
    )
  }

  RouterWrapper.propTypes = {
    children: PropTypes.object,
  }

  return RouterWrapper
}
