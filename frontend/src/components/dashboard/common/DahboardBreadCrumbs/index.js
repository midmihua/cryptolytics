import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import './DahboardBreadCrumbs.css';


const DashboardBreadCrumbs = ({ breadcrumbs }) => {
  if (
    !breadcrumbs ||
    (breadcrumbs && breadcrumbs.length === 0)
  ) return null;

  return (
    <div className="dashboard-breadcrumbs__component">
      {breadcrumbs.map(item => (
        <Link
          to={item.link || '#'}
        >
          {item.value}
          <span>&nbsp;&nbsp;&#8594;&nbsp;&nbsp;</span>
        </Link>
      ))}
    </div>
  );
};

DashboardBreadCrumbs.propTypes = {
  breadcrumbs: PropTypes.object,
};

DashboardBreadCrumbs.defaultProps = {
  breadcrumbs: null,
};

const mapStateToProps = state => (
  {
    breadcrumbs: state.commonReducer.breadcrumbs,
  }
);

export default connect(mapStateToProps)(DashboardBreadCrumbs);
