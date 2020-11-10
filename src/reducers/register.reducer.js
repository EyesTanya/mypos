import {
  REGISTER_FAILED,
  REGISTER_FETCHING,
  REGISTER_SUCCESS,
} from "../constants";

const initialState = { 
  result: null,
  isFetching: false,
  isError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_FETCHING:
      return { ...state, result: null, isFetching: true, isError: false };
    case REGISTER_SUCCESS:
      return {
        ...state,
        result: action.payload,
        isFetching: false,
        isError: false,
      };

    case REGISTER_FAILED:
      return {
        ...state,
        result: null,
        isFetching: false,
        isError: true,
      };

    default:
      return state;
  }
};
