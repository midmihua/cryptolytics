import React from 'react';

import AuthLayout from 'components/authentication/AuthLayout';
import LoginForm from 'components/authentication/LoginForm';

const LoginPage = () => (
  <AuthLayout>
    <LoginForm />
  </AuthLayout>
);

export default LoginPage;
