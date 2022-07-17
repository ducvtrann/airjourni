// Package
import type { NextPage } from 'next';

// Component
import AuthCheck from '../components/AuthCheck';
import SignIn from '../components/SignIn';

// Main Component
const Login: NextPage = () => {
  return (
    <AuthCheck>
      <SignIn />
    </AuthCheck>
  );
};

export default Login;
