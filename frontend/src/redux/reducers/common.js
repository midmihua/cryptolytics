import restapi from 'utils/restapi';

const initialState = {
  siteLoading: false,
  countries: null,
  countriesError: null,
}

const SITE_LOADING = 'SITE_LOADING';
const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
const FETCH_COUNTRIES_ERROR = 'FETCH_COUNTRIES_ERROR';


export default (state = initialState, action) => {
  switch (action.type) {
    case SITE_LOADING:
      return {
        ...state,
        siteLoading: action.payload,
      };
    case FETCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload.data,
        countriesError: null,
      };
    case FETCH_COUNTRIES_ERROR:
      return {
        ...state,
        countries: null,
        countriesError: action.payload.data,
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


export const fetchCountries = () => baseErrorsHandlerDecorator(
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_ERROR,
  () => restapi.get('v1/users/countries/'),
  false,
);
