// Package
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useAuth } from '../lib/context/auth.context';
import { useEffect } from 'react';

// Component
import LandingContainer from '../components/landing/LandingContainer';
import Spinner from '../components/Spinner';

// Main Component
const Home: NextPage = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  });

  return !user && !loading ? <LandingContainer /> : <Spinner />;
};

export default Home;
