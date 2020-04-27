import {
  SITE_LOADING,
  NOT_FOUND,
  RESET_NOT_FOUND,
  SET_ACTIVE_PAGE,
  RESET_ACTIVE_PAGE,
} from 'redux/common/types';

const initialState = {
  siteLoading: false,
  notFound: false,
  activePage: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SITE_LOADING:
      return {
        ...state,
        siteLoading: action.payload,
      };
    case NOT_FOUND:
      return {
        ...state,
        notFound: true,
      };
    case RESET_NOT_FOUND:
      return {
        ...state,
        notFound: false,
      };
    case SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.payload,
      };
    case RESET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: null,
      };
    default:
      return state;
  }
};
