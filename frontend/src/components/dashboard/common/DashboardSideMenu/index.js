import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import './DashboardSideMenu.css';


const DashboardSideMenu = ({ activePage }) => {
  const [narrowMenu, setNarrowManu] = useState(false);

  const toggleNarrowMenu = () => {
    setNarrowManu(!narrowMenu);
  };

  return (
    <div
      className={`dashboard-side-menu__component${narrowMenu ? ' narrow' : ''}`}
    >
      {/* Logo */}
      <div className="logo-wrapper">
        <div className="logo">Cryptolytics</div>
      </div>

      {/* Navigation */}
      <div className="nav-wrapper">
        {/* Home */}
        <Link
          to="/dashboard/home"
          className={`nav-item${activePage === 'home' ? ' active' : ''}`}
        >
          <div className="border-left" />
          <div className="icon home" />
          <div className="name">Home</div>
        </Link>

        {/* Portfolios */}
        <Link
          to="/dashboard/portfolios"
          className={`nav-item${activePage === 'portfolios' ? ' active' : ''}`}
        >
          <div className="border-left" />
          <div className="icon portfolios" />
          <div className="name">Portfolios</div>
        </Link>

        {/* Postitions */}
        <Link
          to="/dashboard/positions"
          className={`nav-item${activePage === 'positions' ? ' active' : ''}`}
        >
          <div className="border-left" />
          <div className="icon positions" />
          <div className="name">Positions</div>
        </Link>

        {/* Analytics */}
        {/* <Link
          to="/dashboard/positions"
          className={`nav-item${activePage === 'positions' ? ' active' : ''}`}
        >
          <div className="border-left" />
          <div className="icon positions" />
          <div className="name">Analytics</div>
        </Link> */}

      </div>

      {/* Hide button */}
      <div
        className={`hide-button${narrowMenu ? ' narrow' : ''}`}
        onClick={toggleNarrowMenu}
        role="button"
        tabIndex={-1}
      />
    </div>
  );
};

DashboardSideMenu.propTypes = {
  activePage: PropTypes.string,
};

DashboardSideMenu.defaultProps = {
  activePage: null,
};


const mapStateToProps = state => (
  {
    activePage: state.commonReducer.activePage,
  }
);

export default connect(
  mapStateToProps,
  {},
)(DashboardSideMenu);
