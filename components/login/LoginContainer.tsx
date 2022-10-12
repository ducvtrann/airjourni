/* eslint-disable react/no-unescaped-entities */
// Package
import Image from 'next/image';
import facebook from '../../public/images/svg/facebook-logo.svg';
import google from '../../public/images/svg/google-logo.svg';
import twitter from '../../public/images/svg/twitter-logo.svg';
import {
  signInWithGoogle,
  signInWithFacebook,
  signInWithTwitter,
} from '../../lib/firebase/authentication';
import { NextLinkComposed } from 'components/override/Link';
import {
  Box,
  Button,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { Key } from 'react';

// Main
const LoginContainer: React.FC = () => {
  const loginMethods = [
    {
      name: 'Facebook',
      color: '#3b5998',
      icon: facebook,
      onclick: signInWithFacebook,
    },
    {
      name: 'Google',
      color: '#DB4437',
      icon: google,
      onclick: signInWithGoogle,
    },
    {
      name: 'Twitter',
      color: '#1da1f2',
      icon: twitter,
      onclick: signInWithTwitter,
    },
  ];

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={false}
        md={7}
        sx={{
          backgroundImage:
            'url(https://source.unsplash.com/random/?travel,nature,destinations)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Button
            component={NextLinkComposed}
            to={{
              pathname: '/',
            }}
            sx={{
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
            disableRipple={true}
          >
            <Image
              src="/images/logo.png"
              alt="Fly to destination"
              width="48"
              height="48"
            />
          </Button>

          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Welcome back to{' '}
            <Typography
              variant="h5"
              component="span"
              sx={{ color: 'primary.main', fontWeight: 'bold' }}
            >
              AirJourni
            </Typography>
          </Typography>
          <Stack spacing={3} sx={{ py: 2 }}>
            {loginMethods.map((provider, index: Key) => (
              <Button
                variant="outlined"
                key={index}
                onClick={() => provider.onclick()}
                sx={{
                  backgroundColor: provider.color,
                  '&:hover': { backgroundColor: provider.color },
                }}
              >
                <Image
                  src={provider.icon}
                  width="24"
                  height="24"
                  alt={`${provider.name} icon`}
                  layout="intrinsic"
                ></Image>
                <Typography
                  sx={{
                    ml: 2,
                    minWidth: 100,
                    textAlign: 'left',
                    color: 'white',
                  }}
                >
                  {provider.name}
                </Typography>
              </Button>
            ))}
          </Stack>
          <Typography sx={{ borderTop: 1, borderColor: 'primary.main', pt: 2 }}>
            When you login, you agree to AirJourni's
            <Link href="/legal" underline="none">
              {' '}
              Terms of Service
            </Link>
            . We will manage information about you as described in our
            <Link href="/privacy" underline="none">
              {' '}
              Privacy Policy
            </Link>
            .
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              fontSize: 'small',
              textAlign: 'center',
              mt: 2,
            }}
          >
            © {new Date().getFullYear()} AirJourni
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginContainer;
