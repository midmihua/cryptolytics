const initialState = {
  siteLoading: false,
  notFound: false,
  activePage: null,
}

const SITE_LOADING = 'SITE_LOADING';

const NOT_FOUND = 'NOT_FOUND';
const RESET_NOT_FOUND = 'RESET_NOT_FOUND';

const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
const RESET_ACTIVE_PAGE = 'RESET_ACTIVE_PAGE';


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
}


export const baseErrorsHandlerDecorator = (
  successConst,
  errorConst,
  func,
  loading = true,
) => {
  return (dispatch) => {
    dispatch({
      type: SITE_LOADING,
      payload: loading,
    });
    return func(dispatch)
      .then((response) => {
        dispatch({
          type: successConst,
          payload: response,
        });
        dispatch({
          type: SITE_LOADING,
          payload: false,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: errorConst,
          payload: error.response,
        });
        dispatch({
          type: SITE_LOADING,
          payload: false,
        });
      });
  };
};

export const resetNotFound = () => (dispatch) => {
  dispatch({
    type: RESET_NOT_FOUND,
  });
};

export const setActivePage = activePage => (dispatch) => {
  dispatch({
    type: SET_ACTIVE_PAGE,
    payload: activePage,
  });
};

export const resetActivePage = () => (dispatch) => {
  dispatch({
    type: RESET_ACTIVE_PAGE,
  });
};
