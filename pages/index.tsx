// Package
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useAuth } from '../lib/context/auth.context';
import { useEffect } from 'react';

// Data
import { benefitOne, benefitTwo } from '../lib/static/benefitData';

// Component
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Benefit from '../components/Benefit';
import LoginCta from '../components/LoginCta';
import Feedback from '../components/Feedback';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
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

  if (!user && !loading) {
    return (
      <>
        <Navbar />
        <Hero />
        <SectionTitle
          title="Features"
          subTitle="For every trip and every destination - one set of tools"
        />
        <Benefit {...benefitOne} />
        <Benefit {...benefitTwo} />
        <LoginCta />
        <Feedback />
        <Footer />
      </>
    );
  } else {
    return <Spinner />;
  }
};

export default Home;
