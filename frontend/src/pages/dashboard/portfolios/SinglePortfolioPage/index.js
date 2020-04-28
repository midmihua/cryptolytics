import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { setBreadcrumbs, clearBreadcrumbs } from 'redux/common/actions';

import DashboardLayout from 'components/dashboard/common/DashboardLayout';
import SinglePortfolioPageContent
  from 'components/dashboard/portfolios/SinglePortfolioPageContent';


const SinglePortfolioPage = props => {
  const {
    match,
    portfolioDetails,
    setBreadcrumbs,
    clearBreadcrumbs,
  } = props;

  const calculateBreadcrumbs = (portfolioDetails) => {
    if (portfolioDetails && portfolioDetails.name) {
      return [
        {
          value: 'Portfolios',
          link: '/dashboard/portfolios',
        },
        {
          value: portfolioDetails.name,
        },
      ];
    }
    return [];
  };

  useEffect(() => {
    setBreadcrumbs(calculateBreadcrumbs(portfolioDetails));
    return () => {
      clearBreadcrumbs();
    };
  }, [portfolioDetails]);

  return (
    <DashboardLayout
      pageTitle="Portfolios"
      activePage="portfolios"
    >
      <SinglePortfolioPageContent
        portfolioId={match.params.portfolioId}
      />
    </DashboardLayout>
  );
};


SinglePortfolioPage.propTypes = {
  setBreadcrumbs: PropTypes.func.isRequired,
  clearBreadcrumbs: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  portfolioDetails: PropTypes.object,
};

SinglePortfolioPage.defaultProps = {
  portfolioDetails: null,
};

const mapStateToProps = state => (
  {
    portfolioDetails: state.portfoliosReducer.portfolioDetails,
  }
);

export default connect(
  mapStateToProps,
  {
    setBreadcrumbs,
    clearBreadcrumbs,
  },
)(SinglePortfolioPage);
