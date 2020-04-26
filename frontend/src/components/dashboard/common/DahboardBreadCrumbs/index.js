import React from 'react';
import PropTypes from 'prop-types';

import './DahboardBreadCrumbs.css';

const DashboardBreadCrumbs = ({ children }) => (
  <div className="dashboard-breadcrumbs__component">
    Position > ZIL/ETH > Orders
  </div>
);

DashboardBreadCrumbs.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DashboardBreadCrumbs;