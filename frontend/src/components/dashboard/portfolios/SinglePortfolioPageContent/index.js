import React from 'react';
import PropTypes from 'prop-types';

import PortfolioDetails from 'components/dashboard/portfolios/PortfolioDetails';


const SinglePortfolioPageContent = ({ portfolioId }) => (
  <PortfolioDetails
    portfolioId={portfolioId}
  />
);

SinglePortfolioPageContent.propTypes = {
  portfolioId: PropTypes.string.isRequired,
};

export default SinglePortfolioPageContent;
