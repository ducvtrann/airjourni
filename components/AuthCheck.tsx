// Package
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../lib/context/auth.context';

// Component
import Spinner from './Spinner';
import SignIn from './SignIn';

// Interface
interface IAuthCheck {
  children: React.ReactNode;
}

// Data
const redirectRoutes = ['/', '/login'];

// Main
const AuthCheck: React.FC<IAuthCheck> = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && !loading && redirectRoutes.includes(router.pathname)) {
      router.replace('/dashboard');
    }
  }, [user, loading, router]);

  if (user && !loading && !redirectRoutes.includes(router.pathname)) {
    return <>{children}</>;
  } else if (!user && !loading) {
    return <SignIn />;
  } else {
    return <Spinner />;
  }
};

export default AuthCheck;
