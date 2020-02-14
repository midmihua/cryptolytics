import restapi from 'utils/restapi';

import { baseErrorsHandlerDecorator } from './common';

const initialState = {
  me: null,
  meError: null,
  registrateUserSuccess: null,
  registrateUserError: null,
  verifyRegistrationEmailError: null,
  accessToken: null,
  refreshToken: null,
  loginError: null,
  loggingOut: false,
  refreshTokenError: null,
  sendPasswordResetLinkSuccess: null,
  sendPasswordResetLinkError: null,
};

export const CLIENT_ID = 'icLhM0lJi6AIhimXSw5AJeRrFDtWQqHo';
export const CLIENT_SECRET = '8cRTl93DdKzigeDfovuKyoQU6VyFb8riUlOzErplZDXe2dKULqfW3hM6zChSYfk2Dvs2zijMbL42WK5pmaG79EmbhsFAZZ1Z5vN89iJqAlxl9QlB4H6Nh4jLKY6QM8IO';
export const DEFAULT_SCOPES = [
  'read write users:read users:write',
  'profiles:read profiles:write',
  'products:read products:write products_media:write',
  'orders:read orders:write',
  'customers:read',
  'campaigns:read campaigns:write',
  'billing:write',
].join(' ');

const REGISTRATE_USER_SUCCESS = 'REGISTRATE_USER_SUCCESS';
const REGISTRATE_USER_ERROR = 'REGISTRATE_USER_ERROR';
const CLEAR_REGISTRATE_USER = 'CLEAR_REGISTRATE_USER';

const VERIFY_REGISTRATION_EMAIL_ERROR = 'VERIFY_REGISTRATION_EMAIL_SUCCESS';

const LOGGED_IN = 'LOGGED_IN';
const LOGIN_ERROR = 'LOGIN_ERROR';
const CLEAR_LOGIN_ERROR = 'CLEAR_LOGIN_ERROR';

const FETCH_ME = 'FETCH_ME';
const FETCH_ME_ERROR = 'FETCH_ME_ERROR';

const LOGGING_OUT = 'LOGGING_OUT';
const LOGGED_OUT = 'LOGGED_OUT';

const REFRESH_TOKEN = 'REFRESH_TOKEN';
const REFRESH_TOKEN_ERROR = 'REFRESH_TOKEN_ERROR';

const SEND_PASSWORD_RESET_LINK_SUCCESS = 'SEND_PASSWORD_RESET_LINK_SUCCESS';
const SEND_PASSWORD_RESET_LINK_ERROR = 'SEND_PASSWORD_RESET_LINK_ERROR';
const CLEAR_SEND_PASSWORD_RESET_LINK = 'ClEAR_SEND_PASSWORD_RESET_LINK';


export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATE_USER_SUCCESS:
      return {
        ...state,
        registrateUserSuccess: action.payload.data,
        registrateUserError: null,
      };
    case REGISTRATE_USER_ERROR:
      return {
        ...state,
        registrateUserSuccess: null,
        registrateUserError: action.payload.data,
      };
    case CLEAR_REGISTRATE_USER:
      return {
        ...state,
        registrateUserSuccess: null,
        registrateUserError: null,
      };
    case VERIFY_REGISTRATION_EMAIL_ERROR:
      return {
        ...state,
        verifyRegistrationEmailError: action.payload.data,
      };
    case LOGGED_IN:
      return {
        ...state,
        accessToken: action.payload.data.access_token,
        refreshToken: action.payload.data.refresh_token,
        loginError: null,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        accessToken: null,
        refreshToken: null,
        loginError: action.payload.data,
      };
    case CLEAR_LOGIN_ERROR:
      return {
        ...state,
        errorLogin: null,
      };
    case FETCH_ME:
      return {
        ...state,
        me: action.payload.data,
        meError: null,
      };
    case FETCH_ME_ERROR:
      return {
        ...state,
        me: null,
        meError: action.payload.data,
      };
    case LOGGING_OUT:
      return {
        ...state,
        loggingOut: true,
      };
    case LOGGED_OUT:
      return {
        ...state,
        loggingOut: false,
        accessToken: null,
        refreshToken: null,
        me: null,
        meError: null,
      };
    case REFRESH_TOKEN:
      return {
        ...state,
        accessToken: action.payload.data.access_token,
        refreshToken: action.payload.data.refresh_token,
        refreshTokenError: null,
      };
    case REFRESH_TOKEN_ERROR:
      return {
        ...state,
        refreshTokenError: action.payload.data,
      };
    case SEND_PASSWORD_RESET_LINK_SUCCESS:
      return {
        ...state,
        sendPasswordResetLinkSuccess: action.payload.data,
        sendPasswordResetLinkError: null,
      };
    case SEND_PASSWORD_RESET_LINK_ERROR:
      return {
        ...state,
        sendPasswordResetLinkSuccess: null,
        sendPasswordResetLinkError: action.payload.data,
      };
    case CLEAR_SEND_PASSWORD_RESET_LINK:
      return {
        ...state,
        sendPasswordResetLinkSuccess: null,
        sendPasswordResetLinkError: null,
      };
    default:
      return state;
  }
};


export const registrateUser = (email, password, countryId) => baseErrorsHandlerDecorator(
  REGISTRATE_USER_SUCCESS,
  REGISTRATE_USER_ERROR,
  () => restapi.post(
    'v1/users/register/',
    { email, password, country_id: countryId },
  ),
);

export const clearRegistrateUser = () => (dispatch) => {
  dispatch({
    type: CLEAR_REGISTRATE_USER,
  });
};

export const verifyRegistrationEmail = key => baseErrorsHandlerDecorator(
  LOGGED_IN,
  VERIFY_REGISTRATION_EMAIL_ERROR,
  () => restapi.post(
    'v1/users/register/verify_email/',
    {
      key,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      scopes: DEFAULT_SCOPES,
    },
  ),
);

export const retrieveToken = (email, password)  => baseErrorsHandlerDecorator(
  LOGGED_IN,
  LOGIN_ERROR,
  () => restapi.post(
    'v1/users/token/',
    {
      email,
      password,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      scopes: DEFAULT_SCOPES,
    },
  ),
);

export const clearLoginError = () => (dispatch) => {
  dispatch({
    type: CLEAR_LOGIN_ERROR,
  });
};

export const fetchMe = () => baseErrorsHandlerDecorator(
  FETCH_ME,
  FETCH_ME_ERROR,
  () => restapi.get('v1/users/me/'),
);

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGGING_OUT,
  });
};

export const logoutComplete = () => (dispatch) => {
  dispatch({
    type: LOGGED_OUT,
  });
};

export const refreshTocken = refreshToken => baseErrorsHandlerDecorator(
  REFRESH_TOKEN,
  REFRESH_TOKEN_ERROR,
  () => restapi.post(
    'v1/users/token/refresh/',
    {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      refresh_token: refreshToken,
    },
  ),
);

export const sendPasswordResetLink = email => baseErrorsHandlerDecorator(
  SEND_PASSWORD_RESET_LINK_SUCCESS,
  SEND_PASSWORD_RESET_LINK_ERROR,
  () => restapi.post(
    'v1/users/password/recovery/',
    { email },
  ),
);

export const clearSendPasswordResetLink = () => (dispatch) => {
  dispatch({
    type: CLEAR_SEND_PASSWORD_RESET_LINK,
  });
};
