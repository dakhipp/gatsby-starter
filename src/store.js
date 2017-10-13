import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { ApolloClient, createNetworkInterface } from 'react-apollo';
import countReducer from './reducers/count-reducer';

const networkInterface = createNetworkInterface({
  uri: 'https://kdyikvblpj.execute-api.us-west-2.amazonaws.com/production'
});
const client = new ApolloClient({
  dataIdFromObject: o => o.id,
  networkInterface: networkInterface
});

const store = createStore(
  combineReducers({
    count: countReducer,
    apollo: client.reducer(),
  }),
  {}, // initial state
  compose(
      applyMiddleware(client.middleware()),
      (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )
);

export default {
  client,
  store,
}
