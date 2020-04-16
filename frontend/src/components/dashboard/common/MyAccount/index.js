import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { logout } from 'redux/reducers/users';

import { Link } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';

import './MyAccount.css';

class MyAccount extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    me: PropTypes.object,
  };

  static defaultProps = {
    me: null,
  };

  state = {
    showPopup: false,
  };

  handleClickOutside = () => {
    this.setState({ showPopup: false });
  }

  render() {
    const { me, logout } = this.props;
    const { showPopup } = this.state;

    return (
      <div className="dahsboard-my-account__component">
        <div className="account-name">
          Hello, <span>{me.username}</span>
        </div>
        <div
          className="menu-logo"
          onClick={() => {
            this.setState({ showPopup: !showPopup });
          }}
          role="button"
          tabIndex={-1}
        />

        {showPopup &&
          <div className="my-account-popup">
            <div className="email">{me.email}</div>
            <Link
              className="action-item"
              to="#"
            >
              ACCOUNT SETTINGS
            </Link>
            <Link
              className="action-item"
              to="#"
              onClick={logout}
            >
              LOGOUT
            </Link>
          </div>
        }

      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    me: state.usersReducer.me,
  }
);

export default connect(
  mapStateToProps,
  {
    logout,
  },
)(onClickOutside(MyAccount));
