import {
    LOGIN_FAILED,
    LOGIN_FETCHING,
    LOGIN_SUCCESS,
    LOGOUT,
  } from "../constants";
  
  const initialState = {
    result: null,
    isFetching: false,
    isError: false,
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case LOGIN_FETCHING:
        return { ...state, result: null, isFetching: true, isError: false };
      case LOGIN_SUCCESS:
        return { ...state, result: payload, isFetching: false, isError: false };
      case LOGIN_FAILED:
        return { ...state, result: payload, isFetching: false, isError: true };
        case LOGOUT:
        return { ...state, result: "", isFetching: false, isError: false };
      default:
        return state;
    }
  };
  