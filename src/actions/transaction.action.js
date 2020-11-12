import { httpClient } from "./../utils/HttpClient";
import {
  TRANSACTION_SUCCESS,
  TRANSACTION_FETCHING,
  TRANSACTION_FAILED,
  server,
} from "../constants";

export const setStateTransToSuccess = (payload) => ({
  type: TRANSACTION_SUCCESS,
  payload,
});

const setStateTransToFetching = () => ({
  type: TRANSACTION_FETCHING,
});

const setStateTransToFailed = () => ({
  type: TRANSACTION_FAILED,
});


export const getTransactions = () => {
  return (dispatch) => {
    dispatch(setStateTransToFetching());
    doGetTrans(dispatch);
  };
};

const doGetTrans = async dispatch => {
    try {
      let result = await httpClient.get(server.TRANSACTION_URL);
      dispatch(setStateTransToSuccess(result.data));
    } catch (err) {
      dispatch(setStateTransToFailed());
    }
  };
  

