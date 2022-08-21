// Package
import Image from 'next/image';
import Destination from '../../public/images/svg/Destination.svg';
import { Button, Container, Stack, Typography } from '@mui/material';
import { NextLinkComposed } from 'components/override/Link';

// Component

// Main
const LoginCta: React.FC = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        mb: { xs: 2, lg: 4 },
      }}
    >
      <Stack
        sx={{
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Image
          src={Destination}
          width="150"
          height="150"
          alt="Benefits"
          layout="intrinsic"
        />
        <Typography
          sx={{ fontSize: { xs: 24, lg: 36 }, fontWeight: 'bold' }}
          gutterBottom
        >
          Plan your next trip today
        </Typography>
        <Typography
          sx={{ fontSize: { xs: 18, lg: 20 }, mb: 2, color: 'text.secondary' }}
        >
          Your one-stop travel planner. Bringing people together is our mission.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={NextLinkComposed}
          to={{
            pathname: '/login',
          }}
        >
          Get started
        </Button>
      </Stack>
    </Container>
  );
};

export default LoginCta;
