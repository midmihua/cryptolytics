import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { verifyRegistrationEmail } from 'redux/reducers/users';

import { Redirect } from 'react-router-dom';

import { Message } from 'semantic-ui-react';
import CommonLoader from 'components/common/CommonLoader';


class EmailVerificationContent extends Component {
  static propTypes = {
    verifyRegistrationEmail: PropTypes.func.isRequired,
    verificationKey: PropTypes.string.isRequired,
    accessToken: PropTypes.string,
    verifyRegistrationEmailError: PropTypes.object,
  };

  static defaultProps = {
    accessToken: null,
    verifyRegistrationEmailError: null,
  };

  componentDidMount() {
    this.props.verifyRegistrationEmail(this.props.verificationKey);
  }

  render() {
    const { accessToken, verifyRegistrationEmailError } = this.props;

    if (accessToken) {
      return <Redirect to="/" />;
    }

    return (
      <div className="email-verification-content__component">
        <CommonLoader active={!accessToken && !verifyRegistrationEmailError} />

        <h1>Email Verification Content</h1>

        {verifyRegistrationEmailError &&
          <Message
            warning
            header="Verification Error"
            content={verifyRegistrationEmailError.message}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    accessToken: state.usersReducer.accessToken,
    verifyRegistrationEmailError: state.usersReducer.verifyRegistrationEmailError,
  }
);

export default connect(
  mapStateToProps,
  {
    verifyRegistrationEmail,
  },
)(EmailVerificationContent);
