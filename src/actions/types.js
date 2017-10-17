// action types will show up in log
// prefixed with $$app-action to easily distinguish from lib actions

// count reducer
export const INC_COUNT = '$$app-action/INC_COUNT';
export const DEC_COUNT = '$$app-action/DEC_COUNT';

// iam reducer
export const SET_IAM = '$$app-action/SET_IAM';
export const REMOVE_IAM = '$$app-action/REMOVE_IAM';

// feedback reducer
export const REGISTER_SUCCESS = '$$app-action/REGISTER_SUCCESS';
export const REGISTER_ERROR = '$$app-action/REGISTER_ERROR';
export const LOGIN_SUCCESS = '$$app-action/LOGIN_SUCCESS';
export const LOGIN_ERROR = '$$app-action/LOGIN_ERROR';

// no reducer, action readability, calls other actions
export const REGISTER_SUBMIT = '$$app-action/REGISTER_SUBMIT';
export const LOGIN_SUBMIT = '$$app-action/LOGIN_SUBMIT';