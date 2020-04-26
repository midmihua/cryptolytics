import React from 'react';
import PropTypes from 'prop-types';

import './DashboardContentArea.css';

const DashboardContentArea = ({ children }) => (
  <div className="dashboard-content-area__component">
    {children}
  </div>
);

DashboardContentArea.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]).isRequired,
};

export default DashboardContentArea;
