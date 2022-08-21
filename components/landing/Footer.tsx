// Package
import Image from 'next/image';
import { Box, Grid, Link, Stack, Typography } from '@mui/material';
import { visuallyHidden } from '@mui/utils';

// Data
const NAVIGATION = [
  { visibleName: 'Product', internalName: 'product' },
  { visibleName: 'Features', internalName: 'features' },
  // { visibleName: 'Suggestion', internalName: 'suggestion' },
];
const LEGAL = [
  { visibleName: 'Terms of Service', internalName: 'legal' },
  { visibleName: 'Privacy Policy', internalName: 'privacy' },
  { visibleName: 'Contact Us', internalName: 'feedback' },
];

// Main
const Footer: React.FC = () => {
  return (
    <>
      <Grid
        container
        alignItems="center"
        sx={{ borderTop: 1, borderColor: 'primary.main', p: 3 }}
      >
        <Grid item xs={12} lg={3}>
          <Link
            href="/"
            underline="none"
            sx={{
              display: 'inline-flex',
              flexDirection: 'row',
              alignItems: 'center',
              mb: 1,
            }}
          >
            <Image
              src="/images/logo.png"
              alt="N"
              width="32"
              height="32"
              className="w-8"
            ></Image>

            <Typography component="h2" variant="h5" sx={{ fontWeight: 'bold' }}>
              AirJourni
            </Typography>
          </Link>

          <Typography variant="subtitle1" color={'text.secondary'}>
            AirJourni&apos;s mission is to remove the hassles of planning and
            bring friends together easier and faster than ever before.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          lg={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {NAVIGATION.map((item, index) => (
            <Link key={index} href={`/#${item.internalName}`} underline="none">
              {item.visibleName}
            </Link>
          ))}
        </Grid>

        <Grid
          item
          xs={12}
          lg={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {LEGAL.map((item, index) => (
            <Link key={index} href={`/${item.internalName}`} underline="none">
              {item.visibleName}
            </Link>
          ))}
        </Grid>

        <Grid
          item
          xs={12}
          lg={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ mb: 1 }}>Follow us</Typography>
          <Stack direction="row" spacing={2}>
            <Link
              href="https://twitter.com/helloductrann"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
            >
              <Box sx={visuallyHidden}>Twitter</Box>
              <Twitter />
            </Link>
            <Link
              href="https://www.instagram.com/helloductran/"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
            >
              <Box sx={visuallyHidden}>Instagram</Box>
              <Instagram />
            </Link>
            <Link
              href="https://www.linkedin.com/in/hellductrann/"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
            >
              <Box sx={visuallyHidden}>Linkedin</Box>
              <Linkedin />
            </Link>
          </Stack>
        </Grid>
      </Grid>

      <Box
        sx={{
          mb: 2,
          fontSize: 'small',
          textAlign: 'center',
          color: 'text.secondary',
        }}
      >
        © {new Date().getFullYear()} AirJourni - Made with ♥ in Atlanta -
        Illustrations by{' '}
        <Link
          href="https://storyset.com/"
          target="_blank"
          rel="noopener  noreferrer"
        >
          Storyset
        </Link>
      </Box>
    </>
  );
};

const Twitter = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
  </svg>
);

const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);

export default Footer;
