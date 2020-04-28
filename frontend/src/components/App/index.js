import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import MainAuthContainer from 'components/authentication/MainAuthContainer';
import routes from 'routes';
import CommonLoader from 'components/common/CommonLoader';
import NotFound from 'components/errors/NotFound';

import './App.css';


const App = ({ siteLoading, notFound }) => (
  <BrowserRouter>
    <MainAuthContainer>
      <CommonLoader active={!!siteLoading} />
      {notFound ? <NotFound /> : routes}
    </MainAuthContainer>
  </BrowserRouter>
);

App.propTypes = {
  siteLoading: PropTypes.bool,
  notFound: PropTypes.bool,
}

App.defaultProps = {
  siteLoading: false,
  notFound: false,
}

const mapStateToProps = state => (
  {
    siteLoading: state.commonReducer.siteLoading,
    notFound: state.commonReducer.notFound,
  }
);

export default connect(
  mapStateToProps,
  null,
)(App);
