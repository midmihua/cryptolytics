import {
  SITE_LOADING,
  NOT_FOUND,
} from 'redux/common/types';


const errorHandler = (dispatch, errorResponse, errorConst) => {
  switch (errorResponse.status) {
    case 404:
      dispatch({
        type: NOT_FOUND,
      });
      dispatch({
        type: SITE_LOADING,
        payload: false,
      });
      break;
    default:
      dispatch({
        type: errorConst,
        payload: errorResponse,
      });
      dispatch({
        type: SITE_LOADING,
        payload: false,
      });
  }
};

export const baseErrorsHandlerDecorator = (
  successConst,
  errorConst,
  func,
  loading = true,
) => {
  return dispatch => {
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
      .catch(error => {
        console.log(error);
        if (error.response) {
          errorHandler(dispatch, error.response, errorConst);
        }
      });
  };
};
