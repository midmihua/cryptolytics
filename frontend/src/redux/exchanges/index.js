import {
  FETCH_EXCHANGE_LIST_SUCCESS,
  FETCH_EXCHANGE_LIST_ERROR,
  CLEAR_FETCH_EXCHANGE_LIST,
} from 'redux/exchanges/types';


const initialState = {
  exchangeList: null,
  exchangeListError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXCHANGE_LIST_SUCCESS:
      return {
        ...state,
        exchangeList: action.payload.data,
        exchangeListError: null,
      };
    case FETCH_EXCHANGE_LIST_ERROR:
      return {
        ...state,
        exchangeList: null,
        exchangeListError: action.payload.data,
      };
    case CLEAR_FETCH_EXCHANGE_LIST:
      return {
        ...state,
        exchangeList: null,
        exchangeListError: null,
      };
    default:
      return state;
  };
};
