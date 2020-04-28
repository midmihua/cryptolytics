import React from 'react';
import PropTypes from 'prop-types';

import DashboardBreadCrumbs
  from 'components/dashboard/common/DahboardBreadCrumbs';
import MyAccount from 'components/dashboard/common/MyAccount';

import './DashboardTopMenu.css';


const DashboardTopMenu = ({ pageTitle }) => (
  <div className="dashboard-top-menu__component">
    <div className="wrapper">
      <div className="page-name">{pageTitle}</div>
      <MyAccount />
    </div>
    <DashboardBreadCrumbs />
    <div className="bottom-line" />
  </div>
);

DashboardTopMenu.propTypes = {
  pageTitle: PropTypes.string,
}

DashboardTopMenu.defaultProps = {
  pageTitle: null,
}

export default DashboardTopMenu;
