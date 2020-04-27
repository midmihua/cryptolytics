import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {
  fetchPortfolioList,
  clearFetchPortfolioList,
} from 'redux/portfolios/actions';

import { Loader } from 'semantic-ui-react';

import PortfolioListItem from 'components/dashboard/portfolios/PortfolioListItem';


const PortfolioList = props => {
  const {
    fetchPortfolioList,
    clearFetchPortfolioList,
    portfolioList,
    portfolioListError,
  } = props;

  useEffect(() => {
    fetchPortfolioList();

    return () => {
      clearFetchPortfolioList();
    };
  }, []);

  const loader = !portfolioList &&
    !portfolioListError &&
    <Loader active />;

  const renderPortfolioList = portfolioList &&
    portfolioList.length > 0 &&
    portfolioList.map(item => (
    <PortfolioListItem
      key={`portfolio_list_item_key_${item._id}`}
      item={item}
    />
  ));

  const noPortfoliosMessage = portfolioList &&
    portfolioList.length === 0 &&
    <div>You haven't created portfolios</div>;

  const errorMessage = portfolioListError &&
    <div>{portfolioListError.message}</div>;

  return (
    <div className="portfolio-list__component">
      {loader}
      {renderPortfolioList}
      {noPortfoliosMessage}
      {errorMessage}
    </div>
  );
};

PortfolioList.propTypes = {
  fetchPortfolioList: PropTypes.func.isRequired,
  clearFetchPortfolioList: PropTypes.func.isRequired,
  portfolioList: PropTypes.arrayOf(PropTypes.shape),
  portfolioListError: PropTypes.object,
};

PortfolioList.defaultProps = {
  portfolioList: null,
  portfolioListError: null,
};

const mapStateToProps = state => (
  {
    portfolioList: state.portfoliosReducer.portfolioList,
    portfolioListError: state.portfoliosReducer.portfolioListError,
  }
);

export default connect(
  mapStateToProps,
  {
    fetchPortfolioList,
    clearFetchPortfolioList,
  },
)(PortfolioList);
