import { 
  INC_COUNT, 
  DEC_COUNT
} from './types';

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
