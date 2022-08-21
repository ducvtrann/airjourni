// Package
import Image from 'next/image';
import Link from 'next/link';
import heroImg from 'public/images/svg/hero-travelers.svg';
import { Stack, Box, Typography, Button } from '@mui/material';
import { NextLinkComposed } from 'components/override/Link';

// Main
const Hero: React.FC = () => {
  return (
    <Stack direction={{ sm: 'column-reverse', lg: 'row' }}>
      <Box
        sx={{
          flex: { sm: '100%', lg: '50%' },
          p: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            color: { xs: 'text.main' },
            fontWeight: 'bold',
            fontSize: { xs: 32, xl: 60 },
          }}
        >
          Less time planning and more time enjoying your next trip
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            color: { xs: 'text.secondary' },
            fontSize: { xs: 16, xl: 20 },
          }}
        >
          Plan your next trip with all the information available in one place.
          No switching between different apps to plan one trip.
        </Typography>

        <Stack
          spacing={1}
          direction="row"
          sx={{ alignSelf: { sm: 'center', lg: 'flex-start' }, pt: 2 }}
        >
          <Button
            variant="contained"
            component={NextLinkComposed}
            to={{
              pathname: '/login',
            }}
          >
            Get started
          </Button>
          <Link href="#features" passHref>
            <Button variant="outlined">See features</Button>
          </Link>
        </Stack>
      </Box>
      <Box sx={{ flex: { sm: '100%', lg: '50%' }, p: 3 }}>
        <Image
          src={heroImg}
          width="640"
          height="505"
          alt="Hero Illustration"
          layout="intrinsic"
          loading="lazy"
        />
      </Box>
    </Stack>
  );
};

export default Hero;
