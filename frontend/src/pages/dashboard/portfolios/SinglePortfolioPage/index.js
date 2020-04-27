import React from 'react';

import DashboardLayout from 'components/dashboard/common/DashboardLayout';
import SinglePortfolioPageContent
  from 'components/dashboard/portfolios/SinglePortfolioPageContent';

const SinglePortfolioPage = ({ match }) => (
  <DashboardLayout
    pageTitle="Portfolios"
    activePage="portfolios"
  >
    <SinglePortfolioPageContent
      portfolioId={match.params.portfolioId}
    />
  </DashboardLayout>
);

export default SinglePortfolioPage;
