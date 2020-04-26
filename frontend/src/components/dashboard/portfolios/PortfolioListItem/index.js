import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './PortfolioListItem.css';


const PortfolioListItem = ({ item }) => (
  <Link
    to={`/dashboard/portfolios/${item._id}`}
    className="portfolio-list-item__component"
  >
    <div className="title">{item.name}</div>
    <div className="descriptio">{item.description}</div>
  </Link>
);

PortfolioListItem.propTypes = {
  item: PropTypes.object,
};

PortfolioListItem.defaultProps = {
  item: null,
};

export default PortfolioListItem;
