import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from 'react-apollo';

import { client, store } from './src/store';

exports.replaceRouterComponent = ({ history }) => {
  const RouterWrapper = ({ children }) =>
    <ApolloProvider store={store} client={client}>
      <Router history={history}>
        { children }
      </Router>
    </ApolloProvider>;

  return RouterWrapper;
};
