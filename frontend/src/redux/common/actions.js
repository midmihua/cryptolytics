import {
  RESET_NOT_FOUND,
  SET_ACTIVE_PAGE,
  RESET_ACTIVE_PAGE,
  SET_BREADCRUMBS,
  CLEAR_BREADCRUMBS,
} from 'redux/common/types';


export const resetNotFound = () => dispatch => {
  dispatch({
    type: RESET_NOT_FOUND,
  });
};

export const setActivePage = activePage => dispatch => {
  dispatch({
    type: SET_ACTIVE_PAGE,
    payload: activePage,
  });
};

export const resetActivePage = () => dispatch => {
  dispatch({
    type: RESET_ACTIVE_PAGE,
  });
};

export const setBreadcrumbs = breadcrumbs => dispatch => {
  dispatch({
    type: SET_BREADCRUMBS,
    payload: breadcrumbs,
  });
};

export const clearBreadcrumbs = () => dispatch => {
  dispatch({
    type: CLEAR_BREADCRUMBS,
  });
};
