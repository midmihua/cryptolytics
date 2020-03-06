import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {
  fetchMe,
  logoutComplete,
} from 'redux/reducers/users';

import { getCookie, setCookies, removeCookie } from 'utils/cookies';

class MainAuthContainer extends Component {
  static propTypes = {
    fetchMe: PropTypes.func.isRequired,
    logoutComplete: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired,
    me: PropTypes.object,
    accessToken: PropTypes.string,
    refreshToken: PropTypes.string,
  }

  static defaultProps = {
    me: null,
    accessToken: null,
    refreshToken: null,
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps) {

  }

  // componentDidMount() {
  //   const cookieAccessToken = getCookie('accessToken');
  //   const cookieRefreshToken = getCookie('refreshToken');

  //   if (cookieAccessToken) {
  //     this.props.fetchMe();
  //   }
  // }

  // componentDidUpdate(prevProps) {
  //   if (!prevProps.accessToken && this.props.accessToken) {
  //     setCookies(this.props.accessToken, this.props.refreshToken);
  //     this.props.fetchMe();
  //   }

  //   if (!prevProps.loggingOut && this.props.loggingOut) {
  //     removeCookie();
  //     this.props.logoutComplete();
  //     window.location.href = '/';
  //   }
  // }

  render() {
    return (
      <Fragment>
        {this.props.children}
      </Fragment>
    );
  }
}

const mapStateToProps = state => (
  {
    me: state.usersReducer.me,
    accessToken: state.usersReducer.accessToken,
    loggingOut: state.usersReducer.loggingOut,
  }
);

export default connect(
  mapStateToProps,
  {
    fetchMe,
    logoutComplete,
  },
)(MainAuthContainer);
