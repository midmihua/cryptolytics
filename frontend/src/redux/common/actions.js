import {
  RESET_NOT_FOUND,
  SET_ACTIVE_PAGE,
  RESET_ACTIVE_PAGE,
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
