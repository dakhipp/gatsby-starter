import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { renderToString } from 'react-dom/server'

import { client, store } from './src/store';

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const ConnectedBody = () => (
    <ApolloProvider store={store} client={client}>
      {bodyComponent}
    </ApolloProvider>
  )
  replaceBodyHTMLString(renderToString(<ConnectedBody/>))
}
