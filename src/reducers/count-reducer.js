import {
  INC_COUNT,
  DEC_COUNT
} from '../actions/types';

const INITIAL_STATE = {
  count: 0,
};

// auth reducers
export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case INC_COUNT:
      return { ...state, count: action.payload };
    case DEC_COUNT:
      return { ...state, count: action.payload };
    default:
      return state;
  }
  return state;
}