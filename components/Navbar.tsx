// Package
import Image from 'next/image';
import { useAuth } from '../lib/context/auth.context';
import { Box, Button, Typography } from '@mui/material';
import { NextLinkComposed } from 'components/override/Link';

// Component
import AvatarMenu from './AvatarMenu';

// Main
const Navbar: React.FC = () => {
  const { user } = useAuth();

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button
          component={NextLinkComposed}
          to={{
            pathname: user ? '/dashboard' : '/',
          }}
        >
          <Image
            src="/images/logo.png"
            alt="Fly to destination"
            width="32"
            height="32"
          />
        </Button>
        <Typography
          component="h2"
          variant="h5"
          sx={{ flex: 1, color: 'primary.main', fontWeight: 'bold' }}
        >
          AirJourni
        </Typography>
      </Box>
      <AvatarMenu user={user} />
    </>
  );
};

export default Navbar;
