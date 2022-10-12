// Package
import type { NextPage } from 'next';

// Component
import AuthCheck from '../components/AuthCheck';
import LoginContainer from '../components/login/LoginContainer';

// Main Component
const Login: NextPage = () => {
  return (
    <AuthCheck>
      <LoginContainer />
    </AuthCheck>
  );
};

export default Login;
