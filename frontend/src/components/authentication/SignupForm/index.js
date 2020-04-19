import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { registrateUser, clearRegistrateUser } from 'redux/reducers/users';

import { Link } from 'react-router-dom';

import { Field, reduxForm } from 'redux-form';
import { Form, Message, Divider } from 'semantic-ui-react';
import TextField from 'components/redux-form-adapters/TextField';
import Button from 'components/elements/buttons/Button';

import validate from './validate';


const SignupForm = props => {
  const {
    registrateUser,
    clearRegistrateUser,
    registrateUserSuccess,
    registrateUserError,
    handleSubmit,
    valid,
  } = props;

  useEffect(() => {
    return () => {
      clearRegistrateUser();
    }
  }, []);

  const _handleSubmit = values => {
    registrateUser(
      values.username,
      values.email,
      values.password1,
    );
  }

  if (registrateUserSuccess) {
    return (
      <div className="signup-form__component">
        <h1>Registration Success!</h1>
      </div>
    );
  }

  return (
    <div className="signup-form__component">
      <h1>Sign Up</h1>
      <Form
        onSubmit={handleSubmit(_handleSubmit)}
        error={valid}
      >
        {/* Email Address */}
        <Field
          label="Username:"
          component={TextField}
          name="username"
          type="text"
          placeholder="Enter you username"
          required
        />

        {/* Email Address */}
        <Field
          label="Email Address:"
          component={TextField}
          name="email"
          type="email"
          placeholder="Enter you email"
          required
        />

        {/* Password 1 */}
        <Field
          label="Password:"
          component={TextField}
          name="password1"
          type="password"
          placeholder="Enter your password"
          required
        />

        {/* Password 2 */}
        <Field
          label="Confirm Password:"
          component={TextField}
          name="password2"
          type="password"
          placeholder="Confirm your password"
          required
        />

        <Button
          submit
          disabled={!valid}
        >
          SIGNUP
        </Button>

      </Form>

      {registrateUserError &&
        <Message
          warning
          header="Registration Error"
          content="Registrate User Error!"
        />
      }

      <Divider section />
      <Link to="/login">Login</Link>
    </div>
  );
};

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  registrateUser: PropTypes.func.isRequired,
  clearRegistrateUser: PropTypes.func.isRequired,
  registrateUserSuccess: PropTypes.object,
  registrateUserError: PropTypes.object,
};

SignupForm.defaultProps = {
  registrateUserSuccess: null,
  registrateUserError: null,
};

const mapStateToProps = state => (
  {
    registrateUserSuccess: state.usersReducer.registrateUserSuccess,
    registrateUserError: state.usersReducer.registrateUserError,
  }
);

export default connect(
  mapStateToProps,
  {
    registrateUser,
    clearRegistrateUser,
  },
)(reduxForm({
  form: 'SignupForm',
  validate,
})(SignupForm));
