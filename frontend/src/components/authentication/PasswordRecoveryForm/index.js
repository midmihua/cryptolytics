import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { sendPasswordResetLink, clearSendPasswordResetLink } from 'redux/reducers/users';

import { Link } from 'react-router-dom';

import { Field, reduxForm } from 'redux-form';
import { Form, Message, Segment, Header, Icon } from 'semantic-ui-react';
import TextField from 'components/redux-form-adapters/TextField';
import Button from 'components/elements/buttons/Button';

import validate from './validate';

class PasswordRecoveryForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    sendPasswordResetLink: PropTypes.func.isRequired,
    clearSendPasswordResetLink: PropTypes.func.isRequired,
    sendPasswordResetLinkSuccess: PropTypes.object,
    sendPasswordResetLinkError: PropTypes.object,
  };

  static defaultProps = {
    sendPasswordResetLinkSuccess: null,
    sendPasswordResetLinkError: null,
  };

  componentWillUnmount() {
    this.props.clearSendPasswordResetLink();
  }

  handleSubmit = (values) => {
    this.props.sendPasswordResetLink(values.email);
  }

  render() {
    const { sendPasswordResetLinkSuccess, sendPasswordResetLinkError } = this.props;

    return (
      <div className="password-recovery-form__component">
        <Segment basic>
          <Link to="/">
            <Icon name="home" size="big" />
          </Link>
          <Header as="h2">Password Recovery</Header>

          {sendPasswordResetLinkSuccess ?
            <Message
              success
              header="Password Recovery"
              content={sendPasswordResetLinkSuccess.detail}
            />
            :
            <Form
              onSubmit={this.props.handleSubmit(this.handleSubmit)}
              error={!this.props.valid}
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

              <Button submit>
                SEND RESET LINK
              </Button>

            </Form>
          }

          {sendPasswordResetLinkError &&
            <Message
              warning
              header="Password Recovery Error"
              content="Password Recovery Error"
            />
          }

        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    sendPasswordResetLinkSuccess: state.usersReducer.sendPasswordResetLinkSuccess,
    sendPasswordResetLinkError: state.usersReducer.sendPasswordResetLinkError,
  }
);

export default connect(
  mapStateToProps,
  {
    sendPasswordResetLink,
    clearSendPasswordResetLink,
  },
)(reduxForm({
  form: 'PasswordRecoveryForm',
  validate,
})(PasswordRecoveryForm));
