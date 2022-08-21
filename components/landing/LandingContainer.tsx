// Component
import Container from '@mui/material/Container';
import LoginCta from 'components/cta/LoginCta';
import Navbar from 'components/landing/Navbar';
import Feature from './Feature';
import Footer from './Footer';
import Hero from './Hero';

// Component

const LandingContainer: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <main>
        <Hero />
        <Feature />
        <LoginCta />
      </main>
      <Footer />
    </Container>
  );
};

export default LandingContainer;
