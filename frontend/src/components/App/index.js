import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import MainAuthContainer from 'components/authentication/MainAuthContainer';
import routes from 'routes';
import CommonLoader from 'components/common/CommonLoader';

import './App.css';


const App = ({ siteLoading }) => (
  <BrowserRouter>
    <MainAuthContainer>
      <CommonLoader active={!!siteLoading} />
      {routes}
    </MainAuthContainer>
  </BrowserRouter>
);

App.propTypes = {
  siteLoading: PropTypes.bool,
}

App.defaultProps = {
  siteLoading: false,
}

const mapStateToProps = state => (
  {
    siteLoading: state.commonReducer.siteLoading,
  }
);

export default connect(
  mapStateToProps,
  null,
)(App);
