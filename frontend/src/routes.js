import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainLandingPage from 'pages/landing/MainLandingPage';

import LoginPage from 'pages/authentication/LoginPage';
import SignupPage from 'pages/authentication/SignupPage';
import EmailVerificationPage from 'pages/authentication/EmailVerificationPage';
import PasswordRecoveryPage from 'pages/authentication/PasswordRecoveryPage';

import DashboardPage from 'pages/dashboard/DashboardPage';

export default (
  <BrowserRouter>
    <Switch>
      {/* Landing */}
      <Route path="/" exact component={MainLandingPage} />

      {/* Authentication */}
      <Route path="/login" name="login" component={LoginPage} />
      <Route path="/signup/email-verification/:key" name="email-verification" component={EmailVerificationPage} />
      <Route path="/signup" name="signup" component={SignupPage} />
      <Route path="/password-recovery" name="password-recovery" component={PasswordRecoveryPage} />

      {/* Dashboard */}
      <Route path="/dashboard" name="dashboard" component={DashboardPage} />

    </Switch>
  </BrowserRouter>
);
