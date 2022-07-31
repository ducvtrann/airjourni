// Package
import { useState } from 'react';

// Component
import ChatContainer from 'components/trip/TripContainer';
import AttractionContainer from 'components/attraction/AttractionContainer';
import FlightContainer from './flight/FlightContainer';
import ProfileContainer from './ProfileContainer';
import MobileNav from './MobileNav';

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
    trips: <ChatContainer />,
    attractions: <AttractionContainer />,
    flights: <FlightContainer />,
    profile: <ProfileContainer />,
  };

  return (
    <>
      {views[currentView as keyof IViews]}
      <MobileNav currentView={currentView} setCurrentView={setCurrentView} />
    </>
  );
};

export default MobileContainer;
