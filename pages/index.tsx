// Package
import type { NextPage } from 'next';

// Data
import { benefitOne, benefitTwo } from '../lib/fixedData/benefitData';

// Component
import Navbar from '../components/templates/navbar/Navbar';
import Hero from '../components/templates/hero/Hero';
import Benefit from '../components/templates/benefit/Benefit';
import LoginCta from '../components/templates/cta/LoginCta';
import Feedback from '../components/templates/feedback/Feedback';
import Footer from '../components/templates/footer/Footer';
import SectionTitle from '../components/templates/sectionTitle/SectionTitle';

// Main Component
const Home: NextPage = () => {
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
};

export default Home;
