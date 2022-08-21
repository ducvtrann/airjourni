// Package
import { Box } from '@mui/material';
import { useState } from 'react';

// Component
import TripContainer from 'components/trip/TripContainer';
import AttractionContainer from 'components/attraction/AttractionContainer';
import FlightContainer from '../flight/FlightContainer';
import ProfileContainer from '../profile/ProfileContainer';
import MobileNav from '../MobileNav';

// Interface
interface IViews {
  trips: JSX.Element;
  attractions: JSX.Element;
  flights: JSX.Element;
  profile: JSX.Element;
}

// Main
const MobileContainer: React.FC = () => {
  const [currentView, setCurrentView] = useState('trips');
  const views: IViews = {
    trips: <TripContainer />,
    attractions: <AttractionContainer />,
    flights: <FlightContainer />,
    profile: <ProfileContainer />,
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Box sx={{ flexGrow: 1 }}>{views[currentView as keyof IViews]}</Box>
      <MobileNav currentView={currentView} setCurrentView={setCurrentView} />
    </Box>
  );
};

export default MobileContainer;
