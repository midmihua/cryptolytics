import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getCookie } from 'utils/cookies';

import { Redirect, Link } from 'react-router-dom';

import './AuthLayout.css';

const AuthLayout = ({ children, accessToken }) => {
  if (accessToken || getCookie('accessToken')) {
    return <Redirect to="/" />;
  }

  return (
    <div className="auth-layout__component">
      <div className="wrapper">
        <div className="header">
          <Link to="/">
            Home
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
  accessToken: PropTypes.string,
};

AuthLayout.defaultProps = {
  accessToken: null,
};

const mapStateToProps = state => (
  {
    accessToken: state.usersReducer.accessToken,
  }
);

export default connect(
  mapStateToProps,
  {},
)(AuthLayout);
