import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import Button from 'components/elements/buttons/Button';

import './LandingPageContent.css';

const LandingPageContent = ({ me, meError }) => {
  if (me && !meError) {
    return <Redirect to="/dashboard/home" />;
  }

  return (
    <div className="landing-page-content__component">
      <div className="wrapper">
        <div className="logo">Cryptolytics</div>
        <div className="navigation">
          <Link to="/login">
            <Button>LOGIN</Button>
          </Link>
          <Link to="/signup">
            <Button>SIGN UP</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

LandingPageContent.propTypes = {
  me: PropTypes.object,
  meError: PropTypes.object,
}

LandingPageContent.defaultProps = {
  me: null,
  meError: null,
}

const mapStateToProps = state => (
  {
    me: state.usersReducer.me,
    meError: state.usersReducer.meError,
  }
);

export default connect(
  mapStateToProps,
  {},
)(LandingPageContent);
