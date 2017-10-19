import { SET_IAM, REMOVE_IAM } from '../actions/types'

const INITIAL_STATE = {
  iam: {},
}

// iam reducer
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_IAM:
      return { ...state, iam: action.payload }
    case REMOVE_IAM:
      return { ...state, iam: {} }
    default:
      return state
  }
}
