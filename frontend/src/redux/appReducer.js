import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import commonReducer from 'redux/common';
import usersReducer from 'redux/users';
import portfoliosReducer from 'redux/portfolios';

export default combineReducers({
  commonReducer,
  usersReducer,
  portfoliosReducer,
  form: formReducer,
});
