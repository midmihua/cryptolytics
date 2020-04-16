import React from 'react';

import AuthLayout from 'components/authentication/AuthLayout';
import SignupForm from 'components/authentication/SignupForm';

const SignupPage = () => (
  <AuthLayout>
    <SignupForm />
  </AuthLayout>
);

export default SignupPage;
