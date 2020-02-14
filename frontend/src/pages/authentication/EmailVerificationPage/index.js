import React from 'react';
import PropTypes from 'prop-types';

import EmailVerificationContent from 'components/authentication/EmailVerificationContent/index.js';

const EmailVerificationPage = (props) => (
  <div className="email-verification-page__component">
    {props.match.params.key &&
      <EmailVerificationContent verificationKey={props.match.params.key} />
    }
  </div>
);

EmailVerificationPage.propTypes = {
  props: PropTypes.object.isRequired,
};

export default EmailVerificationPage;
