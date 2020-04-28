import restapi from 'utils/restapi';
import { baseErrorsHandlerDecorator } from 'redux/utils';

import {
  FETCH_EXCHANGE_LIST_SUCCESS,
  FETCH_EXCHANGE_LIST_ERROR,
  CLEAR_FETCH_EXCHANGE_LIST,
} from 'redux/exchanges/types';


export const fetchExchangeList = () => baseErrorsHandlerDecorator(
  FETCH_EXCHANGE_LIST_SUCCESS,
  FETCH_EXCHANGE_LIST_ERROR,
  () => restapi.get('/exchanges'),
  false,
);

export const clearFetchExchangeList = () => dispatch => {
  dispatch({
    type: CLEAR_FETCH_EXCHANGE_LIST,
  });
};
