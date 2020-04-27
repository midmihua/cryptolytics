import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { setActivePage, resetActivePage } from 'redux/common/actions';
import { Redirect } from 'react-router-dom';

import DashboardTopMenu from 'components/dashboard/common//DashboardTopMenu';
import DashboardSideMenu from 'components/dashboard/common/DashboardSideMenu';
import DashboardContentArea
  from 'components/dashboard/common//DashboardContentArea';
import DashboardFooter from 'components/dashboard/common//DashboardFooter';

import { getCookie } from 'utils/cookies';

import './DashboardLayout.css';

const DashboardLayout = props => {
  const {
    me,
    meError,
    children,
    pageTitle,
    activePage,
    setActivePage,
    resetActivePage,
  } = props;

  useEffect(() => {
    setActivePage(activePage);

    return () => {
      resetActivePage();
    };
  }, []);

  if ((!me && !getCookie('accessToken')) || meError) {
    return <Redirect to="/" />
  };

  if (!me) return null;

  return (
    <div className="dashboard-layout__component">
      {/* Side Menu Wrapper */}
      <div className="side-menu-wrapper">
        <DashboardSideMenu />
      </div>

      {/* Main Wrapper */}
      <div className="main-wrapper">
        {/* Top Menu */}
        <div className="top-menu-wrapper">
          <DashboardTopMenu
            pageTitle={pageTitle}
          />
        </div>

        {/* Content Area */}
        <div className="content-area-wrapper">
          <DashboardContentArea>
            {children}
          </DashboardContentArea>
        </div>

        {/* Footer */}
        <div className="footer-wrapper">
          <DashboardFooter />
        </div>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  me: PropTypes.object,
  meError: PropTypes.object,
  setActivePage: PropTypes.func.isRequired,
  resetActivePage: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]).isRequired,
  pageTitle: PropTypes.string,
  activePage: PropTypes.string,
};

DashboardLayout.defaultProps = {
  me: null,
  meError: null,
  pageTitle: null,
  activePage: null,
};

const mapStateToProps = state => (
  {
    me: state.usersReducer.me,
    meError: state.usersReducer.meError,
  }
);

export default connect(
  mapStateToProps,
  {
    setActivePage,
    resetActivePage,
  },
)(DashboardLayout);
