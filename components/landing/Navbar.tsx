// Package
import Image from 'next/image';
import { useAuth } from '../../lib/context/auth.context';
import { useMediaQuery } from 'react-responsive';
import { Toolbar, Button, Typography } from '@mui/material';
import { NextLinkComposed } from 'components/override/Link';

// Component
import AvatarMenu from 'components/AvatarMenu';

// Main
const Navbar: React.FC = () => {
  const { user } = useAuth();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const hideNavbar = user && isMobile;

  if (hideNavbar) return <></>;
  return (
    <Toolbar id="product">
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
      <AvatarMenu user={user} />
    </Toolbar>
  );
};

export default Navbar;
