import restapi from 'utils/restapi';
import { baseErrorsHandlerDecorator } from 'redux/utils';

import {
  REGISTRATE_USER_SUCCESS,
  REGISTRATE_USER_ERROR,
  CLEAR_REGISTRATE_USER,
  LOGGED_IN,
  LOGIN_ERROR,
  CLEAR_LOGIN_ERROR,
  FETCH_ME,
  FETCH_ME_ERROR,
  LOGGING_OUT,
  LOGGED_OUT,
} from 'redux/users/types';


export const registrateUser = (username, email, password) => baseErrorsHandlerDecorator(
  REGISTRATE_USER_SUCCESS,
  REGISTRATE_USER_ERROR,
  () => restapi.post(
    '/signup',
    { username, email, password },
  ),
);

export const clearRegistrateUser = () => dispatch => {
  dispatch({
    type: CLEAR_REGISTRATE_USER,
  });
};

export const retrieveToken = (email, password)  => baseErrorsHandlerDecorator(
  LOGGED_IN,
  LOGIN_ERROR,
  () => restapi.post(
    '/login',
    {
      email,
      password,
    },
  ),
);

export const clearLoginError = () => dispatch => {
  dispatch({
    type: CLEAR_LOGIN_ERROR,
  });
};

export const fetchMe = () => baseErrorsHandlerDecorator(
  FETCH_ME,
  FETCH_ME_ERROR,
  () => restapi.get('/me'),
);

export const logout = () => dispatch => {
  dispatch({
    type: LOGGING_OUT,
  });
};

export const logoutComplete = () => dispatch => {
  dispatch({
    type: LOGGED_OUT,
  });
};
