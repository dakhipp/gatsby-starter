import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { ApolloClient, createNetworkInterface } from 'react-apollo'
import thunk from 'redux-thunk'
import { reducer as form } from 'redux-form'

import iamReducer from './reducers/iam-reducer'
import feedbackReducer from './reducers/feedback-reducer'
import countReducer from './reducers/count-reducer'

const networkInterface = createNetworkInterface({
  // uri: 'https://kdyikvblpj.execute-api.us-west-2.amazonaws.com/production'
  uri: 'http://0.0.0.0:8000/',
})

// set Authorization header if logged in
networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = new Headers()
      }
      const loggedIn = localStorage.hasOwnProperty('iam')

      if (typeof window !== 'undefined' && loggedIn) {
        const token = JSON.parse(localStorage.getItem('iam')).token
        req.options.headers.Authorization = `Bearer ${token}`
      }
      next()
    },
  },
])

const client = new ApolloClient({
  // dataIdFromObject: o => o.id,
  networkInterface,
})

const store = createStore(
  combineReducers({
    form,
    iam: iamReducer,
    feedback: feedbackReducer,
    count: countReducer,
    apollo: client.reducer(),
  }),
  {}, // initial state
  compose(
    applyMiddleware(client.middleware(), thunk.withExtraArgument(client)),
    typeof window !== 'undefined' &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
)

export default {
  client,
  store,
}
