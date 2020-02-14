import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchCountries } from 'redux/reducers/common';
import { registrateUser, clearRegistrateUser } from 'redux/reducers/users';

import { Link } from 'react-router-dom';

import { Field, reduxForm } from 'redux-form';
import { Form, Message, Segment, Header, Divider, Icon } from 'semantic-ui-react';
import TextField from 'components/redux-form-adapters/TextField';
import SelectField from 'components/redux-form-adapters/SelectField';
import Button from 'components/elements/buttons/Button';

import validate from './validate';

class SignupForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    fetchCountries: PropTypes.func.isRequired,
    registrateUser: PropTypes.func.isRequired,
    clearRegistrateUser: PropTypes.func.isRequired,
    countries: PropTypes.object,
    registrateUserSuccess: PropTypes.object,
    registrateUserError: PropTypes.object,
  };

  static defaultProps = {
    countries: null,
    registrateUserSuccess: null,
    registrateUserError: null,
  }

  componentDidMount() {
    if (!this.props.countries) {
      this.props.fetchCountries();
    }
  }

  componentWillUnmount() {
    this.props.clearRegistrateUser();
  }

  handleSubmit = (values) => {
    this.props.registrateUser(
      values.email,
      values.password1,
      values.country_id,
    );
  }

  render() {
    const { countries, registrateUserSuccess, registrateUserError } = this.props;

    const countriesOptions = countries ? countries.map(
      country => (
        { key: country.abbreviation, text: country.name, value: country.id }
      ),
    ) : [];

    if (registrateUserSuccess) {
      return (
        <div className="signup-form__component">
          <h1>Registration Success!</h1>
          <div>Verification email was sent.</div>
        </div>
      );
    }

    return (
      <div className="signup-form__component">
        <Segment basic>
          <Link to="/">
            <Icon name="home" size="big" />
          </Link>
          <Header as="h2">Signup</Header>

          <Form
            onSubmit={this.props.handleSubmit(this.handleSubmit)}
            error={!this.props.valid}
          >
            {/* Country */}
            <Field
              search
              label="Country:"
              component={SelectField}
              name="country_id"
              loading={countriesOptions.length === 0}
              options={countriesOptions}
              placeholder="Select your country"
              onBlur={(e) => e.preventDefault()}
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

            <Button submit>
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
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    countries: state.commonReducer.countries,
    registrateUserSuccess: state.usersReducer.registrateUserSuccess,
    registrateUserError: state.usersReducer.registrateUserError,
  }
);

export default connect(
  mapStateToProps,
  {
    fetchCountries,
    registrateUser,
    clearRegistrateUser,
  },
)(reduxForm({
  form: 'SignupForm',
  validate,
})(SignupForm));
