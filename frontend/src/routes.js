import React from 'react';

import { Route, Switch } from 'react-router-dom';

import MainLandingPage from 'pages/landing/MainLandingPage';

import LoginPage from 'pages/authentication/LoginPage';
import SignupPage from 'pages/authentication/SignupPage';

import HomePage from 'pages/dashboard/HomePage';

import PortfoliosPage from 'pages/dashboard/portfolios/PortfoliosPage';
import SinglePortfolioPage from 'pages/dashboard/portfolios/SinglePortfolioPage';

import PositionsPage from 'pages/dashboard/positions/PositionsPage';

export default (
  <Switch>
    {/* Landing */}
    <Route path="/" exact component={MainLandingPage} />

    {/* Authentication */}
    <Route path="/login" name="login" component={LoginPage} />
    <Route path="/signup" name="signup" component={SignupPage} />

    {/* Dashboard */}
    <Route path="/dashboard/home" name="home" component={HomePage} />

    <Route
      path="/dashboard/portfolios/:portfolioId"
      name="single-portfolio"
      component={SinglePortfolioPage}
    />
    <Route path="/dashboard/portfolios" name="portfolios" component={PortfoliosPage} />

    <Route path="/dashboard/positions" name="positions" component={PositionsPage} />

    {/* 404 Not Found */}
    <Route render={() => <h2>404 page not found!</h2>} />

  </Switch>
);
