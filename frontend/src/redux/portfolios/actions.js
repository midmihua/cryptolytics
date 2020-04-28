import restapi from 'utils/restapi';
import { baseErrorsHandlerDecorator } from 'redux/utils';

import {
  FETCH_PORTFOLIO_LIST_SUCCESS,
  FETCH_PORTFOLIO_LIST_ERROR,
  CLEAR_FETCH_PORTFOLIO_LIST,
  FETCH_PORTFOLIO_DETAILS_SUCCESS,
  FETCH_PORTFOLIO_DETAILS_ERROR,
  CLEAR_FETCH_PORTFOLIO_DETAILS,
} from 'redux/portfolios/types';


export const fetchPortfolioList = () => baseErrorsHandlerDecorator(
  FETCH_PORTFOLIO_LIST_SUCCESS,
  FETCH_PORTFOLIO_LIST_ERROR,
  () => restapi.get('/portfolios'),
  false,
);

export const clearFetchPortfolioList = () => dispatch => {
  dispatch({
    type: CLEAR_FETCH_PORTFOLIO_LIST,
  });
};

export const fetchPortfolioDetails = portfolioId => baseErrorsHandlerDecorator(
  FETCH_PORTFOLIO_DETAILS_SUCCESS,
  FETCH_PORTFOLIO_DETAILS_ERROR,
  () => restapi.get(`/portfolios/${portfolioId}`),
  false,
);

export const clearFetchPortfolioDetails = () => dispatch => {
  dispatch({
    type: CLEAR_FETCH_PORTFOLIO_DETAILS,
  });
};
