import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../actions/types'

const INITIAL_STATE = {
  type: null,
  messages: [],
}

// count reducers
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, type: 'success', messages: [].concat(action.payload) }
    case REGISTER_ERROR:
      return { ...state, type: 'error', messages: [].concat(action.payload) }
    case LOGIN_SUCCESS:
      return { ...state, type: 'success', messages: [].concat(action.payload) }
    case LOGIN_ERROR:
      return { ...state, type: 'error', messages: [].concat(action.payload) }
    default:
      return state
  }
}
