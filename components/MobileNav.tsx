// Package
import { Dispatch, SetStateAction } from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import {
  AirplaneTicket,
  AccountCircle,
  AddLocationAlt,
  Luggage,
} from '@mui/icons-material';

// Interface
interface IMobileNav {
  currentView: string;
  setCurrentView: Dispatch<SetStateAction<string>>;
}

// Data
const navItems = [
  {
    visibleName: 'Trips',
    internalName: 'trips',
    icon: <Luggage />,
  },
  {
    visibleName: 'Attractions',
    internalName: 'attractions',
    icon: <AddLocationAlt />,
  },
  {
    visibleName: 'Flights',
    internalName: 'flights',
    icon: <AirplaneTicket />,
  },
  {
    visibleName: 'Profile',
    internalName: 'profile',
    icon: <AccountCircle />,
  },
];

// Main
const MobileNav: React.FC<IMobileNav> = ({ currentView, setCurrentView }) => {
  return (
    <Box sx={{ width: '100%', borderTop: 1, borderColor: 'grey.300' }}>
      <BottomNavigation
        showLabels
        value={currentView}
        onChange={(_event, newValue) => {
          setCurrentView(newValue);
        }}
      >
        {navItems.map((nav, index) => (
          <BottomNavigationAction
            key={index}
            value={nav.internalName}
            label={nav.visibleName}
            icon={nav.icon}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
};

export default MobileNav;
