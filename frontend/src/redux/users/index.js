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

const initialState = {
  me: null,
  meError: null,
  registrateUserSuccess: null,
  registrateUserError: null,
  accessToken: null,
  loginError: null,
  loggingOut: false,
};


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
    case LOGGED_IN:
      return {
        ...state,
        accessToken: action.payload.data.token,
        loginError: null,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        accessToken: null,
        loginError: action.payload.data,
      };
    case CLEAR_LOGIN_ERROR:
      return {
        ...state,
        loginError: null,
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
    default:
      return state;
  }
};
