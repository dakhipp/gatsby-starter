import {
  INC_COUNT,
  DEC_COUNT,
  REGISTER_SUBMIT,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUBMIT,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SET_IAM,
  REMOVE_IAM,
} from './types'

export function incCount(count) {
  return {
    type: INC_COUNT,
    payload: count + 1,
  }
}

export function decCount(count) {
  return {
    type: DEC_COUNT,
    payload: count - 1,
  }
}

export function registerSubmit(mutate, variables) {
  return function(dispatch) {
    dispatch({ type: REGISTER_SUBMIT })
    return mutate({ variables })
      .then(res => {
        // save use to localStorage
        localStorage.setItem('iam', JSON.stringify(res.data.login))

        // register success
        dispatch({ type: REGISTER_SUCCESS, payload: 'Login Successful' })

        // set iam
        dispatch(setIam(res.data.register))
      })
      .catch(err => {
        // register error
        dispatch({
          type: REGISTER_ERROR,
          payload: err.graphQLErrors.map(e => e.message),
        })
      })
  }
}

export function loginSubmit(mutate, variables) {
  return function(dispatch) {
    dispatch({ type: LOGIN_SUBMIT })
    return mutate({ variables })
      .then(res => {
        // save use to localStorage
        localStorage.setItem('iam', JSON.stringify(res.data.login))

        // register success
        dispatch({ type: LOGIN_SUCCESS, payload: 'Login Successful' })

        // set iam
        dispatch(setIam(res.data.login))
      })
      .catch(err => {
        // register error
        dispatch({
          type: LOGIN_ERROR,
          payload: err.graphQLErrors.map(e => e.message),
        })
      })
  }
}

export function setIam(payload) {
  return {
    type: SET_IAM,
    payload,
  }
}

export function removeIam() {
  return {
    type: REMOVE_IAM,
  }
}
