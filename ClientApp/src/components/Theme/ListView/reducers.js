import {
  FETCH_LIST,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE
} from '../../../constants/actionTypes';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_LIST:
      return {...state, loading: true};
    case FETCH_LIST_SUCCESS:
      return {data: action.payload, loading: false, error: false};
    case FETCH_LIST_FAILURE:
      return {data: [], loading: false, error: true};
    default:
      return state;
  }
}