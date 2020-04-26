import {
  FETCH_PORTFOLIO_LIST_SUCCESS,
  FETCH_PORTFOLIO_LIST_ERROR,
  CLEAR_FETCH_PORTFOLIO_LIST,
  FETCH_PORTFOLIO_DETAILS_SUCCESS,
  FETCH_PORTFOLIO_DETAILS_ERROR,
  CLEAR_FETCH_PORTFOLIO_DETAILS,
} from 'redux/portfolios/types';


const initialState = {
  portfolioList: null,
  portfolioListError: null,
  portfolioDetails: null,
  portfolioDetailsError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PORTFOLIO_LIST_SUCCESS:
      return {
        ...state,
        portfolioList: action.payload.data,
        portfolioListError: null,
      };
    case FETCH_PORTFOLIO_LIST_ERROR:
      return {
        ...state,
        portfolioList: null,
        portfolioListError: action.payload.data,
      };
    case CLEAR_FETCH_PORTFOLIO_LIST:
      return {
        ...state,
        portfolioList: null,
        portfolioListError: null,
      };
    case FETCH_PORTFOLIO_DETAILS_SUCCESS:
      return {
        ...state,
        portfolioDetails: action.payload.data,
        portfolioDetailsError: null,
      };
    case FETCH_PORTFOLIO_DETAILS_ERROR:
      return {
        ...state,
        portfolioDetails: null,
        portfolioDetailsError: action.payload.data,
      };
    case CLEAR_FETCH_PORTFOLIO_DETAILS:
      return {
        ...state,
        portfolioDetails: null,
        portfolioDetailsError: null,
      };
    default:
      return state;
  };
};
