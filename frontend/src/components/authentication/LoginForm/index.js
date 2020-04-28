import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { retrieveToken, clearLoginError } from 'redux/users/actions';

import { Field, reduxForm } from 'redux-form';
import { Form, Message } from 'semantic-ui-react';
import TextField from 'components/redux-form-adapters/TextField';
import Button from 'components/elements/buttons/Button';

import validate from './validate';


const LoginForm = props => {
  const {
    loginError,
    handleSubmit,
    retrieveToken,
    clearLoginError,
    valid,
  } = props;

  useEffect(() => {
    return () => {
      clearLoginError();
    }
  }, []);

  const _handleSubmit = values => {
    retrieveToken(values.email, values.password);
  }

  return (
    <div className="login-form__component">
      <h1>Login</h1>
      <Form
        onSubmit={handleSubmit(_handleSubmit)}
        error={!valid}
      >
        {/* Email Address */}
        <Field
          label="Email Address:"
          component={TextField}
          name="email"
          type="email"
          placeholder="Enter you email"
          required
        />

        {/* Password */}
        <Field
          label="Password:"
          component={TextField}
          name="password"
          type="password"
          placeholder="Enter your password"
          required
        />

        <Button
          submit
          disabled={!valid}
        >
          LOGIN
        </Button>

      </Form>

      {loginError &&
        <Message
          warning
          header="Login Error"
          content="Login Error"
        />
      }
    </div>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  retrieveToken: PropTypes.func.isRequired,
  clearLoginError: PropTypes.func.isRequired,
  loginError: PropTypes.object,
};

LoginForm.defaultProps = {
  loginError: null,
};

const mapStateToProps = state => (
  {
    loginError: state.usersReducer.loginError,
  }
);

export default connect(
  mapStateToProps,
  {
    retrieveToken,
    clearLoginError,
  },
)(reduxForm({
  form: 'LoginForm',
  validate,
})(LoginForm));
