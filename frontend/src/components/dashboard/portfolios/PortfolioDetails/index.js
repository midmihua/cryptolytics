import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {
  fetchPortfolioDetails,
  clearFetchPortfolioDetails,
} from 'redux/portfolios/actions';

import { Loader } from 'semantic-ui-react';

import CommonModal from 'components/common/CommonModal';


const PortfolioDetails = props => {
  const {
    portfolioId,
    fetchPortfolioDetails,
    clearFetchPortfolioDetails,
    portfolioDetails,
    portfolioDetailsError,
  } = props;

  useEffect(() => {
    fetchPortfolioDetails(portfolioId);

    return () => {
      clearFetchPortfolioDetails();
    };
  }, []);

  const loader = !portfolioDetails &&
    !portfolioDetailsError &&
    <Loader active />;

  const details = portfolioDetails &&
    <Fragment>
      <div className="title">{portfolioDetails.name}</div>
    </Fragment>;

  const errorMessage = portfolioDetailsError &&
    <div>{portfolioDetailsError.message}</div>;

  return (
    <div className="portfolio-details__component">
      {loader}
      {details}
      {errorMessage}
    </div>
  );
};

PortfolioDetails.propTypes = {
  fetchPortfolioDetails: PropTypes.func.isRequired,
  clearFetchPortfolioDetails: PropTypes.func.isRequired,
  portfolioId: PropTypes.string.isRequired,
  portfolioDetails: PropTypes.object,
  portfolioDetailsError: PropTypes.object,
};

PortfolioDetails.defaultProps = {
  portfolioDetails: null,
  portfolioDetailsError: null,
};

const mapStateToProps = state => (
  {
    portfolioDetails: state.portfoliosReducer.portfolioDetails,
    portfolioDetailsError: state.portfoliosReducer.portfolioDetailsError,
  }
);

export default connect(
  mapStateToProps,
  {
    fetchPortfolioDetails,
    clearFetchPortfolioDetails,
  }
)(PortfolioDetails);
